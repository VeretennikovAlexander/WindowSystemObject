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
f.Text = "Resource Usage Graph Demo (wait several seconds for WMI initialization)"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"See Resource Usage Graph Demo")

ResourceUsageGraph = f.CreateResourceUsageGraph(10,10,250,300)
ResourceUsageGraph.Brush.Color = 0x00FFA0A0
ResourceUsageGraph.Align = o.Translate("AL_CLIENT")

Window = 1000*10
MinDate = new Date()
MaxDate = new Date(MinDate.valueOf()+Window)

ResourceUsageGraph.Value = MinDate.getVarDate()
ResourceUsageGraph.Max = MaxDate.getVarDate()
ResourceUsageGraph.Min = MinDate.getVarDate()
ResourceUsageGraph.MinYValue = 0
ResourceUsageGraph.MaxYValue = 100
ResourceUsageGraph.Page = 10*1000
ResourceUsageGraph.Pen.Color = 0x00FF0000
ResourceUsageGraph.Pen.Style = o.Translate("PS_NULL")
ResourceUsageGraph.Brush.Color = 0x0000FF00
ResourceUsageGraph.Brush.Style = o.Translate("B_GRADIENT | DIRECTION_BOTTOM_TOP")
ResourceUsageGraph.Brush.GradientColor = 0x000000FF
ResourceUsageGraph.BackgroundBrush.Color = 0x00FFFFFF
ResourceUsageGraph.BackgroundBrush.Style = o.Translate("B_GRADIENT | DIRECTION_BOTTOM_TOP")
ResourceUsageGraph.BackgroundBrush.GradientColor = 0x00FFFFE0
ResourceUsageGraph.Approximation = false
ResourceUsageGraph.AlwaysFillWindow = false

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

var wmi = GetObject("winmgmts:{impersonationlevel=impersonate}!\\root\\cimv2")
Timer = o.CreateTimer()
Timer.Interval = 2000
Timer.OnExecute = TimerExecute
Timer.Active = true
N1 = 0
D1 = 0
T1 = 0
PercentProcessorTime = 0
Count = 0 

function TimerExecute()
{
	objInstance1 = wmi.Get("Win32_PerfRawData_PerfOS_Processor.Name='_Total'")
	N2 = objInstance1.PercentProcessorTime
	D2 = objInstance1.TimeStamp_Sys100NS
	T2 = new Date()
	if ((N1 != 0) && (D2 != D1))
	{
		Delta = T2 - T1
		PercentProcessorTime = (1 - ((N2 - N1)/(D2-D1)))*100
		if (PercentProcessorTime < 0) PercentProcessorTime = 0
		if (PercentProcessorTime > 100) PercentProcessorTime = 100
		PercentProcessorTime = Math.round(PercentProcessorTime*100) / 100
		Count++
	}
	N1 = N2
	D1 = D2	
	T1 = T2

	if (T2.valueOf() > MaxDate.valueOf())
	{
		CurrentDate = new Date(T2.valueOf() - Window)		
		MaxDate = T2
		NewMinDate = new Date(T2.valueOf() - Window*10)
		if (MinDate.valueOf() < NewMinDate.valueOf())
			MinDate = NewMinDate

		ResourceUsageGraph.Min = MinDate.getVarDate()
		ResourceUsageGraph.Max = MaxDate.getVarDate()
		ResourceUsageGraph.Value = CurrentDate.getVarDate()
	}

	if (Count > 1)
	{
		if (Count == 2)
		{
			MinDate = new Date()
			MaxDate = new Date(MinDate.valueOf()+Window)
			ResourceUsageGraph.Value = MinDate.getVarDate()
			ResourceUsageGraph.Max = MaxDate.getVarDate()
			ResourceUsageGraph.Min = MinDate.getVarDate()
		}
		Offset = T2 - MinDate
		f.Text = "Processor usage: "+PercentProcessorTime
		ResourceUsageGraph.Add(Offset,PercentProcessorTime)
	}
}

f.Show()

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }


