//WindowSystemObject (WSO) Java Support File
//Copyright (C) Veretennikov A. B. 2004

package WSO;
public interface Constants
{
//WindowSystemObject (WSO) IDL file
//Copyright (C) Veretennikov A. B. 2004

//Standard Windows Constants

//Form Styles (CreateForm)
public static final int WS_CAPTION = 0x00C00000;
public static final int WS_SYSMENU = 0x00080000;
public static final int WS_THICKFRAME = 0x00040000;
public static final int WS_MINIMIZEBOX = 0x00020000;
public static final int WS_MAXIMIZEBOX = 0x00010000;
public static final int WS_SIZEBOX = 0x00040000;
public static final int WS_CONTROLBOX = 0x00080000;

//Edit Styles (Frame.CreateEdit)
public static final int ES_UPPERCASE = 0x00000008;
public static final int ES_LOWERCASE = 0x00000010;
//Edit Styles (Frame.CreateEdit and Frame.CreateRichEdit)
public static final int ES_MULTILINE = 0x00000004;
public static final int ES_PASSWORD = 0x00000020;
public static final int ES_NOHIDESEL = 0x00000100;
public static final int ES_READONLY = 0x00000800;

//ListBox Styles (Frame.CreateListBox)
public static final int LBS_SORT = 0x00000002;
public static final int LBS_MULTIPLESEL = 0x00000008;
public static final int LBS_NOINTEGRALHEIGHT = 0x00000100;
public static final int LBS_EXTENDEDSEL = 0x00000800;

//ComboBox Styles (Frame.CreateComboBox)
public static final int CBS_SIMPLE = 1;
public static final int CBS_DROPDOWN = 2;
public static final int CBS_DROPDOWNLIST = 3;
public static final int CBS_SORT = 0x00000100;
public static final int CBS_NOINTEGRALHEIGHT = 0x00000400;
public static final int CBS_UPPERCASE = 0x00002000;
public static final int CBS_LOWERCASE = 0x00004000;

//Progress Bar Styles (Frame.CreateProgressBar)
public static final int PBS_SMOOTH = 0x00000001;
public static final int PBS_VERTICAL = 0x00000004;

//Scroll Bar Styles (Frame.CreateScrollBar)
public static final int SBS_HORZ = 0x00000000;
public static final int SBS_VERT = 0x00000001;

//TabControl Styles (Frame.CreateTabControl)
public static final int TCS_FLATBUTTONS = 0x00000008;
public static final int TCS_HOTTRACK = 0x00000040;
public static final int TCS_TABS = 0x00000000;
public static final int TCS_BUTTONS = 0x00000100;
public static final int TCS_SINGLELINE = 0x00000000;
public static final int TCS_MULTILINE = 0x00000200;
public static final int TCS_RAGGEDRIGHT = 0x00000800;

//Header Styles (Frame.CreateHeader)
public static final int HDS_BUTTONS = 0x00000002;

//List View Styles (Frame.CreateListView)
public static final int LVS_ICON = 0x00000000;
public static final int LVS_REPORT = 0x00000001;
public static final int LVS_SMALLICON = 0x00000002;
public static final int LVS_LIST = 0x00000003;
public static final int LVS_SINGLESEL = 0x00000004;
public static final int LVS_SHOWSELALWAYS = 0x00000008;
public static final int LVS_NOLABELWRAP = 0x00000080;
public static final int LVS_EDITLABELS = 0x00000200;
public static final int LVS_OWNERDATA = 0x00001000;

//TreeView Styles (Frame.CreateTreeView)
public static final int TVS_HASBUTTONS = 0x00000001;
public static final int TVS_HASLINES = 0x00000002;
public static final int TVS_LINESATROOT = 0x00000004;
public static final int TVS_EDITLABELS = 0x00000008;
public static final int TVS_SHOWSELALWAYS = 0x00000020;
public static final int TVS_CHECKBOXES = 0x00000100;
public static final int TVS_TRACKSELECT = 0x00000200;
public static final int TVS_SINGLEEXPAND = 0x00000400;
public static final int TVS_FULLROWSELECT = 0x00001000;

//UpDown Styles (Frame.CreateUpDown)
public static final int UDS_HORZ = 0x00000040;
public static final int UDS_HOTTRACK = 0x00000100;

//TrackBar Styles (Frame.CreateTrackBar)
public static final int TBS_VERT = 0x00000002;
public static final int TBS_HORZ = 0x00000000;
public static final int TBS_TOP = 0x00000004;
public static final int TBS_BOTTOM = 0x00000000;
public static final int TBS_LEFT = 0x00000004;
public static final int TBS_RIGHT = 0x00000000;
public static final int TBS_BOTH = 0x00000008;
public static final int TBS_NOTICKS = 0x00000010;
public static final int TBS_ENABLESELRANGE = 0x00000020;

//Animate Styles (Frame.CreateAnimate)
public static final int ACS_CENTER = 0x00000001;
public static final int ACS_TRANSPARENT = 0x00000002;

//HotKey Rules Flags
public static final int HKCOMB_NONE = 0x00000001;
public static final int HKCOMB_S = 0x00000002;
public static final int HKCOMB_C = 0x00000004;
public static final int HKCOMB_A = 0x00000008;
public static final int HKCOMB_SC = 0x00000010;
public static final int HKCOMB_SA = 0x00000020;
public static final int HKCOMB_CA = 0x00000040;
public static final int HKCOMB_SCA = 0x00000080;

//DateTimePicker Styles (Frame.CreateDateTimePicker)
public static final int DTS_UPDOWN = 0x00000001;
public static final int DTS_SHOWNONE = 0x00000002;
public static final int DTS_RIGHTALIGN = 0x00000020;

//DateTimePicker Format Styles (Frame.CreateDateTimePicker and DateTimePicker.Style)
public static final int DTS_SHORTDATEFORMAT = 0x00000000;
public static final int DTS_LONGDATEFORMAT = 0x00000004;
public static final int DTS_TIMEFORMAT = 0x00000009;

//Calendar Styles (Frame.CreateCalendar)
public static final int MCS_MULTISELECT = 0x00000002;
public static final int MCS_WEEKNUMBERS = 0x00000004;
public static final int MCS_NOTODAYCIRCLE = 0x00000008;
public static final int MCS_NOTODAY = 0x00000010;

//ReBar Styles (Frame.CreateReBar)

//IE 4
public static final int RBS_AUTOSIZE = 0x00002000;
public static final int RBS_VERTICALGRIPPER = 0x00004000;
public static final int RBS_DBLCLKTOGGLE = 0x00008000;
//IE 4
public static final int RBS_VARHEIGHT = 0x00000200;
public static final int RBS_BANDBORDERS = 0x00000400;
public static final int RBS_FIXEDORDER = 0x00000800;
public static final int CCS_VERT = 0x00000080;

//Form MessageBox Flags (See also MessageBox function in Microsoft Platform SDK)
public static final int MB_OK = 0x00000000;
public static final int MB_OKCANCEL = 0x00000001;
public static final int MB_ABORTRETRYIGNORE = 0x00000002;
public static final int MB_YESNOCANCEL = 0x00000003;
public static final int MB_YESNO = 0x00000004;
public static final int MB_RETRYCANCEL = 0x00000005;

//Windows 2000/XP Only
public static final int MB_CANCELTRYCONTINUE = 0x00000006;
//Windows 2000/XP end

public static final int MB_ICONHAND = 0x00000010;
public static final int MB_ICONQUESTION = 0x00000020;
public static final int MB_ICONEXCLAMATION = 0x00000030;
public static final int MB_ICONASTERISK = 0x00000040;
public static final int MB_USERICON = 0x00000080;
public static final int MB_ICONWARNING = 0x00000030;
public static final int MB_ICONERROR = 0x00000010;
public static final int MB_ICONINFORMATION = 0x00000040;
public static final int MB_ICONSTOP = 0x00000010;

public static final int MB_DEFBUTTON1 = 0x00000000;
public static final int MB_DEFBUTTON2 = 0x00000100;
public static final int MB_DEFBUTTON3 = 0x00000200;
public static final int MB_DEFBUTTON4 = 0x00000300;

public static final int MB_APPLMODAL = 0x00000000;
public static final int MB_SYSTEMMODAL = 0x00001000;
public static final int MB_TASKMODAL = 0x00002000;
//Windows 95/98/Me, Windows NT 4.0 and later
public static final int MB_HELP = 0x00004000;
//Windows 95/98/Me, Windows NT 4.0 end

public static final int MB_NOFOCUS = 0x00008000;
public static final int MB_SETFOREGROUND = 0x00010000;
public static final int MB_DEFAULT_DESKTOP_ONLY = 0x00020000;

public static final int MB_TOPMOST = 0x00040000;
public static final int MB_RIGHT = 0x00080000;
public static final int MB_RTLREADING = 0x00100000;

//MessageBox Results
public static final int IDOK = 1;
public static final int IDCANCEL = 2;
public static final int IDABORT = 3;
public static final int IDRETRY = 4;
public static final int IDIGNORE = 5;
public static final int IDYES = 6;
public static final int IDNO = 7;
//Windows 95/98/Me, Windows NT 4.0 and later
public static final int IDHELP = 9;
//Windows 2000/XP Only
public static final int IDTRYAGAIN = 10;
public static final int IDCONTINUE = 11;

//Pen Styles
public static final int PS_SOLID = 0;
public static final int PS_DASH = 1;
public static final int PS_DOT = 2;
public static final int PS_DASHDOT = 3;
public static final int PS_DASHDOTDOT = 4;
public static final int PS_NULL = 5;
public static final int PS_INSIDEFRAME = 6;

//Open and Save Dialog Flags
public static final int OFN_READONLY = 0x00000001;
public static final int OFN_OVERWRITEPROMPT = 0x00000002;
public static final int OFN_HIDEREADONLY = 0x00000004;
public static final int OFN_NOCHANGEDIR = 0x00000008;
public static final int OFN_SHOWHELP = 0x00000010;
public static final int OFN_NOVALIDATE = 0x00000100;
public static final int OFN_ALLOWMULTISELECT = 0x00000200;
public static final int OFN_EXTENSIONDIFFERENT = 0x00000400;
public static final int OFN_PATHMUSTEXIST = 0x00000800;
public static final int OFN_FILEMUSTEXIST = 0x00001000;
public static final int OFN_CREATEPROMPT = 0x00002000;
public static final int OFN_SHAREAWARE = 0x00004000;
public static final int OFN_NOREADONLYRETURN = 0x00008000;
public static final int OFN_NOTESTFILECREATE = 0x00010000;
public static final int OFN_NONETWORKBUTTON = 0x00020000;
public static final int OFN_NOLONGNAMES = 0x00040000;

public static final int OFN_NODEREFERENCELINKS = 0x00100000;
public static final int OFN_LONGNAMES = 0x00200000;
public static final int OFN_ENABLEINCLUDENOTIFY = 0x00400000;
public static final int OFN_ENABLESIZING = 0x00800000;

//Windows 2000/XP
public static final int OFN_DONTADDTORECENT = 0x02000000;
public static final int OFN_FORCESHOWHIDDEN = 0x10000000;

//Print and PrinterSetup Dialog Flags
public static final int PD_ALLPAGES = 0x00000000;
public static final int PD_SELECTION = 0x00000001;
public static final int PD_PAGENUMS = 0x00000002;
public static final int PD_NOSELECTION = 0x00000004;
public static final int PD_NOPAGENUMS = 0x00000008;
public static final int PD_COLLATE = 0x00000010;
public static final int PD_PRINTTOFILE = 0x00000020;
public static final int PD_PRINTSETUP = 0x00000040;
public static final int PD_NOWARNING = 0x00000080;
public static final int PD_RETURNDC = 0x00000100;
public static final int PD_RETURNIC = 0x00000200;
public static final int PD_RETURNDEFAULT = 0x00000400;
public static final int PD_SHOWHELP = 0x00000800;
public static final int PD_USEDEVMODECOPIES = 0x00040000;
public static final int PD_USEDEVMODECOPIESANDCOLLATE = 0x00040000;
public static final int PD_DISABLEPRINTTOFILE = 0x00080000;
public static final int PD_HIDEPRINTTOFILE = 0x00100000;
public static final int PD_NONETWORKBUTTON = 0x00200000;

//Windows 2000/XP
public static final int PD_CURRENTPAGE = 0x00400000;
public static final int PD_NOCURRENTPAGE = 0x00800000;
public static final int PD_EXCLUSIONFLAGS = 0x01000000;
public static final int PD_USELARGETEMPLATE = 0x10000000;

//PageSetup Dialog flags

public static final int PSD_DEFAULTMINMARGINS = 0x00000000;
public static final int PSD_INWININIINTLMEASURE = 0x00000000;
public static final int PSD_MINMARGINS = 0x00000001;
public static final int PSD_MARGINS = 0x00000002;
public static final int PSD_INTHOUSANDTHSOFINCHES = 0x00000004;
public static final int PSD_INHUNDREDTHSOFMILLIMETERS = 0x00000008;
public static final int PSD_DISABLEMARGINS = 0x00000010;
public static final int PSD_DISABLEPRINTER = 0x00000020;
public static final int PSD_NOWARNING = 0x00000080;
public static final int PSD_DISABLEORIENTATION = 0x00000100;
public static final int PSD_RETURNDEFAULT = 0x00000400;
public static final int PSD_DISABLEPAPER = 0x00000200;
public static final int PSD_SHOWHELP = 0x00000800;
public static final int PSD_NONETWORKBUTTON = 0x00200000;

//Color Dialog Flags
public static final int CC_FULLOPEN = 0x00000002;
public static final int CC_PREVENTFULLOPEN = 0x00000004;
public static final int CC_SHOWHELP = 0x00000008;
public static final int CC_SOLIDCOLOR = 0x00000080;
public static final int CC_ANYCOLOR = 0x00000100;

//SelectFolder Dialog Flags
public static final int BIF_RETURNONLYFSDIRS = 0x00000001;
public static final int BIF_DONTGOBELOWDOMAIN = 0x00000002;
public static final int BIF_STATUSTEXT = 0x00000004;
public static final int BIF_RETURNFSANCESTORS = 0x00000008;
public static final int BIF_EDITBOX = 0x00000010;
public static final int BIF_VALIDATE = 0x00000020;
public static final int BIF_NEWDIALOGSTYLE = 0x00000040;
public static final int BIF_USENEWUI = 0x00000050;
public static final int BIF_BROWSEINCLUDEURLS = 0x00000080;
public static final int BIF_UAHINT = 0x00000100;
public static final int BIF_NONEWFOLDERBUTTON = 0x00000200;
public static final int BIF_NOTRANSLATETARGETS = 0x00000400;
public static final int BIF_BROWSEFORCOMPUTER = 0x00001000;
public static final int BIF_BROWSEFORPRINTER = 0x00002000;
public static final int BIF_BROWSEINCLUDEFILES = 0x00004000;
public static final int BIF_SHAREABLE = 0x00008000;

//Font Dialog Flags
public static final int CF_SCREENFONTS = 0x00000001;
public static final int CF_PRINTERFONTS = 0x00000002;
public static final int CF_BOTH = 0x00000003;
public static final int CF_SHOWHELP = 0x00000004;
public static final int CF_USESTYLE = 0x00000080;
public static final int CF_EFFECTS = 0x00000100;
public static final int CF_APPLY = 0x00000200;
public static final int CF_ANSIONLY = 0x00000400;
public static final int CF_SCRIPTSONLY = 0x00000400;
public static final int CF_NOVECTORFONTS = 0x00000800;
public static final int CF_NOOEMFONTS = 0x00000800;
public static final int CF_NOSIMULATIONS = 0x00001000;
public static final int CF_FIXEDPITCHONLY = 0x00004000;
public static final int CF_WYSIWYG = 0x00008000;
public static final int CF_FORCEFONTEXIST = 0x00010000;
public static final int CF_SCALABLEONLY = 0x00020000;
public static final int CF_TTONLY = 0x00040000;
public static final int CF_NOFACESEL = 0x00080000;
public static final int CF_NOSTYLESEL = 0x00100000;
public static final int CF_NOSIZESEL = 0x00200000;
public static final int CF_SELECTSCRIPT = 0x00400000;
public static final int CF_NOSCRIPTSEL = 0x00800000;
public static final int CF_NOVERTFONTS = 0x01000000;

//Raster operation codes (Image.CopyMode)
public static final int SRCCOPY = 0x00CC0020;
public static final int SRCPAINT = 0x00EE0086;
public static final int SRCAND = 0x008800C6;
public static final int SRCINVERT = 0x00660046;
public static final int SRCERASE = 0x00440328;
public static final int NOTSRCCOPY = 0x00330008;
public static final int NOTSRCERASE = 0x001100A6;
public static final int MERGECOPY = 0x00C000CA;
public static final int MERGEPAINT = 0x00BB0226;
public static final int PATCOPY = 0x00F00021;
public static final int PATPAINT = 0x00FB0A09;
public static final int PATINVERT = 0x005A0049;
public static final int DSTINVERT = 0x00550009;
public static final int BLACKNESS = 0x00000042;
public static final int WHITENESS = 0x00FF0062;

//Font Charset
public static final int ANSI_CHARSET = 0;
public static final int DEFAULT_CHARSET = 1;
public static final int SYMBOL_CHARSET = 2;
public static final int SHIFTJIS_CHARSET = 128;
public static final int HANGEUL_CHARSET = 129;
public static final int HANGUL_CHARSET = 129;
public static final int GB2312_CHARSET = 134;
public static final int CHINESEBIG5_CHARSET = 136;
public static final int OEM_CHARSET = 255;
public static final int JOHAB_CHARSET = 130;
public static final int HEBREW_CHARSET = 177;
public static final int ARABIC_CHARSET = 178;
public static final int GREEK_CHARSET = 161;
public static final int TURKISH_CHARSET = 162;
public static final int VIETNAMESE_CHARSET = 163;
public static final int THAI_CHARSET = 222;
public static final int EASTEUROPE_CHARSET = 238;
public static final int RUSSIAN_CHARSET = 204;
public static final int MAC_CHARSET = 77;
public static final int BALTIC_CHARSET = 186;

//Font Weights
public static final int FW_DONTCARE = 0;
public static final int FW_THIN = 100;
public static final int FW_EXTRALIGHT = 200;
public static final int FW_LIGHT = 300;
public static final int FW_NORMAL = 400;
public static final int FW_MEDIUM = 500;
public static final int FW_SEMIBOLD = 600;
public static final int FW_BOLD = 700;
public static final int FW_EXTRABOLD = 800;
public static final int FW_HEAVY = 900;

public static final int FW_ULTRALIGHT = 200;
public static final int FW_REGULAR = 400;
public static final int FW_DEMIBOLD = 600;
public static final int FW_ULTRABOLD = 800;
public static final int FW_BLACK = 900;

//Standard Virtual Keys
public static final int VK_BACK = 0x00000008;
public static final int VK_TAB = 0x00000009;
public static final int VK_CLEAR = 0x0000000C;
public static final int VK_RETURN = 0x0000000D;
public static final int VK_SHIFT = 0x00000010;
public static final int VK_CONTROL = 0x00000011;
public static final int VK_MENU = 0x00000012;
public static final int VK_PAUSE = 0x00000013;
public static final int VK_CAPITAL = 0x00000014;
public static final int VK_KANA = 0x00000015;
public static final int VK_HANGEUL = 0x00000015;
public static final int VK_HANGUL = 0x00000015;
public static final int VK_JUNJA = 0x00000017;
public static final int VK_FINAL = 0x00000018;
public static final int VK_HANJA = 0x00000019;
public static final int VK_KANJI = 0x00000019;
public static final int VK_ESCAPE = 0x0000001B;
public static final int VK_CONVERT = 0x0000001C;
public static final int VK_NONCONVERT = 0x0000001D;
public static final int VK_ACCEPT = 0x0000001E;
public static final int VK_MODECHANGE = 0x0000001F;
public static final int VK_SPACE = 0x00000020;
public static final int VK_PRIOR = 0x00000021;
public static final int VK_NEXT = 0x00000022;
public static final int VK_END = 0x00000023;
public static final int VK_HOME = 0x00000024;
public static final int VK_LEFT = 0x00000025;
public static final int VK_UP = 0x00000026;
public static final int VK_RIGHT = 0x00000027;
public static final int VK_DOWN = 0x00000028;
public static final int VK_SELECT = 0x00000029;
public static final int VK_PRINT = 0x0000002A;
public static final int VK_EXECUTE = 0x0000002B;
public static final int VK_SNAPSHOT = 0x0000002C;
public static final int VK_INSERT = 0x0000002D;
public static final int VK_DELETE = 0x0000002E;
public static final int VK_HELP = 0x0000002F;



public static final int VK_LWIN = 0x0000005B;
public static final int VK_RWIN = 0x0000005C;
public static final int VK_APPS = 0x0000005D;
public static final int VK_SLEEP = 0x0000005F;
public static final int VK_NUMPAD0 = 0x00000060;
public static final int VK_NUMPAD1 = 0x00000061;
public static final int VK_NUMPAD2 = 0x00000062;
public static final int VK_NUMPAD3 = 0x00000063;
public static final int VK_NUMPAD4 = 0x00000064;
public static final int VK_NUMPAD5 = 0x00000065;
public static final int VK_NUMPAD6 = 0x00000066;
public static final int VK_NUMPAD7 = 0x00000067;
public static final int VK_NUMPAD8 = 0x00000068;
public static final int VK_NUMPAD9 = 0x00000069;
public static final int VK_MULTIPLY = 0x0000006A;
public static final int VK_ADD = 0x0000006B;
public static final int VK_SEPARATOR = 0x0000006C;
public static final int VK_SUBTRACT = 0x0000006D;
public static final int VK_DECIMAL = 0x0000006E;
public static final int VK_DIVIDE = 0x0000006F;
public static final int VK_F1 = 0x00000070;
public static final int VK_F2 = 0x00000071;
public static final int VK_F3 = 0x00000072;
public static final int VK_F4 = 0x00000073;
public static final int VK_F5 = 0x00000074;
public static final int VK_F6 = 0x00000075;
public static final int VK_F7 = 0x00000076;
public static final int VK_F8 = 0x00000077;
public static final int VK_F9 = 0x00000078;
public static final int VK_F10 = 0x00000079;
public static final int VK_F11 = 0x0000007A;
public static final int VK_F12 = 0x0000007B;
public static final int VK_F13 = 0x0000007C;
public static final int VK_F14 = 0x0000007D;
public static final int VK_F15 = 0x0000007E;
public static final int VK_F16 = 0x0000007F;
public static final int VK_F17 = 0x00000080;
public static final int VK_F18 = 0x00000081;
public static final int VK_F19 = 0x00000082;
public static final int VK_F20 = 0x00000083;
public static final int VK_F21 = 0x00000084;
public static final int VK_F22 = 0x00000085;
public static final int VK_F23 = 0x00000086;
public static final int VK_F24 = 0x00000087;
public static final int VK_NUMLOCK = 0x00000090;
public static final int VK_SCROLL = 0x00000091;

public static final int VK_OEM_NEC_EQUAL = 0x00000092;


public static final int VK_OEM_FJ_JISHO = 0x00000092;
public static final int VK_OEM_FJ_MASSHOU = 0x00000093;
public static final int VK_OEM_FJ_TOUROKU = 0x00000094;
public static final int VK_OEM_FJ_LOYA = 0x00000095;
public static final int VK_OEM_FJ_ROYA = 0x00000096;

public static final int VK_LSHIFT = 0x000000A0;
public static final int VK_RSHIFT = 0x000000A1;
public static final int VK_LCONTROL = 0x000000A2;
public static final int VK_RCONTROL = 0x000000A3;
public static final int VK_LMENU = 0x000000A4;
public static final int VK_RMENU = 0x000000A5;

//Windows 2000/XP and Later
public static final int VK_BROWSER_BACK = 0x000000A6;
public static final int VK_BROWSER_FORWARD = 0x000000A7;
public static final int VK_BROWSER_REFRESH = 0x000000A8;
public static final int VK_BROWSER_STOP = 0x000000A9;
public static final int VK_BROWSER_SEARCH = 0x000000AA;
public static final int VK_BROWSER_FAVORITES = 0x000000AB;
public static final int VK_BROWSER_HOME = 0x000000AC;

public static final int VK_VOLUME_MUTE = 0x000000AD;
public static final int VK_VOLUME_DOWN = 0x000000AE;
public static final int VK_VOLUME_UP = 0x000000AF;
public static final int VK_MEDIA_NEXT_TRACK = 0x000000B0;
public static final int VK_MEDIA_PREV_TRACK = 0x000000B1;
public static final int VK_MEDIA_STOP = 0x000000B2;
public static final int VK_MEDIA_PLAY_PAUSE = 0x000000B3;
public static final int VK_LAUNCH_MAIL = 0x000000B4;
public static final int VK_LAUNCH_MEDIA_SELECT = 0x000000B5;
public static final int VK_LAUNCH_APP1 = 0x000000B6;
public static final int VK_LAUNCH_APP2 = 0x000000B7;
//End Windows 2000/XP and Later

public static final int VK_OEM_1 = 0x000000BA;
public static final int VK_OEM_PLUS = 0x000000BB;
public static final int VK_OEM_COMMA = 0x000000BC;
public static final int VK_OEM_MINUS = 0x000000BD;
public static final int VK_OEM_PERIOD = 0x000000BE;
public static final int VK_OEM_2 = 0x000000BF;
public static final int VK_OEM_3 = 0x000000C0;
public static final int VK_OEM_4 = 0x000000DB;
public static final int VK_OEM_5 = 0x000000DC;
public static final int VK_OEM_6 = 0x000000DD;
public static final int VK_OEM_7 = 0x000000DE;
public static final int VK_OEM_8 = 0x000000DF;


public static final int VK_OEM_AX = 0x000000E1;
public static final int VK_OEM_102 = 0x000000E2;
public static final int VK_ICO_HELP = 0x000000E3;
public static final int VK_ICO_00 = 0x000000E4;

public static final int VK_PROCESSKEY = 0x000000E5;
public static final int VK_ICO_CLEAR = 0x000000E6;


// Windows 2000/XP and Later
public static final int VK_PACKET = 0x000000E7;
//End Windows 2000/XP and Later

public static final int VK_OEM_RESET = 0x000000E9;
public static final int VK_OEM_JUMP = 0x000000EA;
public static final int VK_OEM_PA1 = 0x000000EB;
public static final int VK_OEM_PA2 = 0x000000EC;
public static final int VK_OEM_PA3 = 0x000000ED;
public static final int VK_OEM_WSCTRL = 0x000000EE;
public static final int VK_OEM_CUSEL = 0x000000EF;
public static final int VK_OEM_ATTN = 0x000000F0;
public static final int VK_OEM_FINISH = 0x000000F1;
public static final int VK_OEM_COPY = 0x000000F2;
public static final int VK_OEM_AUTO = 0x000000F3;
public static final int VK_OEM_ENLW = 0x000000F4;
public static final int VK_OEM_BACKTAB = 0x000000F5;

public static final int VK_ATTN = 0x000000F6;
public static final int VK_CRSEL = 0x000000F7;
public static final int VK_EXSEL = 0x000000F8;
public static final int VK_EREOF = 0x000000F9;
public static final int VK_PLAY = 0x000000FA;
public static final int VK_ZOOM = 0x000000FB;
public static final int VK_NONAME = 0x000000FC;
public static final int VK_PA1 = 0x000000FD;
public static final int VK_OEM_CLEAR = 0x000000FE;

//CheckBox States
public static final int BST_UNCHECKED = 0x00000000;
public static final int BST_CHECKED = 0x00000001;
public static final int BST_INDETERMINATE = 0x00000002;

//Mouse Event Flags
public static final int MK_LBUTTON = 0x00000001;
public static final int MK_RBUTTON = 0x00000002;
public static final int MK_SHIFT = 0x00000004;
public static final int MK_CONTROL = 0x00000008;
public static final int MK_MBUTTON = 0x00000010;
//Windows 2000/XP
public static final int MK_XBUTTON1 = 0x00000020;
public static final int MK_XBUTTON2 = 0x00000040;

//System Colors
public static final int COLOR_SCROLLBAR = 0;
public static final int COLOR_BACKGROUND = 1;
public static final int COLOR_ACTIVECAPTION = 2;
public static final int COLOR_INACTIVECAPTION = 3;
public static final int COLOR_MENU = 4;
public static final int COLOR_WINDOW = 5;
public static final int COLOR_WINDOWFRAME = 6;
public static final int COLOR_MENUTEXT = 7;
public static final int COLOR_WINDOWTEXT = 8;
public static final int COLOR_CAPTIONTEXT = 9;
public static final int COLOR_ACTIVEBORDER = 10;
public static final int COLOR_INACTIVEBORDER = 11;
public static final int COLOR_APPWORKSPACE = 12;
public static final int COLOR_HIGHLIGHT = 13;
public static final int COLOR_HIGHLIGHTTEXT = 14;
public static final int COLOR_BTNFACE = 15;
public static final int COLOR_BTNSHADOW = 16;
public static final int COLOR_GRAYTEXT = 17;
public static final int COLOR_BTNTEXT = 18;
public static final int COLOR_INACTIVECAPTIONTEXT = 19;
public static final int COLOR_BTNHIGHLIGHT = 20;

public static final int COLOR_3DDKSHADOW = 21;
public static final int COLOR_3DLIGHT = 22;
public static final int COLOR_INFOTEXT = 23;
public static final int COLOR_INFOBK = 24;

public static final int COLOR_DESKTOP = 1;
public static final int COLOR_3DFACE = 15;
public static final int COLOR_3DSHADOW = 16;
public static final int COLOR_3DHIGHLIGHT = 20;
public static final int COLOR_3DHILIGHT = 20;
public static final int COLOR_BTNHILIGHT = 20;

//Windows 98/Me, Windows 2000/XP
public static final int COLOR_HOTLIGHT = 26;
public static final int COLOR_GRADIENTACTIVECAPTION = 27;
public static final int COLOR_GRADIENTINACTIVECAPTION = 28;

//Windows XP
public static final int COLOR_MENUHILIGHT = 29;
public static final int COLOR_MENUBAR = 30;

//Find and Replace Dialog Flags
public static final int FR_DOWN = 0x00000001;
public static final int FR_WHOLEWORD = 0x00000002;
public static final int FR_MATCHCASE = 0x00000004;
public static final int FR_SHOWHELP = 0x00000080;
public static final int FR_NOUPDOWN = 0x00000400;
public static final int FR_NOMATCHCASE = 0x00000800;
public static final int FR_NOWHOLEWORD = 0x00001000;
public static final int FR_HIDEUPDOWN = 0x00004000;
public static final int FR_HIDEMATCHCASE = 0x00008000;
public static final int FR_HIDEWHOLEWORD = 0x00010000;

//RichEdit Load and Save Flags
public static final int SF_TEXT = 0x00000001;
public static final int SF_RTF = 0x00000002;
public static final int SF_RTFNOOBJS = 0x00000003;
public static final int SF_TEXTIZED = 0x00000004;
public static final int SF_UNICODE = 0x00000010;
public static final int SF_USECODEPAGE = 0x00000020;
public static final int SFF_SELECTION = 0x00008000;
public static final int SFF_PLAINRTF = 0x00004000;

//Frame.TextRect Flags
public static final int DT_TOP = 0x00000000;
public static final int DT_LEFT = 0x00000000;
public static final int DT_CENTER = 0x00000001;
public static final int DT_RIGHT = 0x00000002;
public static final int DT_VCENTER = 0x00000004;
public static final int DT_BOTTOM = 0x00000008;
public static final int DT_WORDBREAK = 0x00000010;
public static final int DT_SINGLELINE = 0x00000020;
public static final int DT_EXPANDTABS = 0x00000040;
public static final int DT_TABSTOP = 0x00000080;
public static final int DT_NOCLIP = 0x00000100;
public static final int DT_EXTERNALLEADING = 0x00000200;
public static final int DT_CALCRECT = 0x00000400;
public static final int DT_NOPREFIX = 0x00000800;
public static final int DT_INTERNAL = 0x00001000;

public static final int DT_EDITCONTROL = 0x00002000;
public static final int DT_PATH_ELLIPSIS = 0x00004000;
public static final int DT_END_ELLIPSIS = 0x00008000;
public static final int DT_MODIFYSTRING = 0x00010000;
public static final int DT_RTLREADING = 0x00020000;
public static final int DT_WORD_ELLIPSIS = 0x00040000;
//Windows 98/Me, Windows 2000/XP
public static final int DT_NOFULLWIDTHCHARBREAK = 0x00080000;
//Windows 2000/XP
public static final int DT_HIDEPREFIX = 0x00100000;
public static final int DT_PREFIXONLY = 0x00200000;

//Polygon fill mode
public static final int ALTERNATE = 1;
public static final int WINDING = 2;

//Combine Regions Modes
public static final int RGN_AND = 1;
public static final int RGN_OR = 2;
public static final int RGN_XOR = 3;
public static final int RGN_DIFF = 4;
public static final int RGN_COPY = 5;

//OnHitTest codes
public static final int HTERROR = -2;
public static final int HTTRANSPARENT = -1;
public static final int HTNOWHERE = 0;
public static final int HTCLIENT = 1;
public static final int HTCAPTION = 2;
public static final int HTSYSMENU = 3;
public static final int HTGROWBOX = 4;
public static final int HTSIZE = 4;
public static final int HTMENU = 5;
public static final int HTHSCROLL = 6;
public static final int HTVSCROLL = 7;
public static final int HTMINBUTTON = 8;
public static final int HTMAXBUTTON = 9;
public static final int HTLEFT = 10;
public static final int HTRIGHT = 11;
public static final int HTTOP = 12;
public static final int HTTOPLEFT = 13;
public static final int HTTOPRIGHT = 14;
public static final int HTBOTTOM = 15;
public static final int HTBOTTOMLEFT = 16;
public static final int HTBOTTOMRIGHT = 17;
public static final int HTBORDER = 18;
public static final int HTREDUCE = 8;
public static final int HTZOOM = 9;
public static final int HTSIZEFIRST = 10;
public static final int HTSIZELAST = 17;

public static final int HTOBJECT = 19;
public static final int HTCLOSE = 20;
public static final int HTHELP = 21;


public static final int IDC_ARROW = 32512;
public static final int IDC_IBEAM = 32513;
public static final int IDC_WAIT = 32514;
public static final int IDC_CROSS = 32515;
public static final int IDC_UPARROW = 32516;
public static final int IDC_SIZE = 32640;
public static final int IDC_ICON = 32641;
public static final int IDC_SIZENWSE = 32642;
public static final int IDC_SIZENESW = 32643;
public static final int IDC_SIZEWE = 32644;
public static final int IDC_SIZENS = 32645;
public static final int IDC_SIZEALL = 32646;
public static final int IDC_NO = 32648;

//Windows 98/Me, Windows 2000/XP
public static final int IDC_HAND = 32649;

public static final int IDC_APPSTARTING = 32650;
public static final int IDC_HELP = 32651;



//Constants

//COLOR_NONE Constant
public static final int COLOR_NONE = 0xFFFFFFFF;

//POSITION_NONE Constant
public static final int POSITION_NONE = 0x0F000000;

//Keyboard Flags (OnKeyDown, OnKeyUp)
public static final int KB_SHIFT = 0x10000000;
public static final int KB_CTRL = 0x20000000;
public static final int KB_ALT = 0x40000000;

public static final int KB_LSHIFT = 0x01000000;
public static final int KB_LCTRL = 0x02000000;
public static final int KB_LALT = 0x04000000;

public static final int KB_RSHIFT = 0x00100000;
public static final int KB_RCTRL = 0x00200000;
public static final int KB_RALT = 0x00400000;

//Align
public static final int AL_NONE = 0;
public static final int AL_LEFT = 1;
public static final int AL_RIGHT = 2;
public static final int AL_CENTER = 3;
public static final int AL_TOP = 4;
public static final int AL_BOTTOM = 5;
public static final int AL_TOPLEFT = 6;
public static final int AL_TOPRIGHT = 7;
public static final int AL_BOTTOMLEFT = 8;
public static final int AL_BOTTOMRIGHT = 9;
public static final int AL_CLIENT = 10;
public static final int AL_AT_LEFT = 11;
public static final int AL_AT_TOP = 12;
public static final int AL_AT_RIGHT = 13;
public static final int AL_AT_BOTTOM = 14;

//Brush Styles
public static final int B_CLEAR = 0;
public static final int B_SOLID = 1;
public static final int B_DIAGONAL = 2;
public static final int B_CROSS = 3;
public static final int B_DIAGCROSS = 4;
public static final int B_FDIAGONAL = 5;
public static final int B_HORIZONTAL = 6;
public static final int B_VERTICAL = 7;
public static final int B_BITMAP = 8;
public static final int B_GRADIENT = 0x10000000;

//TREEVIEW_THISITEM Constant
public static final int TREEVIEW_THISITEM = -1;

//ScrollBars
public static final int SS_NONE = 0;
public static final int SS_HORIZONTAL = 1;
public static final int SS_VERTICAL = 2;
public static final int SS_BOTH = 3;

//Bevel Styles	(StatusItem.Border, Frame.BevelInner, Frame.BevelOuter)
public static final int BS_NONE = 0;
public static final int BS_LOWERED = -1;
public static final int BS_RAISED = 1;

//TrackBar tick marks constants
public static final int TM_NONE = 0;
public static final int TM_TOP = 1;
public static final int TM_BOTTOM = -1;
public static final int TM_LEFT = 1;
public static final int TM_RIGHT = -1;
public static final int TM_BOTH = 2;

//Animate IDs
public static final int AVI_FINDFOLDER = 0;
public static final int AVI_FINDFILE = 1;
public static final int AVI_FINDCOMPUTER = 2;
public static final int AVI_COPYFILES = 3;
public static final int AVI_COPYFILE = 4;
public static final int AVI_RECYCLEFILE = 5;
public static final int AVI_EMPTYRECYCLE = 6;
public static final int AVI_DELETEFILE = 7;

//DataTypes
public static final int DT_NONE = 0;
public static final int DT_STRING = 1;
public static final int DT_INTEGER = 2;
public static final int DT_FLOAT = 3;
public static final int DT_HEXINT = 4;

//SortTypes
public static final int SORT_NONE = 0;
public static final int SORT_NORMAL = 1;
public static final int SORT_REVERSE = -1;

//Draw Types
public static final int DI_DRAW = 0;
public static final int DI_STRETCH = 1;
public static final int DI_CENTER = 2;
public static final int DI_PROPORTIONAL_STRETCH = 5;

//CharCase
public static final int CC_NORMAL = 0;
public static final int CC_LOWERCASE = -1;
public static final int CC_UPPERCASE = 1;

public static final int DIRECTION_TOP_BOTTOM = 2700;
public static final int DIRECTION_LEFT_RIGHT = 0;
public static final int DIRECTION_BOTTOM_TOP = 900;
public static final int DIRECTION_RIGHT_LEFT = 1800;
public static final int DIRECTION_CENTER = 0x20000000;
public static final int DIRECTION_TOP_CENTER_BOTTOM = 0x20000A8C;
public static final int DIRECTION_LEFT_CENTER_RIGHT = 0x20000000;

public static final int IDC_DEFAULT = -1;
public static final int IDC_NONE = 0;
public static final int IDC_PARENT = -2;
//End WSO Constants

//Other Constants
public static final int WS_SIZEGRIP = 0x00040000;
public static final int WS_DEFAULT = 0x00CF0000;
public static final int WS_DIALOGDEFAULT = 0x00C80000;
public static final int OFN_OPENDEFAULT = 0x00000004;
public static final int OFN_SAVEDEFAULT = 0x00000006;
public static final int PD_DEFAULT = 0x0004000C;
public static final int PSD_DEFAULT = 0x00000002;
public static final int CC_DEFAULT = 0;
public static final int BIF_DEFAULT = 0x00000001;
public static final int CF_DEFAULT = 0x00000101;
public static final int TVS_DEFAULT = 0x00000007;
public static final int TCS_DEFAULT = 0x00000240;
public static final int RBS_DEFAULT = 0x00002200;
//End Constants



}