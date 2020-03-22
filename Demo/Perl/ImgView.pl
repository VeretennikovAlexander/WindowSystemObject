#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

use Win32::OLE qw( EVENTS );
use WSO;
use WSOSamples;

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");

$f = $o->CreateForm(0,0,0,0);

$f->{ClientWidth} = 500;
$f->{ClientHeight} = 300;
$f->CenterControl();
$f->{Text} = "Image Viewer";

$z = $f->CreateFrame(0,0,0,0);
$z->{Align} = WSO::AL_CLIENT;
$z->{AutoScroll} = true;
$z->{Border} = true;

$f->CreateStatusBar()->{Name} = "StatusBar";
$f->StatusBar->Add(100)->{AutoSize} = true;
$f->StatusBar->Add(100)->{AutoSize} = true;

$Image = null;

$t = $f->Menu->Add("File");
$OpenItem = $t->Add("Open","CTRL+O"); Win32::OLE->WithEvents($OpenItem , \&FileOpen);

$CloseItem = $t->Add("Close"); Win32::OLE->WithEvents($CloseItem , \&CloseEvents);

$t->NewLine();

$ExitItem = $t->Add("Exit","ESC"); Win32::OLE->WithEvents($ExitItem , \&CloseFormHandler);

$t = $f->Menu->Add("View");
$Invert = $t->Add("Invert");
$Invert->{CheckBox} = true; Win32::OLE->WithEvents($Invert, \&InvertEvents);

$t = $f->Menu->Add("Help");
$HelpItem = $t->Add("About","F1");
Win32::OLE->WithEvents($HelpItem , \&AboutClick);

$f->Show();

$o->Run();

sub FileOpen
{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		$s = $f->OpenDialog("","All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif");
		if (length($s)>0)
		{
			if ($image!=null) {
				$image->Destroy();
			}
			
			$Invert->{Checked} = false;
			$image = $z->DrawImage(0,0,0,0,$s);
			if (($image->{Width}>0) && ($image->{Height}>0))
			{
				$f->StatusBar->item(0)->{Text} = $s;
				$f->StatusBar->item(1)->{Text} = $image->{Width}." x ".$image->{Height};
			} else
			{
				$f->StatusBar->item(0)->{Text} = "";
				$f->StatusBar->item(1)->{Text} = "";
				$f->MessageBox("Cannot open image","",WSO::MB_ICONHAND);
			}
		}
	}
}

sub AboutClick
{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		my ($Sender, @args) = @_;
		WSOSamples::AboutWSO($Sender,"Image Viewer Demo");
	}
}

sub InvertEvents
{
	my ($Sender, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		if ($Invert->{Checked})
		{
			$image->{CopyMode} = WSO::NOTSRCCOPY
		} else
		{
			$image->{CopyMode} = WSO::SRCCOPY;
		}
	}
	if ($event eq "OnUpdate")
	{
		$Sender->{Enabled} = ($image!=null);
	}
}

sub CloseEvents
{
	my ($Sender, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		$image->Destroy();
		$image = null;
		$f->StatusBar->item(0)->{Text} = "";
		$f->StatusBar->item(1)->{Text} = "";
	}
	if ($event eq "OnUpdate")
	{
		$Sender->{Enabled} = ($image!=null);
	}
}

sub CloseFormHandler{
	my ($this, $event, @args) = @_;
	$this->Form->Close() if $event eq "OnClick";
	$this->Form->Close() if $event eq "OnExecute";
}
