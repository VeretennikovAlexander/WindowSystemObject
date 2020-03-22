//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004

import com.jacob.com.*;
import com.jacob.activeX.*;
import java.util.*;

class Region implements WSO.Constants{
	
	private static Dispatch form = null;
	private static Dispatch text = null;
	
	public static void main(String[] args) throws Exception {
		
		ActiveXComponent ax = new ActiveXComponent("Scripting.WindowSystemObject");
		Dispatch o = (Dispatch)ax.getObject();
		
		try
		{
			Dispatch r = Dispatch.get(o,"Regions").toDispatch();

			form = Dispatch.call(o, "CreateForm", new Variant(0), new Variant(0), new Variant(0), new Variant(0)).toDispatch();
			
			Dispatch.put(form,"ClientWidth",new Variant(300));
			Dispatch.put(form,"ClientHeight",new Variant(200));
			Dispatch.put(form,"SizeGrip",new Variant(false));
			Dispatch.put(form,"Caption",new Variant(false));
			Dispatch.put(form,"MaximizeBox",new Variant(false));
			Dispatch.put(form,"Text",new Variant("Region Demo"));
			Dispatch.call(form,"CenterControl");
			
			Dispatch x = Dispatch.call(form,"CreateButton",new Variant(120),new Variant(90),new Variant(75),new Variant(25),new Variant("Close")).toDispatch();
			new DispatchEvents(x,new CloseItemEvents());
			Dispatch.put(x,"Default",new Variant(true));
			Dispatch.put(x,"Cancel",new Variant(true));

			Dispatch h = Dispatch.call(r,"CreateEllipticRgn",new Variant(20),new Variant(20),new Variant(260),new Variant(160)).toDispatch();
			Dispatch t = Dispatch.call(r,"CreateEllipticRgn",new Variant(30),new Variant(30),new Variant(240),new Variant(140)).toDispatch();
			h = Dispatch.call(r,"CombineRgn",new Variant(h),new Variant(t),new Variant(RGN_DIFF)).toDispatch();

			SafeArray a = new SafeArray(Variant.VariantVariant,11);

			a.setVariant(0,new Variant(150));
			a.setVariant(1,new Variant(0));
			a.setVariant(2,new Variant(220));
			a.setVariant(3,new Variant(200));
			a.setVariant(4,new Variant(0));
			a.setVariant(5,new Variant(60));
			a.setVariant(6,new Variant(300));
			a.setVariant(7,new Variant(60));
			a.setVariant(8,new Variant(80));
			a.setVariant(9,new Variant(200));
			a.setVariant(10,new Variant(2));

			t = Dispatch.call(r,"CreatePolygonRgn",new Variant(a)).toDispatch();

			h = Dispatch.call(r,"CombineRgn",new Variant(h),new Variant(t),new Variant(RGN_OR)).toDispatch();

			Dispatch.put(form,"Region",new Variant(h));

			Dispatch.put(Dispatch.get(form,"Brush").toDispatch(),"Color",new Variant(0x00FF0000));
			
			Dispatch.call(form,"DrawRegion",new Variant(0),new Variant(0),new Variant(h));
			
			text = Dispatch.call(form,"TextOut",new Variant(40),new Variant(70),new Variant("")).toDispatch();
			Dispatch.put(Dispatch.get(text,"Font").toDispatch(),"Bold",new Variant(true));
			Dispatch.put(Dispatch.get(text,"Font").toDispatch(),"Color",new Variant(0x00FFFFFF));

			Dispatch timer = Dispatch.call(o,"CreateTimer").toDispatch();
			Dispatch.put(timer,"Interval",new Variant(100));
			Dispatch.put(timer,"Active",new Variant(true));
			new DispatchEvents(timer,new TimerEvents());

			new DispatchEvents(form,new FormEvents());

			Dispatch.call(form,"Show");
			
			Dispatch.call(o,"Run");
		}
		finally
		{
			ComThread.Release();
		};
		
	};
	
	public static class TimerEvents
	{

		
		public void OnExecute(Variant[] args)
		{
			Date now = new Date();
			Dispatch.put(text,"Text",new Variant(now.toString()));
		};
		
	};

	public static class FormEvents
	{
		public void OnHitTest(Variant[] args)
		{
			Dispatch ResultPtr = args[3].toDispatch();
			Dispatch.call(ResultPtr,"Put",new Variant(HTCAPTION));
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