/*
 * dispinv.h - C++ Automation Bridge
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

CAutoVariant call(const char *s, CComVariant P0)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,1,P0));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,2,P0,P1));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,3,P0,P1,P2));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,4,P0,P1,P2,P3));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,5,P0,P1,P2,P3,P4));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,6,P0,P1,P2,P3,P4,P5));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,7,P0,P1,P2,P3,P4,P5,P6));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,8,P0,P1,P2,P3,P4,P5,P6,P7));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,9,P0,P1,P2,P3,P4,P5,P6,P7,P8));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,10,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,11,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,12,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,13,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,14,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,15,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,16,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,17,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,18,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,19,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,20,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,21,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,22,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,23,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,24,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,25,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,26,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,27,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,28,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,29,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,30,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,31,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,32,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,33,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,34,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,35,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,36,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,37,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,38,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,39,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,40,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,41,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,42,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,43,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,44,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,45,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,46,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,47,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,48,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,49,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,50,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,51,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,52,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,53,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,54,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,55,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,56,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,57,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,58,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,59,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,60,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,61,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant P61)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,62,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60,P61));
	return Result;
};

CAutoVariant call(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant P61, CComVariant P62)
{
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,63,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60,P61,P62));
	return Result;
};

template <class T0>
CAutoVariant call(const char *s, T0 P0)
{
	CComVariant p0=P0;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,1,p0));
	return Result;
};

template <class T0,class T1>
CAutoVariant call(const char *s, T0 P0, T1 P1)
{
	CComVariant p0=P0,p1=P1;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,2,p0,p1));
	return Result;
};

template <class T0,class T1,class T2>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2)
{
	CComVariant p0=P0,p1=P1,p2=P2;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,3,p0,p1,p2));
	return Result;
};

template <class T0,class T1,class T2,class T3>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,4,p0,p1,p2,p3));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,5,p0,p1,p2,p3,p4));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,6,p0,p1,p2,p3,p4,p5));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,7,p0,p1,p2,p3,p4,p5,p6));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,8,p0,p1,p2,p3,p4,p5,p6,p7));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,9,p0,p1,p2,p3,p4,p5,p6,p7,p8));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,10,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,11,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,12,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,13,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,14,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,15,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,16,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,17,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,18,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,19,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,20,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,21,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,22,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,23,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,24,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,25,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,26,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,27,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,28,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,29,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,30,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,31,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,32,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,33,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,34,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,35,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,36,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,37,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,38,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,39,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,40,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,41,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,42,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,43,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,44,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,45,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,46,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,47,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,48,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,49,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,50,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,51,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,52,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,53,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,54,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,55,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,56,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,57,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,58,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,59,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,60,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,61,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class T61>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, T61 P61)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60,p61=P61;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,62,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class T61,class T62>
CAutoVariant call(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, T61 P61, T62 P62)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60,p61=P61,p62=P62;
	CComVariant Result;
	Check(CALL(m_T,s,&Result,0,63,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61,p62));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,1,P0));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,2,P0,P1));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,3,P0,P1,P2));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,4,P0,P1,P2,P3));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,5,P0,P1,P2,P3,P4));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,6,P0,P1,P2,P3,P4,P5));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,7,P0,P1,P2,P3,P4,P5,P6));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,8,P0,P1,P2,P3,P4,P5,P6,P7));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,9,P0,P1,P2,P3,P4,P5,P6,P7,P8));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,10,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,11,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,12,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,13,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,14,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,15,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,16,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,17,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,18,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,19,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,20,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,21,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,22,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,23,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,24,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,25,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,26,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,27,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,28,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,29,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,30,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,31,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,32,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,33,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,34,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,35,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,36,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,37,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,38,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,39,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,40,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,41,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,42,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,43,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,44,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,45,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,46,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,47,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,48,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,49,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,50,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,51,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,52,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,53,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,54,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,55,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,56,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,57,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,58,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,59,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,60,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,61,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant P61)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,62,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60,P61));
	return Result;
};

CAutoVariant get(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant P61, CComVariant P62)
{
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,63,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60,P61,P62));
	return Result;
};

template <class T0>
CAutoVariant get(const char *s, T0 P0)
{
	CComVariant p0=P0;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,1,p0));
	return Result;
};

template <class T0,class T1>
CAutoVariant get(const char *s, T0 P0, T1 P1)
{
	CComVariant p0=P0,p1=P1;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,2,p0,p1));
	return Result;
};

template <class T0,class T1,class T2>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2)
{
	CComVariant p0=P0,p1=P1,p2=P2;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,3,p0,p1,p2));
	return Result;
};

template <class T0,class T1,class T2,class T3>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,4,p0,p1,p2,p3));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,5,p0,p1,p2,p3,p4));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,6,p0,p1,p2,p3,p4,p5));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,7,p0,p1,p2,p3,p4,p5,p6));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,8,p0,p1,p2,p3,p4,p5,p6,p7));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,9,p0,p1,p2,p3,p4,p5,p6,p7,p8));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,10,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,11,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,12,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,13,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,14,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,15,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,16,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,17,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,18,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,19,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,20,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,21,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,22,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,23,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,24,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,25,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,26,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,27,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,28,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,29,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,30,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,31,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,32,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,33,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,34,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,35,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,36,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,37,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,38,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,39,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,40,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,41,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,42,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,43,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,44,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,45,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,46,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,47,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,48,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,49,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,50,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,51,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,52,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,53,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,54,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,55,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,56,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,57,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,58,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,59,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,60,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,61,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class T61>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, T61 P61)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60,p61=P61;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,62,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61));
	return Result;
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class T61,class T62>
CAutoVariant get(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, T61 P61, T62 P62)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60,p61=P61,p62=P62;
	CComVariant Result;
	Check(GET(m_T,s,&Result,0,63,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61,p62));
	return Result;
};

void put(const char *s, CComVariant P0, CComVariant Value)
{
	Check(PUT(m_T,s,Value,1,P0));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant Value)
{
	Check(PUT(m_T,s,Value,2,P0,P1));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant Value)
{
	Check(PUT(m_T,s,Value,3,P0,P1,P2));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant Value)
{
	Check(PUT(m_T,s,Value,4,P0,P1,P2,P3));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant Value)
{
	Check(PUT(m_T,s,Value,5,P0,P1,P2,P3,P4));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant Value)
{
	Check(PUT(m_T,s,Value,6,P0,P1,P2,P3,P4,P5));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant Value)
{
	Check(PUT(m_T,s,Value,7,P0,P1,P2,P3,P4,P5,P6));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant Value)
{
	Check(PUT(m_T,s,Value,8,P0,P1,P2,P3,P4,P5,P6,P7));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant Value)
{
	Check(PUT(m_T,s,Value,9,P0,P1,P2,P3,P4,P5,P6,P7,P8));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant Value)
{
	Check(PUT(m_T,s,Value,10,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant Value)
{
	Check(PUT(m_T,s,Value,11,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant Value)
{
	Check(PUT(m_T,s,Value,12,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant Value)
{
	Check(PUT(m_T,s,Value,13,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant Value)
{
	Check(PUT(m_T,s,Value,14,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant Value)
{
	Check(PUT(m_T,s,Value,15,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant Value)
{
	Check(PUT(m_T,s,Value,16,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant Value)
{
	Check(PUT(m_T,s,Value,17,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant Value)
{
	Check(PUT(m_T,s,Value,18,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant Value)
{
	Check(PUT(m_T,s,Value,19,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant Value)
{
	Check(PUT(m_T,s,Value,20,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant Value)
{
	Check(PUT(m_T,s,Value,21,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant Value)
{
	Check(PUT(m_T,s,Value,22,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant Value)
{
	Check(PUT(m_T,s,Value,23,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant Value)
{
	Check(PUT(m_T,s,Value,24,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant Value)
{
	Check(PUT(m_T,s,Value,25,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant Value)
{
	Check(PUT(m_T,s,Value,26,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant Value)
{
	Check(PUT(m_T,s,Value,27,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant Value)
{
	Check(PUT(m_T,s,Value,28,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant Value)
{
	Check(PUT(m_T,s,Value,29,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant Value)
{
	Check(PUT(m_T,s,Value,30,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant Value)
{
	Check(PUT(m_T,s,Value,31,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant Value)
{
	Check(PUT(m_T,s,Value,32,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant Value)
{
	Check(PUT(m_T,s,Value,33,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant Value)
{
	Check(PUT(m_T,s,Value,34,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant Value)
{
	Check(PUT(m_T,s,Value,35,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant Value)
{
	Check(PUT(m_T,s,Value,36,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant Value)
{
	Check(PUT(m_T,s,Value,37,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant Value)
{
	Check(PUT(m_T,s,Value,38,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant Value)
{
	Check(PUT(m_T,s,Value,39,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant Value)
{
	Check(PUT(m_T,s,Value,40,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant Value)
{
	Check(PUT(m_T,s,Value,41,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant Value)
{
	Check(PUT(m_T,s,Value,42,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant Value)
{
	Check(PUT(m_T,s,Value,43,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant Value)
{
	Check(PUT(m_T,s,Value,44,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant Value)
{
	Check(PUT(m_T,s,Value,45,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant Value)
{
	Check(PUT(m_T,s,Value,46,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant Value)
{
	Check(PUT(m_T,s,Value,47,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant Value)
{
	Check(PUT(m_T,s,Value,48,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant Value)
{
	Check(PUT(m_T,s,Value,49,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant Value)
{
	Check(PUT(m_T,s,Value,50,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant Value)
{
	Check(PUT(m_T,s,Value,51,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant Value)
{
	Check(PUT(m_T,s,Value,52,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant Value)
{
	Check(PUT(m_T,s,Value,53,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant Value)
{
	Check(PUT(m_T,s,Value,54,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant Value)
{
	Check(PUT(m_T,s,Value,55,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant Value)
{
	Check(PUT(m_T,s,Value,56,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant Value)
{
	Check(PUT(m_T,s,Value,57,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant Value)
{
	Check(PUT(m_T,s,Value,58,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant Value)
{
	Check(PUT(m_T,s,Value,59,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant Value)
{
	Check(PUT(m_T,s,Value,60,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant Value)
{
	Check(PUT(m_T,s,Value,61,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant P61, CComVariant Value)
{
	Check(PUT(m_T,s,Value,62,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60,P61));
};

void put(const char *s, CComVariant P0, CComVariant P1, CComVariant P2, CComVariant P3, CComVariant P4, CComVariant P5, CComVariant P6, CComVariant P7, CComVariant P8, CComVariant P9, CComVariant P10, CComVariant P11, CComVariant P12, CComVariant P13, CComVariant P14, CComVariant P15, CComVariant P16, CComVariant P17, CComVariant P18, CComVariant P19, CComVariant P20, CComVariant P21, CComVariant P22, CComVariant P23, CComVariant P24, CComVariant P25, CComVariant P26, CComVariant P27, CComVariant P28, CComVariant P29, CComVariant P30, CComVariant P31, CComVariant P32, CComVariant P33, CComVariant P34, CComVariant P35, CComVariant P36, CComVariant P37, CComVariant P38, CComVariant P39, CComVariant P40, CComVariant P41, CComVariant P42, CComVariant P43, CComVariant P44, CComVariant P45, CComVariant P46, CComVariant P47, CComVariant P48, CComVariant P49, CComVariant P50, CComVariant P51, CComVariant P52, CComVariant P53, CComVariant P54, CComVariant P55, CComVariant P56, CComVariant P57, CComVariant P58, CComVariant P59, CComVariant P60, CComVariant P61, CComVariant P62, CComVariant Value)
{
	Check(PUT(m_T,s,Value,63,P0,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37,P38,P39,P40,P41,P42,P43,P44,P45,P46,P47,P48,P49,P50,P51,P52,P53,P54,P55,P56,P57,P58,P59,P60,P61,P62));
};

template <class T0,class V>
void put(const char *s, T0 P0, V Value)
{
	CComVariant p0=P0;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,1,p0));
};

template <class T0,class T1,class V>
void put(const char *s, T0 P0, T1 P1, V Value)
{
	CComVariant p0=P0,p1=P1;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,2,p0,p1));
};

template <class T0,class T1,class T2,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,3,p0,p1,p2));
};

template <class T0,class T1,class T2,class T3,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,4,p0,p1,p2,p3));
};

template <class T0,class T1,class T2,class T3,class T4,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,5,p0,p1,p2,p3,p4));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,6,p0,p1,p2,p3,p4,p5));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,7,p0,p1,p2,p3,p4,p5,p6));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,8,p0,p1,p2,p3,p4,p5,p6,p7));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,9,p0,p1,p2,p3,p4,p5,p6,p7,p8));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,10,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,11,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,12,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,13,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,14,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,15,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,16,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,17,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,18,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,19,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,20,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,21,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,22,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,23,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,24,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,25,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,26,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,27,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,28,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,29,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,30,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,31,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,32,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,33,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,34,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,35,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,36,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,37,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,38,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,39,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,40,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,41,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,42,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,43,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,44,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,45,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,46,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,47,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,48,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,49,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,50,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,51,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,52,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,53,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,54,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,55,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,56,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,57,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,58,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,59,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,60,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,61,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class T61,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, T61 P61, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60,p61=P61;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,62,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61));
};

template <class T0,class T1,class T2,class T3,class T4,class T5,class T6,class T7,class T8,class T9,class T10,class T11,class T12,class T13,class T14,class T15,class T16,class T17,class T18,class T19,class T20,class T21,class T22,class T23,class T24,class T25,class T26,class T27,class T28,class T29,class T30,class T31,class T32,class T33,class T34,class T35,class T36,class T37,class T38,class T39,class T40,class T41,class T42,class T43,class T44,class T45,class T46,class T47,class T48,class T49,class T50,class T51,class T52,class T53,class T54,class T55,class T56,class T57,class T58,class T59,class T60,class T61,class T62,class V>
void put(const char *s, T0 P0, T1 P1, T2 P2, T3 P3, T4 P4, T5 P5, T6 P6, T7 P7, T8 P8, T9 P9, T10 P10, T11 P11, T12 P12, T13 P13, T14 P14, T15 P15, T16 P16, T17 P17, T18 P18, T19 P19, T20 P20, T21 P21, T22 P22, T23 P23, T24 P24, T25 P25, T26 P26, T27 P27, T28 P28, T29 P29, T30 P30, T31 P31, T32 P32, T33 P33, T34 P34, T35 P35, T36 P36, T37 P37, T38 P38, T39 P39, T40 P40, T41 P41, T42 P42, T43 P43, T44 P44, T45 P45, T46 P46, T47 P47, T48 P48, T49 P49, T50 P50, T51 P51, T52 P52, T53 P53, T54 P54, T55 P55, T56 P56, T57 P57, T58 P58, T59 P59, T60 P60, T61 P61, T62 P62, V Value)
{
	CComVariant p0=P0,p1=P1,p2=P2,p3=P3,p4=P4,p5=P5,p6=P6,p7=P7,p8=P8,p9=P9,p10=P10,p11=P11,p12=P12,p13=P13,p14=P14,p15=P15,p16=P16,p17=P17,p18=P18,p19=P19,p20=P20,p21=P21,p22=P22,p23=P23,p24=P24,p25=P25,p26=P26,p27=P27,p28=P28,p29=P29,p30=P30,p31=P31,p32=P32,p33=P33,p34=P34,p35=P35,p36=P36,p37=P37,p38=P38,p39=P39,p40=P40,p41=P41,p42=P42,p43=P43,p44=P44,p45=P45,p46=P46,p47=P47,p48=P48,p49=P49,p50=P50,p51=P51,p52=P52,p53=P53,p54=P54,p55=P55,p56=P56,p57=P57,p58=P58,p59=P59,p60=P60,p61=P61,p62=P62;
	CComVariant v = Value;
	Check(PUT(m_T,s,v,63,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61,p62));
};

