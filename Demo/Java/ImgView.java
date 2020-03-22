//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004

import com.jacob.com.*;
import com.jacob.activeX.*;

class ImgView extends WSOTest{
	
	private static Dispatch form = null;
	private static Dispatch frame = null;
	private static Dispatch menu = null;
	private static Dispatch statusbar = null;
	private static Dispatch image = null;
	private static Dispatch invert = null;
	private static Dispatch statuspanel0,statuspanel1 = null;
	
	public static void main(String[] args) throws Exception {
		ComThread.InitSTA();
		
		ActiveXComponent ax = new ActiveXComponent("Scripting.WindowSystemObject");
		Dispatch o = (Dispatch)ax.getObject();
		
		try
		{
			form = Dispatch.call(o, "CreateForm", new Variant(0), new Variant(0), new Variant(0), new Variant(0)).toDispatch();
			
			Dispatch.put(form,"ClientWidth",new Variant(600));
			Dispatch.put(form,"ClientHeight",new Variant(260));
			Dispatch.call(form,"CenterControl");
			Dispatch.put(form,"Text",new Variant("Image Viewer"));
			
			frame = Dispatch.call(form,"CreateFrame",new Variant(0),
			new Variant(0),new Variant(0),new Variant(0)).toDispatch();
			Dispatch.put(frame,"Align",new Variant(AL_CLIENT));
			Dispatch.put(frame,"AutoScroll",new Variant(true));
			Dispatch.put(frame,"Border",new Variant(true));
			
			statusbar = Dispatch.call(form,"CreateStatusBar").toDispatch();
			statuspanel0 = Dispatch.call(statusbar,"Add",new Variant(100)).toDispatch();
			statuspanel1 = Dispatch.call(statusbar,"Add",new Variant(100)).toDispatch();
			Dispatch.put(statuspanel0,"AutoSize",new Variant(true));
			Dispatch.put(statuspanel1,"AutoSize",new Variant(true));
			
			Dispatch menu = Dispatch.call(form,"CreateMenuBar",new Variant(0),
			new Variant(0),new Variant(0),new Variant(0)).toDispatch();
			Dispatch.put(menu,"Align",new Variant(AL_TOP));
			menu = Dispatch.get(menu,"menu").toDispatch();
			
			Dispatch x = Dispatch.call(menu,"Add",new Variant("File")).toDispatch();
			
			Dispatch t = Dispatch.call(x,"Add",new Variant("Open"),new Variant("CTRL+O")).toDispatch();
			new DispatchEvents(t,new OpenItemEvents());

			t = Dispatch.call(x,"Add",new Variant("Close")).toDispatch();
			new DispatchEvents(t,new CloseImageItemEvents());

			Dispatch.call(x,"NewLine");

			t = Dispatch.call(x,"Add",new Variant("Exit"),new Variant(27)).toDispatch();
			new DispatchEvents(t,new CloseItemEvents());
			
			x = Dispatch.call(menu,"Add",new Variant("View")).toDispatch();

			invert = Dispatch.call(x,"Add",new Variant("Invert")).toDispatch();
			new DispatchEvents(invert,new InvertItemEvents());
			Dispatch.put(invert,"CheckBox",new Variant(true));
			
			x = Dispatch.call(menu,"Add",new Variant("Help")).toDispatch();

			t = Dispatch.call(x,"Add",new Variant("About"),new Variant("F1")).toDispatch();
			new DispatchEvents(t,new HelpItemEvents());
			
			Dispatch.call(form,"Show");
			
			Dispatch.call(o,"Run");
			
		}
		finally
		{
			ComThread.Release();
		};
		
	};
	
	public static class ImageItemEvents
	{
		
		public void OnUpdate(Variant[] args)
		{
			Dispatch.put(args[0].toDispatch(),"Enabled",new Variant(image!=null));
		};
		
	};
	
	public static class CloseImageItemEvents extends ImageItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.call(image,"Destroy");
			image = null;
			Dispatch.put(statuspanel0,"Text",new Variant(""));
			Dispatch.put(statuspanel1,"Text",new Variant(""));
		};
		
	};
	
	public static class InvertItemEvents extends ImageItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			if (Dispatch.get(invert,"Checked").toBoolean())
			Dispatch.put(image,"CopyMode",new Variant(NOTSRCCOPY)); else
			Dispatch.put(image,"CopyMode",new Variant(SRCCOPY));
		};
		
	};
	
	public static class OpenItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			String s = Dispatch.call(form,"OpenDialog",new Variant(""),new Variant("All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif")).toString();
			if (s.length()>0)
			{
				if (image!=null) Dispatch.call(image,"Destroy");
				Dispatch.put(invert,"Checked",new Variant(false));
				image = Dispatch.call(frame,"DrawImage",new Variant(0),new Variant(0),new Variant(0),new Variant(0),new Variant(s)).toDispatch();
				int w = Dispatch.get(image,"Width").toInt();
				int h = Dispatch.get(image,"Height").toInt();
				if ((image!=null) && (w>0) && (h>0))
				{
					Dispatch.put(statuspanel0,"Text",new Variant(s));
					Dispatch.put(statuspanel1,"Text",new Variant(w+" x "+h));
				} else
				{
					Dispatch.put(statuspanel0,"Text",new Variant(""));
					Dispatch.put(statuspanel1,"Text",new Variant(""));
					Dispatch.call(form,"MessageBox",new Variant("Cannot open image"),new Variant(""),new Variant(MB_ICONHAND));
				};
			};
		};
		
	};
	
	public static class HelpItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			AboutWSO(args[0].toDispatch(),"Image Viewer Demo");
		};
		
		public void OnClick(Variant[] args)
		{
			OnExecute(args);
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
