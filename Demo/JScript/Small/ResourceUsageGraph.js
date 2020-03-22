//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

use("Common.js")

TestVersion(5,0)

o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 350
f.CenterControl()
f.Text = "Resource Usage Graph Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"See Resource Usage Graph Demo")

ResourceUsageGraph = f.CreateResourceUsageGraph(10,10,250,300)
ResourceUsageGraph.Brush.Color = 0x00FFA0A0
ResourceUsageGraph.Align = o.Translate("AL_CLIENT")

Current = new Date()
ResourceUsageGraph.Value = Current.getVarDate()
ResourceUsageGraph.Max = Current.getVarDate()
ResourceUsageGraph.Min = Current.getVarDate()
ResourceUsageGraph.Max.Hour = 12
ResourceUsageGraph.Min.Hour = 9
ResourceUsageGraph.Value.Hour = 10

for (i = 2; i<40; i++)
{
	if (i < 20)
	{
		ResourceUsageGraph.Add((1000 * 60) * (60+i),i*i)
	} else
	{
		ResourceUsageGraph.Add((1000 * 60) * (60+i),1000-(i-20)*i)
	}
}

ResourceUsageGraph.MinYValue = 0
ResourceUsageGraph.MaxYValue = 1000
ResourceUsageGraph.Pen.Color = 0x00FF0000
ResourceUsageGraph.Pen.Style = o.Translate("PS_NULL")
ResourceUsageGraph.Brush.Color = 0x0000FF00
ResourceUsageGraph.Brush.Style = o.Translate("B_GRADIENT | DIRECTION_BOTTOM_TOP")
ResourceUsageGraph.Brush.GradientColor = 0x000000FF
ResourceUsageGraph.BackgroundBrush.Color = 0x00FFFFFF
ResourceUsageGraph.BackgroundBrush.Style = o.Translate("B_GRADIENT | DIRECTION_BOTTOM_TOP")
ResourceUsageGraph.BackgroundBrush.GradientColor = 0x00FFFFE0
//ResourceUsageGraph.PageControlWidth = 200

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout

t = p.CreateButton(10,40,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true


t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler

t = f.Menu.Add("Help")
t = t.Add("About","F1")
t.OnExecute = HelpAbout

function HelpAbout(Sender)
{
	WSOAbout(Sender,f.Text)
};

f.Show()

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }


