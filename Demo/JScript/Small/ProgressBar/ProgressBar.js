o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.TextOut(10, 10, "Visual styles required")

ProgressHorz = f.CreateProgressBar(10, 40, 200, 25)
ProgressVert = f.CreateProgressBar(10, 80, 25, 200, o.Translate("PBS_VERTICAL"))

ProgressBars = [ProgressHorz, ProgressVert]

var Properties = [
"Smooth",
"Marquee",
"SmoothReverse",
"MarqueeActive"]

PropertiesBox = []

Top = CreateCheckboxes(60, 100, Properties, "Properties")

function CreateCheckboxes(Left, Top, Properties, Text) {

    f.TextOut(Left, Top, Text).Font.Bold = true

    Top += 30

    var t = ProgressHorz;

    for (i = 0; i < Properties.length; i++) {
        var Name = Properties[i]

        var CheckBox = f.CreateCheckBox(Left, Top, 150, 25, Name)
        Top += 30
        PropertiesBox[Name] = CheckBox

        CheckBox.Checked = t[Name]

        CheckBox.OnChange = CheckBoxChange
    }

    StateBox = f.CreateComboBox(Left, Top, 100, 25, o.Translate("CBS_DROPDOWNLIST"))
    StateBox.Add("PBST_NORMAL");
    StateBox.Add("PBST_ERROR");
    StateBox.Add("PBST_PAUSED");
    StateBox.ItemIndex = 0
    StateBox.OnChange = ProgressBarsUpdate

    Top += 50
    
    return Top
}

function CheckBoxChange(Sender) {
    var Name = Sender.Text
    for (var i = 0; i < ProgressBars.length; i++) {
        var ProgressBar = ProgressBars[i]        
        ProgressBar[Name] = Sender.Checked
    }
}

function ProgressBarsUpdate(Sender) {
    for (var i = 0; i < ProgressBars.length; i++) {
        var ProgressBar = ProgressBars[i]
        ProgressBar.State = o.Translate(StateBox.Text)
    }
}

function ProgressDown(Sender) {
    for (var i = 0; i < ProgressBars.length; i++) {
        var ProgressBar = ProgressBars[i]
        if (ProgressBar.Position < ProgressBar.Max) 
            ProgressBar.StepBy(1); else
            ProgressBar.Position = ProgressBar.Min
    }
}

Timer = o.CreateTimer()
Timer.OnExecute = ProgressDown
Timer.Active = true
Timer.Interval = 50

TimerCheckBox = f.CreateCheckBox(200, 100, 100, 25, "Enable timer")
TimerCheckBox.OnChange = TimerCheckBoxChange
TimerCheckBox.Checked = true

function TimerCheckBoxChange(Sender) {
    Timer.Active = TimerCheckBox.Checked
}

f.Show()


o.Run()
