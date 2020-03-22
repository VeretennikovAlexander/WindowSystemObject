use Win32::OLE qw( EVENTS );

$wso = Win32::OLE->new("Scripting.WindowSystemObject") or die("WindowSystemObject must be installed!");

$wso->{EnableVisualStyles} = true;

$form = $wso->CreateForm(0, 0, 0, 0);
$form->{ClientWidth} = 150;
$form->{ClientHeight} = 100;
$form->CenterControl();

$button = $form->CreateButton(10,10,75,25,"Close");

sub ButtonEvents{
	my ($this, $event, $sender, @args) = @_;
	$form->Close() if $event eq "OnClick"
}

Win32::OLE->WithEvents($button, \&ButtonEvents);

$form->Show();

$wso->Run();

