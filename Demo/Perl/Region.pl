#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

use Win32::OLE qw( EVENTS );
use WSO;

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");
$r = $o->{Regions};

$f = $o->CreateForm(0,0,0,0);

$f->{ClientWidth} = 300;
$f->{ClientHeight} = 200;
$f->{SizeGrip} = false;
$f->{Caption} = false;
$f->{MaximizeBox} = false;
$f->{Text} = "Region Demo";
$f->CenterControl();

$x = $f->CreateButton(120,90,75,25,"Close");
Win32::OLE->WithEvents($x , \&CloseFormHandler);
$x->{Default} = true;
$x->{Cancel} = true;

$h = $r->CreateEllipticRgn(20,20,260,160);
$h = $r->CombineRgn($h,$r->CreateEllipticRgn(30,30,240,140),$o->Translate("RGN_DIFF"));
$j = $r->CreatePolygonRgn(150,0,220,200,0,60,300,60,80,200,$o->Translate("WINDING"));
$h = $r->CombineRgn($h,$j,$o->Translate("RGN_OR"));

$f->LetProperty("Region",$h);

$f->Brush->{Color} = 0x00FF0000;
$k = $f->DrawRegion(0,0,$h);

$t = $f->TextOut(40,70,"");
$t->Font->{Bold} = true;
$t->Font->{Color} = 0x00FFFFFF;

$timer = $o->CreateTimer();
$timer->{Interval} = 100;
$timer->{Active} = true;

Win32::OLE->WithEvents($timer , \&TimerExecute);
Win32::OLE->WithEvents($f , "FormEvents");

sub TimerExecute{
	my ($this, $event, @args) = @_;
	if ($event eq "OnExecute")
	{
		$t->{Text} = localtime();
	};
}

package FormEvents;

sub OnHitTest{
	my ($this, $sender, $x, $y, $ResultPtr, @args) = @_;
		$ResultPtr->Put(WSO::HTCAPTION);
}

package main;

$f->Show();

$o->Run();

sub CloseFormHandler{
	my ($this, $event, @args) = @_;
	$this->Form->Close() if $event eq "OnClick";
	$this->Form->Close() if $event eq "OnExecute";
}
