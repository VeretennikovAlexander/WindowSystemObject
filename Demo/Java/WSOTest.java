//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004

import com.jacob.com.*;
import com.jacob.activeX.*;

public class WSOTest implements WSO.Constants
{

	static public void AboutWSO(Dispatch Sender, String Text)
	{
		Dispatch form = Dispatch.get(Sender,"Form").toDispatch();
		Dispatch j = Dispatch.call(form,"CreateDialogForm",new Variant(0),
		new Variant(0),new Variant(0),new Variant(0)).toDispatch();
		
		Dispatch.put(j,"ClientWidth",new Variant(400));
		Dispatch.put(j,"ClientHeight",new Variant(250));
		Dispatch.call(j,"CenterControl");
		
		Dispatch t = Dispatch.call(j,"Rectangle",new Variant(0),new Variant(0),
			new Variant(0),new Variant(75)).toDispatch();
		Dispatch b = Dispatch.get(t,"Brush").toDispatch();
		Dispatch.put(b,"Color",new Variant(0x00FFA0A0));
		Dispatch.put(b,"Style",new Variant(B_GRADIENT | DIRECTION_TOP_BOTTOM));
		Dispatch.put(b,"GradientColor",new Variant(0x00FFEEEE));
		Dispatch p = Dispatch.get(t,"Pen").toDispatch();
		Dispatch.put(p,"Color",new Variant(0x00FF5555));
		Dispatch.put(t,"Align",new Variant(AL_TOP));

		t = Dispatch.call(j,"Rectangle",new Variant(0),new Variant(0),
			new Variant(0),new Variant(0)).toDispatch();
		b = Dispatch.get(t,"Brush").toDispatch();
		Dispatch.put(b,"Color",new Variant(0x00FFEEEE));
		Dispatch.put(b,"Style",new Variant(B_GRADIENT | DIRECTION_TOP_BOTTOM));
		Dispatch.put(b,"GradientColor",new Variant(0x00FFEEEE));
		p = Dispatch.get(t,"Pen").toDispatch();
		Dispatch.put(p,"Color",new Variant(0x00FF5555));
		Dispatch.put(t,"Align",new Variant(AL_CLIENT));

		t = Dispatch.call(j,"CreateButton",new Variant(300),
		new Variant(220),new Variant(75),new Variant(25),new Variant("Close")).toDispatch();
		new DispatchEvents(t,new CloseItemEvents());
		Dispatch.put(t,"Default",new Variant(true));
		Dispatch.put(t,"Cancel",new Variant(true));		

		Dispatch Root = Dispatch.get(t,"Root").toDispatch();
		Dispatch Version = Dispatch.get(Root,"Version").toDispatch();
		String s = Dispatch.get(Version,"String").toString();
		
		t = Dispatch.call(j,"TextOut",new Variant(100),new Variant(10),new Variant(s)).toDispatch();
		Dispatch f = Dispatch.get(t,"Font").toDispatch();
		Dispatch.put(f,"Size",new Variant(14));
		Dispatch.put(f,"Bold",new Variant(true));
		Dispatch.put(f,"Name",new Variant("Arial Black"));
		Dispatch.put(f,"Color",new Variant(0x000000FF));
		Dispatch.put(f,"Italic",new Variant(true));
		Dispatch.put(f,"Angle",new Variant(5));	

		//j.DrawImage(40,10,32,32,StartupDir()+"..\\Data\\WSO.ICO")
	
		t = Dispatch.call(j,"TextOut",new Variant(100),new Variant(50),new Variant(Text)).toDispatch();
		f = Dispatch.get(t,"Font").toDispatch();
		Dispatch.put(f,"Bold",new Variant(true));

		Dispatch.call(j,"TextOut",new Variant(100),new Variant(90),new Variant("(C) Veretennikov A. B. 2004 - 2006"));			

		t = Dispatch.call(j,"CreateHyperLink",new Variant(100),new Variant(130),new Variant(200),
		new Variant(25),Dispatch.get(Version,"Url"),new Variant("WSO in the Web")).toDispatch();
		Dispatch.put(t,"Color",new Variant(0x00FFEEEE));

		boolean Trial = Dispatch.get(Version,"Trial").toBoolean();
		if (Trial)
			Dispatch.call(j,"TextOut",new Variant(100),new Variant(170),new Variant("It is a Demo version of WSO\rwith several serious limitations.\rTry it and buy the full version."));

		Dispatch.put(j,"Text",new Variant("About WSO"));
		new DispatchEvents(j,new FormEvents());

		Dispatch.call(j,"ShowModal");
		
		Dispatch.call(j,"Destroy");
	};
	
	static class FormEvents
	{
		
		public void OnHitTest(Variant[] args)
		{
			Dispatch Sender = args[3].toDispatch();
			Dispatch.put(Sender,"Value",new Variant(HTCAPTION));
		};		
		
	};

	static class CloseItemEvents
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

}