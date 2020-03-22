o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 300
f.ClientHeight = 150
f.CenterControl()

Tabs = f.CreatePageControl(0,0,0,0)
Tabs.Align = o.Translate("AL_CLIENT")
Tabs.CreateTab("Tab1")
Tabs.CreateTab("Tab2")
Tabs.CreateTab("Tab3")

RightPanel = f.CreateFrame(0,0,100,100)
RightPanel.Align = o.Translate("AL_RIGHT")

function CreateCheck(Title,Name,Top,T,F)
{
	var Check = RightPanel.CreateCheckBox(10,Top,100,25,Title)
	Check.Checked = Tabs[Name] == T
	Check.UserData = Name
	Check.OnChange = CheckOnChecked

	function CheckOnChecked()
	{
		Tabs[Check.UserData] = Check.Checked ? T : F;

		UpdateTabs()
	};
	
}

function UpdateTabs()
{
	if (Tabs.FlatButtons)
	{
		Tabs.TabColors.Selected.Color = 0x00FFFFFF
		Tabs.TabColors.Color = o.Translate("COLOR_NONE")
	} else
	{
		Tabs.TabColors.Selected.Color = 0x00FFFFFF
		Tabs.TabColors.Color = 0x00BEAE9E	
	}
}

CreateCheck("Tabs visible","TabsVisible",10,1,0)
CreateCheck("Header visible","HeaderVisible",40,1,0)
CreateCheck("Flat Buttons","FlatButtons",70,1,0)
CreateCheck("Tabs Bottom","TabsAlign",100,o.Translate("AL_BOTTOM"),o.Translate("AL_TOP"))

f.Show()

o.Run()

