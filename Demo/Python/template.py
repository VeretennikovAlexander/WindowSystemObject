from wso import *

o = win32com.client.Dispatch("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Show()

o.Run()

