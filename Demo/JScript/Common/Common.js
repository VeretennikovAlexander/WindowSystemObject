//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

function WSOAbout(Sender,s)
{
	var j = Sender.Form.CreateDialogForm(0,0,0,0)
	j.ClientWidth = 430
	j.ClientHeight = 250
	j.CenterControl()
	with (j.Rectangle(0,0,0,75))
	{
		Brush.Color = 0x00FFA0A0
		Brush.Style = o.Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM")
		Brush.GradientColor = 0x00FFEEEE
		Pen.Color = 0x00FF5555
		Align = o.Translate("AL_TOP")
	}
	with (j.Rectangle(0,0,0,0))
	{
		Brush.Color = 0x00FFEEEE
		Brush.Style = o.Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM")
		Brush.GradientColor = 0x00FFEEEE
		Pen.Color = 0x00FF5555
		Align = o.Translate("AL_CLIENT")		
	}
	var t = j.CreateButton(220,220,75,25,"Close")
	t.OnClick = CloseFormHandler
	t.Default = true
	t.Cancel = true
	t = j.CreateButton(300,220,75,25,"Help");
	t.OnClick = WSOHelp
	j.HelpButton = t
	t = j.TextOut(100,10,j.Root.Version.String)
	with (t.Font)
	{
		Bold = true
		Name = "Arial Black"
		Size = 14
		Color = 0x000000FF
		Bold = true
		Italic = true
		Angle = 5
	}
	j.DrawImage(40,10,32,32,ResourceDir()+"WSO.ICO")
	j.TextOut(100,50,s).Font.Bold = true
	j.TextOut(100,90,j.Root.Version.Copyright)
	j.CreateHyperLink(100,130,200,25,j.Root.Version.Url,"WSO in the Web")
	j.Color = 0x00FFEEEE
	j.Text = "About WSO"

	function OnHitTest(Sender,x,y,ResultPtr)
	{
		ResultPtr.put(o.Translate("HTCAPTION"))
	}

	j.OnHitTest = OnHitTest

	j.ShowModal()
	j.Destroy()
}

function WSOHelp(Sender)
{
	var shell = new ActiveXObject("WScript.Shell")
	var File = BaseDir() + "wso.chm"
	var FSO = new ActiveXObject("Scripting.FileSystemObject")
	if (!FSO.FileExists(File))
	{
		File = BaseDir() + "wso_en.chm"
		if (!FSO.FileExists(File))
		{
			f.MessageBox("Help not installed","",o.Translate("MB_OK | MB_ICONERROR"))
			return
		}
	}
	shell.Run("\""+File+"\"")
}

function TestVersion(x,y)
{
	if ((ScriptEngineMajorVersion()*10+ScriptEngineMinorVersion())<(x*10+y))
	{
		WScript.Echo("Sample requirements: JScript "+x+"."+y+" (Current: "+ScriptEngineMajorVersion()+"."+ScriptEngineMinorVersion()+")")
		WScript.Quit()
	}
}

function StartupDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }
function BaseDir() { s = StartupDir(); var i = s.lastIndexOf("Demo"); s = s.substring(0,i); return s; };
function ResourceDir() { return BaseDir() + "Demo\\Data\\"; };

this.WSOAbout = WSOAbout
this.WSOHelp = WSOHelp
this.BaseDir = BaseDir
this.ResourceDir = ResourceDir
this.StartupDir = StartupDir
this.TestVersion = TestVersion
