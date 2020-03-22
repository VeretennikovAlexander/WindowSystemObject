/*
 * COMDisp.h - C++ Automation Bridge
 * Copyright (c) 2004-2005 by Veretennikov A. B. 
 * mailto:abvmt@e1.ru, http://cs.usu.edu.ru/home/abv/.
 * All rights reserved.
 * 
 *  This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 *
 */

#ifndef __ATLCOM_H__
	#error: COMDisp.h requires atlcom.h to be included first
#endif

#ifndef __ATLSTR_H__
	#error: COMDisp.h requires atlstr.h to be included first
#endif

#ifndef __ATLEXCEPT_H__
	#error: COMDisp.h requires atlexcept.h to be included first
#endif

class CAutoVariant
{
public:
	CAutoVariant()
	{
	}

	template <class T>
	CAutoVariant(const T& rSrc):
		m_T( rSrc)
	{
	};
	
	CAutoVariant(const CAutoVariant& rSrCA) :
		m_T( rSrCA.m_T )
	{
	}

	template <class T>
	CAutoVariant& operator=(const T& rSrc)
	{
		m_T = rSrc;
		return *this;
	}

	template <class T>
	bool operator<(const T& rSrc) const
	{
		return m_T < rSrc;
	}

	template <class T>
	bool operator==(const T& rSrc) const
	{
		return m_T == rSrc;
	}

	operator CComVariant&()
	{
		return m_T;
	}

	operator const CComVariant&() const
	{
		return m_T;
	}

	CComVariant* operator->()
	{
		return &m_T;
	};

	template <class T>
	void cast(T &P)
	{
		P = cast<T>();
	};

	template <class T>
	T cast() const
	{
		CComVariant X = m_T;
		
		Check(X.ChangeType(CVarTypeInfo<T>::VT));

		return X.*CVarTypeInfo<T>::pmField;
	};

	CComVariant m_T;

	void CreateObject(CLSID& ID, LPUNKNOWN pUnkOuter = NULL, DWORD dwClsContext = CLSCTX_INPROC_SERVER |
			CLSCTX_LOCAL_SERVER)
	{
		CComPtr<IDispatch> o;

		Check(CoCreateInstance(ID, pUnkOuter, dwClsContext, __uuidof(IDispatch), (void**)&o));			
		
		m_T = o;
	};

	void CreateObject(const char* ProgID, LPUNKNOWN pUnkOuter = NULL, DWORD dwClsContext = CLSCTX_INPROC_SERVER |
			CLSCTX_LOCAL_SERVER)
	{
		CLSID ID;
		Check(CLSIDFromProgID(CComBSTR(ProgID),&ID));
		return CreateObject(ID,pUnkOuter,dwClsContext);
	};

	CAutoVariant call(const char *s)
	{
		CComVariant Result;
		Check(CALL(m_T,s,&Result));
		return Result;
	};

	CAutoVariant get(const char *s)
	{
		CComVariant Result;
		Check(GET(m_T,s,&Result));
		return Result;
	};

	void put(const char *s, CComVariant Value)
	{
		Check(PUT(m_T,s,Value));
	};

	template <class V>
	void put(const char *s, V Value)
	{
		CComVariant v(Value);
		Check(PUT(m_T,s,v));
	};

	#include "dispinv.h"

public:

	bool IsObject()
	{
		return (m_T.vt == VT_DISPATCH) || SUCCEEDED(m_T.ChangeType(VT_DISPATCH));
	};

	static void Check(HRESULT hr)
	{
		if (FAILED(hr)) throw CAtlException(hr);
	};

	static HRESULT CALL(CComVariant I, const char* S, CComVariant *Result = 0, int ResultType = 0, int C = 0, ...)
	{
		if (SUCCEEDED(I.ChangeType(VT_DISPATCH)))
		{
		DISPID ID;
		CComBSTR B(S);	
		if (I.pdispVal->GetIDsOfNames(IID_NULL,&B,1,LOCALE_USER_DEFAULT,&ID)!=S_OK) return E_FAIL;
		DISPPARAMS P = {0};
		P.cArgs = C;
		
		CComVariant *A;
		if (C>0)
		{
			va_list l;
			va_start(l,C);
			A = new CComVariant[C];
			for (int i=0; i<C; i++)
				A[C-i-1] = va_arg(l,CComVariant);
			va_end(l);
		} else A = 0;
		P.rgvarg = A;

		HRESULT H = I.pdispVal->Invoke(ID,IID_NULL,LOCALE_USER_DEFAULT,DISPATCH_METHOD,&P,Result,0,0);
		if (A) delete[] A;
		if (H!=S_OK) return E_FAIL;
		if (ResultType && Result)
			if (Result->ChangeType(ResultType)!=S_OK) return E_FAIL;
		return S_OK;
		} else return E_FAIL;
	};

	static HRESULT GET(CComVariant I, const char* S, CComVariant *Result = 0, int ResultType = 0, int C = 0, ...)
	{
		if (SUCCEEDED(I.ChangeType(VT_DISPATCH)))
		{
		DISPID ID;
		CComBSTR B(S);	
		if (I.pdispVal->GetIDsOfNames(IID_NULL,&B,1,LOCALE_USER_DEFAULT,&ID)!=S_OK) return E_FAIL;
		DISPPARAMS P = {0};
		P.cArgs = C;
		CComVariant *A;
		if (C>0)
		{
			va_list l;
			va_start(l,C);
			A = new CComVariant[C];
			for (int i=0; i<C; i++)
				A[C-i-1] = va_arg(l,CComVariant);
			va_end(l);
		} else A = 0;
		P.rgvarg = A;

		HRESULT H = I.pdispVal->Invoke(ID,IID_NULL,LOCALE_USER_DEFAULT,DISPATCH_PROPERTYGET,&P,Result,0,0);
		if (A) delete[] A;
		if (H!=S_OK) return E_FAIL;
		if (ResultType && Result)
			if (Result->ChangeType(ResultType)!=S_OK) return E_FAIL;
		return S_OK;
		} else return E_FAIL;
	};

	static HRESULT PUT(CComVariant I, const char* S, CComVariant Value, int C = 0, ...)
	{
		if (SUCCEEDED(I.ChangeType(VT_DISPATCH)))
		{
		DISPID ID;
		CComBSTR B(S);
		if (I.pdispVal->GetIDsOfNames(IID_NULL,&B,1,LOCALE_USER_DEFAULT,&ID)!=S_OK) return E_FAIL;
		DISPPARAMS P = {0};
		P.cArgs = C+1;
		va_list l;
		va_start(l,C);
		CComVariant *A = new CComVariant[P.cArgs];
		for (int i=0; i<C; i++)
			A[C-i] = va_arg(l,CComVariant);
			A[0] = Value;
		va_end(l);
		P.rgvarg = A;
		P.cNamedArgs = 1;
		DISPID T = DISPID_PROPERTYPUT;
		P.rgdispidNamedArgs = &T;

		HRESULT H = I.pdispVal->Invoke(ID,IID_NULL,LOCALE_USER_DEFAULT,DISPATCH_PROPERTYPUT,&P,0,0,0);
		delete[] A;
		if (H!=S_OK) return E_FAIL;
		return S_OK;
		} else return E_FAIL;
	};

};

//typedef void (* EVENTPROC)(int C, CAutoVariant *A); default EVENTPROC type

class EventHandler
{
	template <class EVENTPROC>
	class ATL_NO_VTABLE CEventHandler: public CComObjectRootEx<CComMultiThreadModel>,
		public CComCoClass<CEventHandler>,
		public IDispatch
	{
	public:
		EVENTPROC P;
		CComVariant Data;

		static CComVariant New(EVENTPROC E, CComVariant Data)
		{
			CEventHandler *C;
			CComVariant V;
			if (CEventHandler::CreateInstance((IDispatch**)&C) == S_OK)
			{
				C->P = E;
				C->Data = Data;
				V = (IDispatch*)C;
				C->Release();
			};
			return V;
		};

	// IDispatch
		STDMETHOD(GetTypeInfoCount)(UINT* pctinfo)
		{
			*pctinfo = 0;
			return S_OK;
		}
		STDMETHOD(GetTypeInfo)(UINT itinfo, LCID lcid, ITypeInfo** pptinfo)
		{
			return E_NOTIMPL;
		}
		enum { DISPID_CALL = 31415926};

		STDMETHOD(GetIDsOfNames)(REFIID riid, LPOLESTR* rgszNames, UINT cNames,
			LCID lcid, DISPID* rgdispid)
		{
			HRESULT H = S_OK;
			for (UINT P = 0; P<cNames; P++)
			{
				CAtlString S(rgszNames[P]);
				if (CompareString(LOCALE_USER_DEFAULT, NORM_IGNORECASE, S,
					S.GetLength(), "CALL", 4) == CSTR_EQUAL)
					rgdispid[P] = DISPID_CALL; else
					{
						rgdispid[P] = DISPID_UNKNOWN;
						H = DISP_E_UNKNOWNNAME;
					};
			};
			return H;
		}
		STDMETHOD(Invoke)(DISPID dispidMember, REFIID riid,
			LCID lcid, WORD wFlags, DISPPARAMS* pdispparams, VARIANT* pvarResult,
			EXCEPINFO* pexcepinfo, UINT* puArgErr)
		{
			if (dispidMember==DISPID_CALL)
			{
				CAutoVariant *T, *R;

				int K = Data.vt != VT_EMPTY ? 1 : 0;
				
				if (K)
				{
					T = new CAutoVariant[pdispparams->cArgs+1];
					T[0] = Data;
					R = T+1;
				} else
				{
					T = new CAutoVariant[pdispparams->cArgs];
					R = T;
				};

				int C = pdispparams->cArgs-1;
				for (int I = 0; I<C; I++)
					R[I] = pdispparams->rgvarg[C-I-1];

				P(C+K,T);
				delete[] T;
				return S_OK;
			} else return E_FAIL;
		}

		BEGIN_COM_MAP(CEventHandler)
			COM_INTERFACE_ENTRY(IDispatch)
		END_COM_MAP()
	};

	CComVariant X;
public:

	template <class EVENTPROC>
	EventHandler(EVENTPROC E)
	{
		X = CEventHandler<EVENTPROC>::New(E,CComVariant());
	};

	template <class EVENTPROC>
	EventHandler(EVENTPROC E, CComVariant Data)
	{
		X = CEventHandler<EVENTPROC>::New(E,Data);
	};

	operator CComVariant&(){ return X;};
};
