use Win32::OLE qw( EVENTS );

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");

$f = $o->CreateForm(0,0,0,0);

$f->{ClientWidth} = 500;
$f->{ClientHeight} = 300;
$f->CenterControl();

$f->Show();

$o->Run();
