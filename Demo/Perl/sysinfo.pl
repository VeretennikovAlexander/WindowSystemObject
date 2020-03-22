#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

use Win32::OLE qw( EVENTS );
use WSO;
use WSOSamples;

$o = Win32::OLE->new("Scripting.WindowSystemObject") or die("Oops!");
$s = Win32::OLE->new("WScript.Shell") or die("Oops!");
$fs = Win32::OLE->new("Scripting.FileSystemObject") or die("Oops!");

$o->{PixelsPerInch} = 96;

$f = $o->CreateForm(0,0,0,0);

$f->{ClientWidth} = 500;
$f->{ClientHeight} = 300;
$f->{MaximizeBox} = false;
$f->{SizeGrip} = false;
$f->CenterControl();
$f->{Text} = "System Information Sample";

$tc = $f->CreateTabControl(10,10,480,250);
$stab = $tc->CreateTab("System");
$stab->TextOut(10,10,"Windows Version\x0D\x0DUser\x0D\x0DWSO");

@a = Win32::GetOSVersion();

$stab->TextOut(150,10,$a[1].'.'.$a[2].'.'.$a[3].' '.$a[0]."\x0D\x0D".Win32::LoginName()."\x0D\x0D".$o->Version->{String});

$etab = $tc->CreateTab("Environment");
$e = $etab->CreateEdit(0,0,0,0,WSO::ES_MULTILINE | WSO::ES_READONLY);
$e->{Align} = WSO::AL_CLIENT;
$e->{ScrollBars} = WSO::SS_BOTH;

$Enum = Win32::OLE::Enum->new($s->{Environment});
while (defined($t = $Enum->Next)) { $e->Add($t) }

$etab = $tc->CreateTab("Special Folders");
$e = $etab->CreateEdit(0,0,0,0,WSO::ES_MULTILINE | WSO::ES_READONLY);
$e->{Align} = WSO::AL_CLIENT;
$e->{ScrollBars} = WSO::SS_BOTH;

$Enum = Win32::OLE::Enum->new($s->{SpecialFolders});
while (defined($t = $Enum->Next)) { $e->Add($t) }

$CloseButton = $f->CreateButton(400,270,75,25,"Close");
$CloseButton->{Default} = TRUE;
$CloseButton->{Cancel} = TRUE;

sub CloseForm{
	my ($this, $event, @args) = @_;
	$this->Form->Close() if $event eq "OnClick";
}

Win32::OLE->WithEvents($CloseButton, \&CloseForm);

$dtab = $tc->CreateTab("Drives");
$DriveBox = $dtab->CreateComboBox(10,10,100,25,WSO::CBS_DROPDOWNLIST);
$DriveInfo = $dtab->CreateFrame(0,40,$dtab->{Width},$dtab->{Height}-40);
$dtab->TextOut(10,40,"Device is not ready");

$f->Show();

$DriveInfo->TextOut(10,10,"FileSystem\x0D\x0DSerial Number\x0D\x0DAvailable Space\x0D\x0DFree Space\x0D\x0DTotal Space\x0D\x0DVolume Name");
$DriveInfo->TextOut(150,10,"")->{Name} = "Info";

$Enum = Win32::OLE::Enum->new($fs->{Drives});
while (defined($t = $Enum->Next))
{
	$DriveBox->Add($t->DriveLetter);
	if (($t->{DriveType} == 2) && ($DriveBox->{ItemIndex} == -1))
	{	
		$DriveBox->{ItemIndex} = $DriveBox->{Count}-1;
		DriveChange($DriveBox,"OnChange");
	}
}

Win32::OLE->WithEvents($DriveBox, \&DriveChange);

sub DriveChange{
	my ($this, $event, @args) = @_;
	if ($event eq "OnChange")
	{
		$t = $fs->GetDrive($this->{Text});
		if ($t->{IsReady})
		{
			$DriveInfo->Info->{Text} = $t->{FileSystem}."\x0D\x0D".sprintf("%08X",$t->{SerialNumber})."\x0D\x0D".$t->{AvailableSpace}." bytes"."\x0D\x0D".$t->{FreeSpace}." bytes"."\x0D\x0D".$t->{TotalSize}." bytes"."\x0D\x0D".$t->{VolumeName};
			$DriveInfo->Show();
		} else
		{
			$DriveInfo->Hide();
		}
	}
}

$f->Show();

$o->Run();
