//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

#include "stdafx.h"
#include "resource.h"
#include "Test.h"

#include "COMDisp.h"

void OnClick(int C, CAutoVariant *A)
{
	A[0].get("Form").call("MessageBox","OnClick");
};

void CloseEvent(int C, CAutoVariant *A)
{
	A[0].get("Form").call("Close");
};

void OnMouseMove(int C, CAutoVariant *A)
{
	A[0].get("Form").get("StatusBar").get("Item",0).put("Text",CAtlString(A[1])+" x "+CAtlString(A[2]));
};

void OnMouseLeave(int C, CAutoVariant *A)
{
	A[0].get("Form").get("StatusBar").get("Item",0).put("Text","No Mouse In Control");
};

void OnMouseUp(int C, CAutoVariant *A)
{
	A[0].get("Form").call("MessageBox","MouseUp "+CAtlString(A[1])+" x "+CAtlString(A[2])+", Button = "+CAtlString(A[3]));
};

void OnKeyDown(int C, CAutoVariant *A)
{
	int Key;
	A[1].cast(Key);
	if ((Key != 27) && (Key!=112))
		A[0].get("Form").call("MessageBox","KeyDown "+CAtlString(A[1]));
};

void YesEvent(int C, CAutoVariant *A)
{
	CAutoVariant f = A[0].get("Form");
	f.put("UserData",1);
	f.call("Close");
};

void OnHitTestEvent(int C, CAutoVariant *A)
{
	A[3].put("Value",HTCAPTION);
};

void AboutWSO(CAutoVariant Sender, CAtlString Text)
{
	CAutoVariant f,j,c,t,r,v,s,x,b,p,o;
	f = Sender.get("Form");
	o = f.get("Root");
	j = f.call("CreateDialogForm",0,0,0,0);
	j.put("ClientWidth",400);
	j.put("ClientHeight",250);
	j.call("CenterControl");
	c = j.call("Rectangle",0,0,0,75);
	b = c.get("Brush");
	b.put("Color",0x00FFA0A0);
	b.put("Style",o.call("Translate","B_GRADIENT | DIRECTION_TOP_BOTTOM"));
	b.put("GradientColor",0x00FFEEEE);
	p = c.get("Pen");
	p.put("Color",0x00FF5555);
	c.put("Align",o.call("Translate","AL_TOP"));
	
	c = j.call("Rectangle",0,0,0,0);
	b = c.get("Brush");
	b.put("Color",0x00FFEEEE);
	b.put("Style",o.call("Translate","B_GRADIENT | DIRECTION_TOP_BOTTOM"));
	b.put("GradientColor",0x00FFEEEE);
	p = c.get("Pen");
	p.put("Color",0x00FF5555);
	c.put("Align",o.call("Translate","AL_CLIENT"));
	
	c = j.call("CreateButton",300,220,75,25,"Close");
	c.put("OnClick",EventHandler(CloseEvent));
	c.put("Cancel",true);
	c.put("Default",true);
	r = f.get("Root");
	v = r.get("Version");
	s = v.get("String");
	t = j.call("TextOut",100,10,s);
	x = t.get("Font");
	x.put("Size",14);
	x.put("Bold",true);
	x.put("Italic",true);
	x.put("Color",0x000000FF);
	x.put("Name","Arial Black");
	x.put("Angle","5");	
		
	t = j.call("TextOut",100,50,Text);
	t = j.call("TextOut",100,90,"(C) Veretennikov A. B. 2004 - 2006");
	t = j.call("CreateHyperLink",100,130,200,25,v.get("Url"),"WSO in the Web");
	t.put("Color",0x00FFEEEE);
	t = v.get("Trial");
	if (t.cast<VARIANT_BOOL>())
		j.call("TextOut",100,170,"It is a Demo version of WSO\rwith several serious limitations.\rTry it and buy the full version.");
	j.put("OnHitTest",EventHandler(OnHitTestEvent));
	j.put("Text","About WSO");
	j.call("ShowModal");
	j.call("Destroy");
};

void HelpAbout(int C, CAutoVariant *A)
{
	AboutWSO(A[0],"Event Handler Sample");
};

void OnCloseQuery(int C, CAutoVariant *A)
{
	CAutoVariant j,y,c,h;
	j = A[0].get("Form").call("CreateDialogForm",0,0,510,100);
	j.call("CenterControl");
	j.call("TextOut",10,10,"Do you really want to quit this program?");
	y = j.call("CreateButton",10,30,75,25,"Yes");
	y.put("OnClick",EventHandler(YesEvent));
	y.put("Default",true);
	c = j.call("CreateButton",90,30,75,25,"No");
	c.put("OnClick",EventHandler(CloseEvent));
	c.put("Cancel",true);
	h = j.call("CreateButton",170,30,75,25,"Help");
	h.put("OnClick",EventHandler(HelpAbout));
	j.put("HelpButton",h);
	j.put("Color",0xFF00FF);
	j.call("ShowModal");
	A[1].put("Value",j.get("UserData").cast<int>() != 0);
	j.call("Destroy");
};

void Execute(CComVariant S, LONG ax, LONG ay)
{
	CAutoVariant o,f,Button,StatusBar,t,x,m;
	o.CreateObject("Scripting.WindowSystemObject");

	f = o.call("CreateForm",ax,ay,650,400);
	f.put("Text",S);
	f.call("Show");
	Button = f.call("CreateButton",10,10,75,25,"Demo");
	Button.put("OnClick",EventHandler(OnClick));
	f.call("CreateButton",100,10,75,25,"Close").put("OnClick",EventHandler(CloseEvent));
	StatusBar = f.call("CreateStatusBar");
	StatusBar.put("Name","StatusBar");
	StatusBar.call("Add",100).put("AutoSize",true);
	f.put("OnMouseMove",EventHandler(OnMouseMove));
	f.put("OnMouseLeave",EventHandler(OnMouseLeave));
	f.put("OnMouseUp",EventHandler(OnMouseUp));
	f.put("OnKeyDown",EventHandler(OnKeyDown));
	f.put("OnCloseQuery",EventHandler(OnCloseQuery));
	t = f.call("TextOut",10,60,"WindowSystemObject");
	x = t.get("Font");
	x.put("Size",16);
	t.put("Color",255);
	x.put("Bold",true);
	m = f.get("Menu");
	x = m.call("Add","File");
	x.call("Add","Exit",27).put("OnExecute",EventHandler(CloseEvent));
	x = m.call("Add","Help");
	x.call("Add","About","F1").put("OnExecute",EventHandler(HelpAbout));
	t = f.call("TextOut",10,100,"This sample shows how to handle events from WindowsSystemObject using C++ (ATL).\r\rClicking any mouse button invokes OnMouseUp event handler.\r\rMoving mouse inside this window invokes OnMouseMove event handler.\r\r(The current mouse position is displayed in the status bar)\r\rMoving mouse outside this window invokes OnMouseLeave event handler.\r\rClicking Demo or Close buttons invokes OnClick event handler.\r\rPressing any key invokes OnKeyDown event handler.\r\rTry to close this window to invoke OnCloseQuery event.");

	o.call("Run");
};

class CWSOTestModule : public CAtlExeModuleT< CWSOTestModule >
{
public :
	DECLARE_LIBID(LIBID_TestLib)
	DECLARE_REGISTRY_APPID_RESOURCEID(IDR_TEST, "{B4D620D2-AB89-4ACF-9ED2-E9202FD860AF}")

	static HRESULT InitializeCom() throw()
	{
		HRESULT H = CoInitializeEx(0,COINIT_MULTITHREADED);
		if (H!=S_OK) MessageBox(0,"ERROR: CoInitialize","",0);
		return H;
	}

	static DWORD WINAPI ThreadProc(LPVOID lpParameter)
	{
		HRESULT H = CoInitializeEx(0,COINIT_MULTITHREADED);
		if (SUCCEEDED(H))
		{
		Execute("Thread B, COINIT_MULTITHREADED", 50, 50);
		CoUninitialize();
		} else
			MessageBox(0,"ERROR: CoInitializeEx(0,COINIT_MULTITHREADED)","",0);
		return 0;
	};

	static DWORD WINAPI ThreadProcSTA(LPVOID lpParameter)
	{
		HRESULT H = CoInitializeEx(0,COINIT_APARTMENTTHREADED);
		if (SUCCEEDED(H))
		{
		Execute("Thread C, COINIT_APARTMENTTHREADED", 150, 150);
		CoUninitialize();
		} else
			MessageBox(0,"ERROR: CoInitializeEx(0,COINIT_MULTITHREADED)","",0);
		return 0;
	};

	LONG WinMain(int nShowCmd)
	{
		HANDLE A=0,B=0;
		DWORD ID;
		A = CreateThread(0,0,ThreadProc,0,0,&ID);
		B = CreateThread(0,0,ThreadProcSTA,0,0,&ID);
		Execute("Thread A (Main), COINIT_MULTITHREADED", 250, 250);
		if (A) 
		{
			WaitForSingleObject(A,INFINITE);
			CloseHandle(A);
		};
		if (B) 
		{
			WaitForSingleObject(B,INFINITE);
			CloseHandle(B);
		};
		return 0;
	};

};

CWSOTestModule _AtlModule;


//
extern "C" int WINAPI _tWinMain(HINSTANCE /*hInstance*/, HINSTANCE /*hPrevInstance*/, 
                                LPTSTR /*lpCmdLine*/, int nShowCmd)
{
    return _AtlModule.WinMain(nShowCmd);
}

