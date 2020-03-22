#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

use Win32::OLE qw( EVENTS );
use WSO;
use WSOSamples;
use FileHandle;

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");

$f = $o->CreateForm(0,0,0,0);

$f->{ClientWidth} = 500;
$f->{ClientHeight} = 300;
$f->CenterControl();
$f->{Text} = "Text Editor";
Win32::OLE->WithEvents($f , 'FormEvents');

$Edit = $f->CreateEdit(0,0,0,0);
$Edit->{Align} = WSO::AL_CLIENT;
$Edit->{HideSelection} = false;
$Edit->{MultiLine} = true;
$Edit->{ScrollBars} = WSO::SS_BOTH;

$Menu = $f->CreateMenuBar(0,0,0,0);
$Menu->{Align} = WSO::AL_TOP;

$t = $Menu->Menu->Add("File");
$OpenItem = $t->Add("Open","CTRL+O");
Win32::OLE->WithEvents($OpenItem , \&FileOpen);

$SaveItem = $t->Add("Save as ...","CTRL+S"); Win32::OLE->WithEvents($SaveItem , \&FileSave);

$t->NewLine();

$ExitItem = $t->Add("Exit","ESC"); Win32::OLE->WithEvents($ExitItem, \&CloseFormHandler);

$t = $Menu->Menu->Add("Edit");

$EditUndo = $t->Add("Undo"); Win32::OLE->WithEvents($EditUndo , \&EditUndo);

$t->NewLine();

$CutItem = $t->Add("Cut"); Win32::OLE->WithEvents($CutItem , \&EditCut);
$CopyItem = $t->Add("Copy"); Win32::OLE->WithEvents($CopyItem , \&EditCopy);
$PasteItem = $t->Add("Paste"); Win32::OLE->WithEvents($PasteItem , \&EditPaste);

$t->NewLine();

$SelectAllItem = $t->Add("Select All"); Win32::OLE->WithEvents($SelectAllItem , \&EditSelectAll);

$t = $Menu->Menu->Add("Format");
$WordWrapItem = $t->Add("Word Wrap");
$WordWrapItem->{CheckBox} = true;
Win32::OLE->WithEvents($WordWrapItem , \&FormatWordWrap);
$t->NewLine();
$FontItem = $t->Add("Font"); Win32::OLE->WithEvents($FontItem, \&FormatFont);

$t = $Menu->Menu->Add("Help");
$HelpItem = $t->Add("About","F1"); Win32::OLE->WithEvents($HelpItem, \&HelpAbout);

$f->CreateStatusBar();

sub FileOpen{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		$st = $f->OpenDialog("","Text Files (*.txt)|*.txt");
		if (length($st)>0)
		{
			$fh = new FileHandle;
			if ($fh->open($st,"r"))
			{
				$Edit->BeginUpdate();
				$Edit->Clear();
				while (defined($line = <$fh>))
				{
					chop $line;
					$Edit->Add($line);
				}
				$Edit->EndUpdate();
				$fh->close();
			} else
			{
				$f->MessageBox("Cannot open file ".$st,"",WSO::MB_ICONERROR);
			}
		}
	}
}

sub FileSave{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		$st = $f->OpenDialog("","Text Files (*.txt)|*.txt");
		if (length($st)>0)
		{
			$fh = new FileHandle;
			if ($fh->open($st,"w"))
			{
				for ($t = 0; $t<$Edit->{Count}; $t++)
				{
					$fh->print($Edit->item($t)."\n");
				}
				$fh->close();
			} else
			{
				$f->MessageBox("Cannot create file ".$st,"",WSO::MB_ICONERROR);
			}
		}
	}
}

sub EditUndo{
	my ($this, $event, @args) = @_;
	$Edit->Undo() if $event eq "OnExecute";
	$this->{Enabled} = $Edit->{CanUndo} if $event eq "OnUpdate";
}

sub EditCut{
	my ($this, $event, @args) = @_;
	$Edit->Cut() if $event eq "OnExecute";
	$this->{Enabled} = $Edit->{SelEnd}!=$Edit->{SelStart} if $event eq "OnUpdate";
}

sub EditCopy{
	my ($this, $event, @args) = @_;
	$Edit->Copy() if $event eq "OnExecute";
	$this->{Enabled} = $Edit->{SelEnd}!=$Edit->{SelStart} if $event eq "OnUpdate";
}

sub EditPaste{
	my ($this, $event, @args) = @_;
	$Edit->Paste() if $event eq "OnExecute";
	$this->{Enabled} = $Edit->{CanPaste} if $event eq "OnUpdate";
}

sub EditSelectAll{
	my ($this, $event, @args) = @_;
	$Edit->SelectAll() if $event eq "OnExecute";
}

sub FormatWordWrap{
	my ($this, $event, @args) = @_;
	$Edit->{WordWrap} = $this->{Checked} if $event eq "OnExecute";
	$this->{Checked} = $Edit->{WordWrap} if $event eq "OnUpdate";
}

sub FormatFont{
	my ($this, $event, @args) = @_;
	$Edit->{Font} = $this->Form->FontDialog($Edit->{Font}) if $event eq "OnExecute";
}

sub HelpAbout{
	my ($this, $event, @args) = @_;
	WSOSamples::AboutWSO($this,"Text Editor Demo") if $event eq "OnExecute";
}

$f->Show();

$o->Run();

sub CloseFormHandler{
	my ($this, $event, @args) = @_;
	$this->Form->Close() if $event eq "OnClick";
	$this->Form->Close() if $event eq "OnExecute";
}

package FormEvents;

sub OnCloseQuery(Sender,ResultPtr)
{
	my ($this, $Sender, $ResultPtr, @args) = @_;
	$ResultPtr->Put($Sender->Form->MessageBox("Do you really want to quit this program?","",WSO::MB_OKCANCEL) == WSO::IDOK);
}
