//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004

import com.jacob.com.*;
import com.jacob.activeX.*;

class Test extends WSOTest{
	
	private static Dispatch form = null;
	private static Dispatch statusbar = null;
	private static Dispatch statuspanel = null;
	
	public static void main(String[] args) throws Exception {
		ComThread.InitMTA();
		//ComThread.InitSTA();
		
		ActiveXComponent ax = new ActiveXComponent("Scripting.WindowSystemObject");
		Dispatch o = (Dispatch)ax.getObject();
		
		try
		{
			form = Dispatch.call(o, "CreateForm", new Variant(0), new Variant(0), new Variant(650), new Variant(400)).toDispatch();
			
			Dispatch.call(form,"CenterControl");
			
			Dispatch button = Dispatch.call(form,"CreateButton",new Variant(10),
			new Variant(10),new Variant(75),new Variant(25),new Variant("Demo")).toDispatch();
			new DispatchEvents(button, new ButtonEvents());
			
			Dispatch closebutton = Dispatch.call(form,"CreateButton",new Variant(100),
			new Variant(10),new Variant(75),new Variant(25),new Variant("Close")).toDispatch();
			new DispatchEvents(closebutton , new CloseItemEvents());
			
			statusbar = Dispatch.call(form,"CreateStatusBar").toDispatch();
			statuspanel = Dispatch.call(statusbar,"Add",new Variant(100)).toDispatch();
			Dispatch.put(statuspanel,"AutoSize",new Variant(true));
			
			new DispatchEvents(form,new FormEvents());
			
			Dispatch t = Dispatch.call(form,"TextOut",new Variant(10),new Variant(60),new Variant("WindowSystemObject")).toDispatch();
			Dispatch f = Dispatch.get(t,"Font").toDispatch();
			Dispatch.put(f,"Size",new Variant(16));
			Dispatch.put(t,"Color",new Variant(255));
			Dispatch.put(f,"Bold",new Variant(true));
			
			Dispatch.call(form,"TextOut",new Variant(10),new Variant(100),new Variant("This sample shows how to handle events from WindowsSystemObject using Java.\r\rClicking any mouse button invokes OnMouseUp event handler.\r\rMoving mouse inside this window invokes OnMouseMove event handler.\r\r(The current mouse position is displayed in the status bar)\r\rMoving mouse outside this window invokes OnMouseLeave event handler.\r\rClicking Demo or Close buttons invokes OnClick event handler.\r\rPressing any key invokes OnKeyDown event handler.\r\rTry to close this window to invoke OnCloseQuery event."));
			
			Dispatch menu = Dispatch.get(form,"Menu").toDispatch();
			
			Dispatch fileMenu = Dispatch.call(menu,"Add",new Variant("File")).toDispatch();

			Dispatch exitMenuItem = Dispatch.call( fileMenu,"Add",new Variant("Exit"),new Variant(27)).toDispatch();
			new DispatchEvents(exitMenuItem,new CloseItemEvents());
			
			Dispatch helpMenu = Dispatch.call(menu,"Add",new Variant("Help")).toDispatch();

			Dispatch helpMenuItem = Dispatch.call(helpMenu,"Add",new Variant("About"),new Variant("F1")).toDispatch();
			new DispatchEvents(helpMenuItem,new HelpItemEvents());
			
			Dispatch.call(form,"Show");
			
			Dispatch.call(o,"Run");
		}
		finally
		{
			ComThread.Release();
		};
		
	};
	
	public static class ButtonEvents
	{
		
		public void OnClick(Variant[] args)
		{
			Dispatch Sender = args[0].toDispatch();
			Dispatch.call(form,"MessageBox",new Variant("Button "+Dispatch.get(Sender,"Text")+": OnClick"));
		};
		
	};
	
	public static class HelpItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			AboutWSO(args[0].toDispatch(),"Event Handler Sample");
		};
		
		public void OnClick(Variant[] args)
		{
			OnExecute(args);
		};
		
	};
	
	public static class FormEvents
	{
		
		public void OnMouseMove(Variant[] args)
		{
			Dispatch.put(statuspanel,"Text",args[1]+" x "+args[2]);
		};
		
		public void OnMouseLeave(Variant[] args)
		{
			Dispatch.put(statuspanel,"Text","No Mouse In Control");
		};
		
		public void OnMouseUp(Variant[] args)
		{
			Dispatch.call(form,"MessageBox",new Variant("MouseUp "+args[1]+" x "+args[2]+", Button = "+args[3]));
		};
		
		public void OnKeyDown(Variant[] args)
		{
			int Key = args[1].toInt();
			if ((Key != 27) && (Key !=112))
			Dispatch.call(form,"MessageBox",new Variant("KeyDown "+Key));
		};
		
		static boolean CanClose;
		
		public void OnCloseQuery(Variant[] args)
		{
			CanClose = false;
			
			Dispatch ResultPtr = args[1].toDispatch();
			
			Dispatch canCloseDialog = Dispatch.call(form,"CreateDialogForm",new Variant(0),
			new Variant(0),new Variant(510),new Variant(100)).toDispatch();
			
			Dispatch.call(canCloseDialog,"CenterControl");
			
			Dispatch.call(canCloseDialog,"TextOut",new Variant(10),new Variant(10),new Variant("Do you really want to quit this program?"));
			
			Dispatch yesButton = Dispatch.call(canCloseDialog,"CreateButton",new Variant(10),
			new Variant(30),new Variant(75),new Variant(25),new Variant("Yes")).toDispatch();
			new DispatchEvents(yesButton,new YesButtonEvents());
			Dispatch.put(yesButton,"Default",new Variant(true));
			
			Dispatch noButton = Dispatch.call(canCloseDialog,"CreateButton",new Variant(90),
			new Variant(30),new Variant(75),new Variant(25),new Variant("No")).toDispatch();
			new DispatchEvents(noButton,new CloseItemEvents());
			Dispatch.put(noButton,"Cancel",new Variant(true));
			
			Dispatch helpButton = Dispatch.call(canCloseDialog,"CreateButton",new Variant(170),
			new Variant(30),new Variant(75),new Variant(25),new Variant("Help")).toDispatch();
			new DispatchEvents(helpButton,new HelpItemEvents());
			
			Dispatch.put(canCloseDialog,"HelpButton",new Variant(helpButton));
			Dispatch.put(canCloseDialog,"Color",new Variant(0xFF00FF));
			
			Dispatch.call(canCloseDialog,"ShowModal");
			
			Dispatch.call(canCloseDialog,"Destroy");
			
			ResultPtr.put(ResultPtr,"Value",new Variant(CanClose));
		};
		
		public static class YesButtonEvents
		{
			
			public void OnClick(Variant[] args)
			{
				CanClose = true;
				Dispatch Sender = args[0].toDispatch();
				Dispatch.call(Dispatch.get(Sender,"Form").toDispatch(),"Close");
			};
			
		};
		
	};
	
	public static class CloseItemEvents
	{
		
		public void OnClick(Variant[] args)
		{
			Dispatch Sender = args[0].toDispatch();
			Dispatch.call(Dispatch.get(Sender,"Form").toDispatch(),"Close");
		};
		
		public void OnExecute(Variant[] args)
		{
			OnClick(args);
		};
		
	};
	
};
