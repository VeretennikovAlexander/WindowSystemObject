//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004

import com.jacob.com.*;
import com.jacob.activeX.*;

class Edit extends WSOTest{
	
	private static Dispatch form = null;
	private static Dispatch edit = null;
	private static Dispatch menu = null;
	private static Dispatch statusbar = null;
	private static Dispatch statuspanel = null;
	
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
			Dispatch.put(form,"Text",new Variant("Text Editor"));
			
			edit = Dispatch.call(form,"CreateEdit",new Variant(0),
			new Variant(0),new Variant(0),new Variant(0)).toDispatch();
			Dispatch.put(edit,"Align",new Variant(AL_CLIENT));
			Dispatch.put(edit,"HideSelection",new Variant(false));
			Dispatch.put(edit,"MultiLine",new Variant(true));
			Dispatch.put(edit,"ScrollBars",new Variant(SS_BOTH));
			
			Dispatch menu = Dispatch.call(form,"CreateMenuBar",new Variant(0),
			new Variant(0),new Variant(0),new Variant(0)).toDispatch();
			Dispatch.put(menu,"Align",new Variant(AL_TOP));
			
			menu = Dispatch.get(menu,"menu").toDispatch();
			
			Dispatch x = Dispatch.call(menu,"Add",new Variant("File")).toDispatch();
			
			Dispatch t = Dispatch.call(x,"Add",new Variant("Open"),new Variant("CTRL+O")).toDispatch();
			new DispatchEvents(t,new OpenItemEvents());

			t = Dispatch.call(x,"Add",new Variant("Save as ..."),new Variant("CTRL+S")).toDispatch();
			new DispatchEvents(t,new SaveItemEvents());

			Dispatch.call(x,"NewLine");

			t = Dispatch.call(x,"Add",new Variant("Exit"),new Variant(27)).toDispatch();
			new DispatchEvents(t,new CloseItemEvents());
			
			x = Dispatch.call(menu,"Add",new Variant("Edit")).toDispatch();

			t = Dispatch.call(x,"Add",new Variant("Undo")).toDispatch();
			new DispatchEvents(t,new UndoItemEvents());

			Dispatch.call(x,"NewLine");

			t = Dispatch.call(x,"Add",new Variant("Cut")).toDispatch();
			new DispatchEvents(t,new CutItemEvents());

			t = Dispatch.call(x,"Add",new Variant("Copy")).toDispatch();
			new DispatchEvents(t,new CopyItemEvents());

			t = Dispatch.call(x,"Add",new Variant("Paste")).toDispatch();
			new DispatchEvents(t,new PasteItemEvents());

			Dispatch.call(x,"NewLine");

			t = Dispatch.call(x,"Add",new Variant("Select All")).toDispatch();
			new DispatchEvents(t,new SelectAllItemEvents());
			
			x = Dispatch.call(menu,"Add",new Variant("Format")).toDispatch();

			t = Dispatch.call(x,"Add",new Variant("Word Wrap")).toDispatch();
			Dispatch.put(t,"CheckBox",new Variant(true));
			new DispatchEvents(t,new WordWrapItemEvents());

			Dispatch.call(x,"NewLine");

			t = Dispatch.call(x,"Add",new Variant("Font")).toDispatch();
			new DispatchEvents(t,new FontItemEvents());
			
			x = Dispatch.call(menu,"Add",new Variant("Help")).toDispatch();

			t = Dispatch.call(x,"Add",new Variant("About"),new Variant("F1")).toDispatch();
			new DispatchEvents(t,new HelpItemEvents());
			
			statusbar = Dispatch.call(form,"CreateStatusBar").toDispatch();
			new DispatchEvents(form,new FormEvents());
			
			Dispatch.call(form,"Show");
			
			Dispatch.call(o,"Run");
		}
		finally
		{
			ComThread.Release();
		};
		
	};
	
	public static class UndoItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.call(edit,"Undo");
		};
		
		public void OnUpdate(Variant[] args)
		{
			Dispatch.put(args[0].toDispatch(),"Enabled",Dispatch.get(edit,"CanUndo"));
		};
		
	};
	
	public static class CutItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.call(edit,"Cut");
		};
		
		public void OnUpdate(Variant[] args)
		{
			Dispatch.put(args[0].toDispatch(),"Enabled",new Variant(Dispatch.get(edit,"SelLength").toInt()>0));
		};
		
	};
	
	public static class CopyItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.call(edit,"Copy");
		};
		
		public void OnUpdate(Variant[] args)
		{
			Dispatch.put(args[0].toDispatch(),"Enabled",new Variant(Dispatch.get(edit,"SelLength").toInt()>0));
		};
		
	};
	
	public static class PasteItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.call(edit,"Paste");
		};
		
		public void OnUpdate(Variant[] args)
		{
			Dispatch.put(args[0].toDispatch(),"Enabled",Dispatch.get(edit,"CanPaste"));
		};
		
	};
	
	public static class SelectAllItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.call(edit,"SelectAll");
		};
		
	};
	
	public static class WordWrapItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.put(edit,"WordWrap",Dispatch.get(args[0].toDispatch(),"Checked"));
		};
		
		public void OnUpdate(Variant[] args)
		{
			Dispatch.put(args[0].toDispatch(),"Checked",Dispatch.get(edit,"WordWrap"));
		};
		
	};
	
	public static class FontItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			Dispatch.put(edit,"Font",Dispatch.call(form,"FontDialog",Dispatch.get(edit,"Font")));
		};
		
	};
	
	public static class SaveItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			String s = Dispatch.call(form,"SaveDialog",new Variant(""),new Variant("Text Files (*.txt)|*.txt")).toString();
			if (s.length()>0)
			{
				try
				{
					ActiveXComponent fs = new ActiveXComponent("Scripting.FileSystemObject");
					Dispatch fso = (Dispatch)fs.getObject();
					Dispatch file = Dispatch.call(fso,"CreateTextFile",new Variant(s),new Variant(true)).toDispatch();
					Dispatch.call(file,"Write",Dispatch.get(edit,"Text"));
				}
				catch (ComException e)
				{
					Dispatch.call(form,"MessageBox",new Variant("Cannot create file"),new Variant(""),new Variant(MB_ICONERROR | MB_OK));
				};
			};
		};
	};
	
	public static class OpenItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			String s = Dispatch.call(form,"OpenDialog",new Variant(""),new Variant("Text Files (*.txt)|*.txt")).toString();
			if (s.length()>0)
			try
			{
				ActiveXComponent fs = new ActiveXComponent("Scripting.FileSystemObject");
				Dispatch fso = (Dispatch)fs.getObject();
				Dispatch file = Dispatch.call(fso,"OpenTextFile",s, new Variant(1), new Variant(false)).toDispatch();
				Dispatch.call(edit,"Clear");
				try
				{
					Dispatch.put(edit,"Text",Dispatch.call(file,"ReadAll"));
				}
				catch (ComException e)
				{
				};
			}
			catch (ComException e)
			{
				Dispatch.call(form,"MessageBox",new Variant("Cannot open file"), new Variant(""), new Variant(MB_ICONERROR | MB_OK));
			};
		};
		
	};
	
	public static class HelpItemEvents
	{
		
		public void OnExecute(Variant[] args)
		{
			AboutWSO(args[0].toDispatch(),"Text Editor Demo");
		};
		
		public void OnClick(Variant[] args)
		{
			OnExecute(args);
		};
		
	};
	
	public static class FormEvents
	{
		
		public void OnCloseQuery(Variant[] args)
		{
			Dispatch ResultPtr = args[1].toDispatch();
			Dispatch form = Dispatch.get(args[0].toDispatch(),"Form").toDispatch();
			
			Dispatch.put(ResultPtr,"Value",new Variant(Dispatch.call(form,"MessageBox",new Variant("Do you really want to quit this program?"),
			new Variant(""),new Variant(MB_OKCANCEL)).toInt()==IDOK));
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
