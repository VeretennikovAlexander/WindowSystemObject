#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

package WSOSamples;

sub AboutWSO{

	my ($Sender, $s, @args) = @_;

	$o = $Sender->Form->{Root};
	$j = $Sender->Form->CreateDialogForm(0,0,0,0);
	$j->{ClientWidth} = 400;
	$j->{ClientHeight} = 250;
	$j->CenterControl();
	$t = $j->Rectangle(0,0,0,75);
	$t->Brush->{Color} = 0x00FFA0A0;
	$t->Brush->{Style} = $o->Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM");
	$t->Brush->{GradientColor} = 0x00FFEEEE;
	$t->Pen->{Color} = 0x00FF5555;
	$t->{Align} = $o->Translate("AL_TOP");
	
	$t = $j->Rectangle(0,0,0,0);
	
	$t->Brush->{Color} = 0x00FFEEEE;
	$t->Brush->{Style} = $o->Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM");
	$t->Brush->{GradientColor} = 0x00FFEEEE;
	$t->Pen->{Color} = 0x00FF5555;
	$t->{Align} = $o->Translate("AL_CLIENT");
	
	$t = $AboutFormCloseButton = $j->CreateButton(300,220,75,25,"Close");
	Win32::OLE->WithEvents($AboutFormCloseButton, \&CloseFormHandler);
	$t->{Default} = true;
	$t->{Cancel} = true;
	$t = $j->TextOut(100,10,$j->Root->Version->{String});
	
	$t->Font->{Bold} = true;
	$t->Font->{Name} = "Arial Black";
	$t->Font->{Size} = 14;
	$t->Font->{Color} = 0x000000FF;
	$t->Font->{Bold} = true;
	$t->Font->{Italic} = true;
	$t->Font->{Angle} = 5;
	
	$j->TextOut(100,50,$s)->Font->{Bold} = true;
	$j->TextOut(100,90,"(C) Veretennikov A. B. 2004 - 2006");
	$j->CreateHyperLink(100,130,200,25,$j->Root->Version->{Url},"WSO in the Web");
	$j->{Color} = 0x00FFEEEE;
	if ($j->Root->Version->{Trial})
	{
		$j->TextOut(100,170,"It is a Demo version of WSO\rwith several serious limitations.\rTry it and buy the full version.");
	}
	$j->{Text} = "About WSO";

	Win32::OLE->WithEvents($j, \&OnHitTest);

	$j->ShowModal();
	$j->Destroy();

	sub OnHitTest
	{
		my ($this, $event, $Sender, $x, $y, $ResultPtr, @args) = @_;
		if ($event eq "OnHitTest")
		{
			$ResultPtr->put($o->Translate("HTCAPTION"))
		}
	}

	sub CloseFormHandler{
		my ($this, $event, @args) = @_;
		$this->Form->Close() if $event eq "OnClick";
		$this->Form->Close() if $event eq "OnExecute";
	}

};

1;