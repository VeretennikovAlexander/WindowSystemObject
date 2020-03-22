#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

use Win32::OLE qw( EVENTS );
use WSO;
use WSOSamples;

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");

$f = $o->CreateForm(0, 0, 650, 400);
$f->CenterControl();
$f->{Text} = "Web Browser";

$browser = $f->CreateActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}");
$browser->{Align} = WSO::AL_CLIENT;

$r = $f->CreateReBar(0,0,0,25);
$Menu = $r->CreateMenuBar(0,0,100,25);

$t = $Menu->Menu->Add("File");
$OpenItem = $t->Add("Open","CTRL+O");
$t->NewLine();
$ExitItem = $t->Add("Exit",27);

$t = $Menu->Menu->Add("View");
$p = $t->Add("Go");
$BackItem = $p->Add("Back","ALT+LEFT");
$ForwardItem = $p->Add("Forward","ALT+RIGHT");
$HomeItem = $p->Add("Home","ALT+HOME");
$StopItem = $t->Add("Stop");
$RefreshItem = $t->Add("Refresh","F5");

$t = $Menu->Menu->Add("Help");
$HelpItem = $t->Add("About","F1");
Win32::OLE->WithEvents($OpenItem, \&FileOpen);
Win32::OLE->WithEvents($ExitItem, \&CloseFormHandler);
Win32::OLE->WithEvents($HelpItem, \&HelpAbout);

$ToolBar = $r->CreateToolBar(0,0,0,0);
$ToolBar->{ShowText} = true;
$ToolBar->Buttons->Add($BackItem);
$ToolBar->Buttons->Add($ForwardItem);
$ToolBar->Buttons->Add($StopItem);
$ToolBar->Buttons->Add($RefreshItem);
$ToolBar->Buttons->Add($HomeItem);
$SearchButton = $ToolBar->Buttons->Add("Search");
$ToolBar->Buttons->Add($OpenItem);
$ToolBar->Buttons->Add("-");
$ToolBar->Buttons->Add($HelpItem);

Win32::OLE->WithEvents($BackItem, \&BrowserBack);
Win32::OLE->WithEvents($ForwardItem, \&BrowserForward);
Win32::OLE->WithEvents($StopItem, \&BrowserStop);
Win32::OLE->WithEvents($RefreshItem , \&FileRefresh);
Win32::OLE->WithEvents($HomeItem, \&FileHome);
Win32::OLE->WithEvents($SearchButton, \&FileSearch);

$Path = $r->CreateComboBox(0,0,100,25);
$r->Band($Path)->{Text} = "Address";

$f->CreateStatusBar()->{Name} = "StatusBar";
$StatusPanel1 = $f->StatusBar->Add(100);
$StatusPanel1->{AutoSize} = true;
$StatusPanel2 = $f->StatusBar->Add(100);
$StatusPanel2->{AutoSize} = true;

sub PathOnKeyDown()
{
	my ($sender, $event, $sender, $key, @args) = @_;
	if ($event eq "OnKeyDown")
	{
		$browser->Control->Navigate($sender->{Text}) if ($key eq 13);
	}
}

sub BrowserEventHandler()
{
	my ($sender, $event, @args) = @_;
	if ($event eq "DownloadBegin")
	{
		$StatusPanel1->{Text} = "Downloading";
	}
	if ($event eq "DownloadComplete")
	{
		$StatusPanel1->{Text} = "Complete";
	}
	if ($event eq "TitleChange")
	{
		$Path->{Text} = $browser->Control->{LocationURL};
		$StatusPanel2->{Text} = $browser->Control->{LocationName};
	}
}

Win32::OLE->WithEvents($Path, \&PathOnKeyDown);
$browsercontrol = $browser->Control;
Win32::OLE->WithEvents($browsercontrol, \&BrowserEventHandler);

sub FileOpen{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		$s = $f->OpenDialog("","HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML");
		$browser->Control->Navigate($s) if length($s)>0;
	}
}

sub FileRefresh{
	my ($this, $event, @args) = @_;
	$browser->Control->Refresh() if $event eq "OnExecute";
}

sub FileHome{
	my ($this, $event, @args) = @_;
	$browser->Control->GoHome() if $event eq "OnExecute";
}

sub FileSearch{
	my ($this, $event, @args) = @_;
	$browser->Control->GoSearch() if $event eq "OnExecute";
}

sub BrowserBack{
	my ($this, $event, @args) = @_;
	$browser->Control->GoBack() if $event eq "OnExecute";
}

sub BrowserForward{
	my ($this, $event, @args) = @_;
	$browser->Control->GoForward() if $event eq "OnExecute";
}

sub BrowserStop{
	my ($this, $event, @args) = @_;
	$browser->Control->Stop() if $event eq "OnExecute";
}

sub HelpAbout{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		WSOSamples::AboutWSO($this,"Web Browser Sample");
	}
}

$f->Show();

$o->Run();

sub CloseFormHandler{
	my ($this, $event, @args) = @_;
	$this->Form->Close() if $event eq "OnClick";
	$this->Form->Close() if $event eq "OnExecute";
}
