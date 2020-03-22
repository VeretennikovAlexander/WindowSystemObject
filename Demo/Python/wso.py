#WindowSystemObject (WSO) Python Support File
#Copyright (C) Veretennikov A. B. 2004

import pythoncom
import win32com.client

#This is a part of implementation of Function object, defined by ECMA-262 Standard

class _Function:
	def _Invoke_(self, dispid, lcid, wFlags, args):
		if dispid == 1:
			self.call(args)
		else:
			raise Exception, "Member not found"

	def _GetIDsOfNames_(self, names, lcid):
		if len(names) > 1:
			raise Exception, "Cannot support member argument names"
		if str(names[0]) == "call": return (1,)
		else:
			raise Exception, "Member not found"

	def new(self):
		return pythoncom.WrapObject(self)

	def __init__(self,handler):
		self.handler = handler

	def call(self,args):
		l = []
		l.extend(win32com.client._get_good_object_(args))
		l.pop(0)
		self.handler(*l)

def getref(handler):
	return _Function(handler).new()