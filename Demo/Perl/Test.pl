#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004-2015

use Win32::OLE qw( EVENTS );
use WSO;
use WSOSamples;

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");

$f = $o->CreateForm(0, 0, 650, 400);
$f->CenterControl();

$b = $f->CreateButton(10, 10, 75, 25, "Demo");

$closebutton = $f->CreateButton(100, 10, 75, 25, "Close");

$f->CreateStatusBar()->{Name} = "StatusBar";
$f->{StatusBar}->Add(100)->{AutoSize} = 1;

$x = $f->TextOut(10, 60, "WindowSystemObject");
$x->Font->{Size} = 16;
$x->Font->{Bold} = 1;
$x->{Color} = 255;
$f->TextOut(10, 100, "This sample shows how to handle events from WindowsSystemObject using PERL.\x0D\x0DClicking any mouse button invokes OnMouseUp event handler.\x0D\x0DMoving mouse inside this window invokes OnMouseMove event handler.\x0D\x0D(The current mouse position is displayed in the status bar)\x0D\x0DMoving mouse outside this window invokes OnMouseLeave event handler.\x0D\x0DClicking Demo or Close buttons invokes OnClick event handler.\x0D\x0DPressing any key invokes OnKeyDown event handler.\x0D\x0DTry to close this window to invoke OnCloseQuery event.");

package FormEvents;

sub OnMouseMove {
	my ($this, @args) = @_;
	$this->Form->StatusBar->item(0)->{Text} = $args[1].','.$args[2];
}

sub OnMouseLeave {
	my ($this, @args) = @_;
	$this->Form->StatusBar->item(0)->{Text} = 'No mouse in control';
}

sub OnKeyDown {
	my ($this, @args) = @_;
	$this->Form->MessageBox('OnKeyDown: '.$args[1]) if (($args[1] != 27) && ($args[1] != 112));
}

sub OnMouseUp {
	my ($this, @args) = @_;
	$this->Form->MessageBox('OnMouseUp: '.$args[1].' x '.$args[2]);
}

sub YesEventHandler{
	my ($this, $event, @args) = @_;
	if ($event eq "OnClick") {
		$canClose = 1;
		$this->Form->Close() ;
	}
}

sub NoEventHandler{
	my ($this, $event, @args) = @_;
	if ($event eq "OnClick") {
		$this->Form->Close() ;
	}
}

sub OnCloseQuery {
	my ($this, @args) = @_;
	$canClose = 0;

	$canCloseDialog = $this->Form->CreateDialogForm(0,0,510,100);
	$canCloseDialog->CenterControl();
	$canCloseDialog->TextOut(10,10,"Do you really want to quit this program?");

	$yesButton = $canCloseDialog->CreateButton(10,30,75,25,"Yes");
	Win32::OLE->WithEvents($yesButton, \&YesEventHandler);
	$yesButton->{Default} = 1;

	$noButton = $canCloseDialog->CreateButton(90,30,75,25,"No");
	Win32::OLE->WithEvents($noButton, \&NoEventHandler);
	$noButton->{Cancel} = 1;

	$helpButton = $canCloseDialog->CreateButton(170,30,75,25,"Help");
	Win32::OLE->WithEvents($helpButton, \&main::HelpAbout);

	$canCloseDialog->{HelpButton} = $helpButton;
	$canCloseDialog->{Color} = 0xFF00FF;
	$canCloseDialog->ShowModal();
	$canCloseDialog->Destroy();
	
	$args[1]->Put($canClose);
}

package main;

sub HelpAbout{
	my ($this, $event, @args) = @_;
	if (($event eq "OnExecute") || ($event eq "OnClick"))
	{
		WSOSamples::AboutWSO($this,"Event Handler Sample");
	}
}

Win32::OLE->WithEvents($f, 'FormEvents');

sub ButtonEventHandler{
	my ($this, $event, $sender, @args) = @_;
	$this->Form->MessageBox("Button ".$sender->{Text}.": OnClick") if $event eq "OnClick";
}

$fileMenu = $f->Menu->Add("File");
$exitMenuItem = $fileMenu->Add("Exit",27);

$helpMenu = $f->Menu->Add("Help");
$helpMenuItem = $helpMenu->Add("About","F1");

Win32::OLE->WithEvents($b, \&ButtonEventHandler);
Win32::OLE->WithEvents($closebutton , \&CloseFormHandler);
Win32::OLE->WithEvents($exitMenuItem, \&CloseFormHandler);
Win32::OLE->WithEvents($helpMenuItem, \&HelpAbout);

$f->Show();
$o->Run();

sub CloseFormHandler{
	my ($this, $event, @args) = @_;
	$this->Form->Close() if $event eq "OnClick";
	$this->Form->Close() if $event eq "OnExecute";
}
