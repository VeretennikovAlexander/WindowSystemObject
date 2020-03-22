import com.jacob.com.*;
import com.jacob.activeX.*;

class Template implements WSO.Constants{
	
	private static Dispatch form = null;
	
	public static void main(String[] args) throws Exception {
		
		ActiveXComponent ax = new ActiveXComponent("Scripting.WindowSystemObject");
		Dispatch o = (Dispatch)ax.getObject();
		
		try
		{
			form = Dispatch.call(o, "CreateForm", new Variant(0), new Variant(0), new Variant(0), new Variant(0)).toDispatch();
			
			Dispatch.put(form,"ClientWidth",new Variant(500));
			Dispatch.put(form,"ClientHeight",new Variant(300));
			Dispatch.call(form,"CenterControl");
			
			Dispatch.call(form,"Show");
			
			Dispatch.call(o,"Run");
		}
		finally
		{
			ComThread.Release();
		};
		
	};
	
};
