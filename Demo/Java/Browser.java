//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004

import com.jacob.com.*;
import com.jacob.activeX.*;

class Browser extends WSOTest{
	
	private static Dispatch form = null;
	private static Dispatch browser = null;
	private static Dispatch menu = null;
	private static Dispatch statusbar = null;
	private static Dispatch path = null;
	private static Dispatch statuspanel0,statuspanel1 = null;
	
	public static void main(String[] args) throws Exception {
		ComThread.InitSTA();
		
		ActiveXComponent ax = new ActiveXComponent("Scripting.WindowSystemObject");
		Dispatch o = (Dispatch)ax.getObject();
		
		try
		{
			form = Dispatch.call(o, "CreateForm", new Variant(0), new Variant(0), new Variant(0), new Variant(0)).toDispatch();
			
			Dispatch.put(form,"ClientWidth",new Variant(500));
			Dispatch.put(form,"ClientHeight",new Variant(300));
			Dispatch.call(form,"CenterControl");
			Dispatch.put(form,"Text",new Variant("Web Browser"));
			
			Dispatch r = Dispatch.call(form,"CreateReBar",new Variant(0),
			new Variant(0),new Variant(0),new Variant(0)).toDispatch();

			Dispatch menu = Dispatch.call(r,"CreateMenuBar",new Variant(0),
			new Variant(0),new Variant(0),new Variant(0)).toDispatch();
			menu = Dispatch.get(menu,"menu").toDispatch();
			
			Dispatch x = Dispatch.call(menu,"Add",new Variant("File")).toDispatch();

			Dispatch OpenItem = Dispatch.call(x,"Add",new Variant("Open"),new Variant("CTRL+O")).toDispatch();
			new DispatchEvents(OpenItem,new OpenItemEvents());

			Dispatch.call(x,"NewLine");

			Dispatch t = Dispatch.call(x,"Add",new Variant("Exit"),new Variant(27)).toDispatch();
			new DispatchEvents(t,new CloseItemEvents());
			
			x = Dispatch.call(menu,"Add",new Variant("View")).toDispatch();
			t = Dispatch.call(x,"Add",new Variant("Go")).toDispatch();

			Dispatch BackItem = Dispatch.call(t,"Add",new Variant("Back"),new Variant("ALT+LEFT")).toDispatch();
			new DispatchEvents(BackItem,new BackItemEvents());

			Dispatch ForwardItem = Dispatch.call(t,"Add",new Variant("Forward"),new Variant("ALT+RIGHT")).toDispatch();
			new DispatchEvents(ForwardItem,new ForwardItemEvents());

			Dispatch.call(t,"NewLine");

			Dispatch HomeItem = Dispatch.call(t,"Add",new Variant("Home"),new Variant("ALT+HOME")).toDispatch();
			new DispatchEvents(HomeItem,new HomeItemEvents());
			
			Dispatch StopItem  = Dispatch.call(x,"Add",new Variant("Stop")).toDispatch();
			new DispatchEvents(StopItem,new StopItemEvents());

			Dispatch RefreshItem = Dispatch.call(x,"Add",new Variant("Refresh"),new Variant("F5")).toDispatch();
			new DispatchEvents(RefreshItem,new RefreshItemEvents());
			
			x = Dispatch.call(menu,"Add",new Variant("Help")).toDispatch();

			Dispatch HelpItem = Dispatch.call(x,"Add",new Variant("About"),new Variant("F1")).toDispatch();
			new DispatchEvents(HelpItem,new HelpItemEvents());
			
			Dispatch toolbar = Dispatch.call(r,"CreateToolBar",new Variant(0),
			new Variant(0),new Variant(0),new Variant(25)).toDispatch();
			Dispatch.put(toolbar,"ShowText",new Variant(true));
			Dispatch buttons = Dispatch.get(toolbar,"Buttons").toDispatch();
			Dispatch.call(buttons,"Add",new Variant(BackItem));
			Dispatch.call(buttons,"Add",new Variant(ForwardItem));
			Dispatch.call(buttons,"Add",new Variant(StopItem));
			Dispatch.call(buttons,"Add",new Variant(RefreshItem));
			Dispatch.call(buttons,"Add",new Variant(HomeItem));

			Dispatch SearchItem = Dispatch.call(buttons,"Add",new Variant("Search")).toDispatch();
			new DispatchEvents(SearchItem,new SearchItemEvents());

			Dispatch.call(buttons,"Add",new Variant(OpenItem));
			Dispatch.call(buttons,"Add",new Variant("-"));
			Dispatch.call(buttons,"Add",new Variant(HelpItem));
			
			path = Dispatch.call(r,"CreateComboBox",new Variant(0),new Variant(0),new Variant(100),new Variant(25)).toDispatch();
			t = Dispatch.call(r,"Band",new Variant(path)).toDispatch();
			Dispatch.put(t,"Text",new Variant("Address"));
			new DispatchEvents(path,new PathEvents());
			
			statusbar = Dispatch.call(form,"CreateStatusBar").toDispatch();
			statuspanel0 = Dispatch.call(statusbar,"Add",new Variant(100)).toDispatch();
			statuspanel1 = Dispatch.call(statusbar,"Add",new Variant(100)).toDispatch();
			Dispatch.put(statuspanel0,"AutoSize",new Variant(true));
			Dispatch.put(statuspanel1,"AutoSize",new Variant(true));
			
			browser = Dispatch.call(form,"CreateActiveXControl",new Variant(0),new Variant(0),new Variant(0),
			new Variant(0),new Variant("{8856F961-340A-11D0-A96B-00C04FD705A2}")).toDispatch();
			Dispatch.put(browser,"Align",new Variant(AL_CLIENT));
			browser = Dispatch.get(browser,"Control").toDispatch();
			new DispatchEvents(browser,new BrowserEvents());
			
			Dispatch.call(form,"Show");
			
			Dispatch.call(o,"Run");
			
		}
		finally
		{
			ComThread.Release();
		};
		
	};
	
	public static class BackItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			try
			{
				Dispatch.call(browser,"GoBack");
			}
			catch (ComException e)
			{
			};
		};
		
	};
	
	public static class ForwardItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			try
			{
				Dispatch.call(browser,"GoForward");
			}
			catch (ComException e)
			{
			};
		};
		
	};
	
	public static class HomeItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			try
			{
				Dispatch.call(browser,"GoHome");
			}
			catch (ComException e)
			{
			};
		};
		
	};
	
	public static class StopItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			try
			{
				Dispatch.call(browser,"Stop");
			}
			catch (ComException e)
			{
			};
		};
		
	};
	
	public static class RefreshItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			try
			{
				Dispatch.call(browser,"Refresh");
			}
			catch (ComException e)
			{
			};
		};
		
	};
	
	public static class SearchItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			try
			{
				Dispatch.call(browser,"GoSearch");
			}
			catch (ComException e)
			{
			};
		};
		
	};
	
	public static class PathEvents
	{
		
		public void OnKeyDown(Variant[] args)
		{
			int Key = args[1].toInt();
			if (Key == 13)
			Dispatch.call(browser,"Navigate",Dispatch.get(args[0].toDispatch(),"Text"));
		};
		
	};
	
	public static class BrowserEvents
	{
		
		public void DownloadBegin(Variant[] args)
		{
			Dispatch.put(statuspanel0,"Text",new Variant("Downloading"));
		};
		
		public void DownloadComplete(Variant[] args)
		{
			Dispatch.put(statuspanel0,"Text",new Variant("Complete"));
		};
		
		public void TitleChange(Variant[] args)
		{
			Dispatch.put(statuspanel1,"Text",Dispatch.get(browser,"LocationName"));
			Dispatch.put(path,"Text",Dispatch.get(browser,"LocationURL"));
		};
		
	};
	
	public static class OpenItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			String s = Dispatch.call(form,"OpenDialog",new Variant(""),new Variant("HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML")).toString();
			if (s.length()>0)
			Dispatch.call(browser,"Navigate",new Variant(s));
		};
		
	};
	
	public static class HelpItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			AboutWSO(args[0].toDispatch(),"Web Browser Sample");
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
