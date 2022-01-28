import * as Electron from 'electron';
import * as Main from 'electron/main'
// Taken from `RemoteMainInterface`
export var app: Electron.App;
export var autoUpdater: Electron.AutoUpdater;
export var BrowserView: typeof Electron.BrowserView;
export var BrowserWindow: typeof Electron.BrowserWindow;
export var ClientRequest: Main.ClientRequest;
export var clipboard: Electron.Clipboard;
export var CommandLine: Main.CommandLine;
export var contentTracing: Electron.ContentTracing;
export var Cookies: Main.Cookies;
export var crashReporter: Electron.CrashReporter;
export var Debugger: Main.Debugger;
export var desktopCapturer: Electron.DesktopCapturer;
export var dialog: Electron.Dialog;
export var Dock: Main.Dock;
export var DownloadItem: Main.DownloadItem;
export var globalShortcut: Electron.GlobalShortcut;
export var inAppPurchase: Electron.InAppPurchase;
export var IncomingMessage: Main.IncomingMessage;
export var ipcMain: Electron.IpcMain;
export var Menu: typeof Electron.Menu;
export var MenuItem: typeof Electron.MenuItem;
export var MessageChannelMain: typeof Electron.MessageChannelMain;
export var MessagePortMain: Main.MessagePortMain;
export var nativeImage: Electron.NativeImage;
export var nativeTheme: Electron.NativeTheme;
export var net: Electron.Net;
export var netLog: Electron.NetLog;
export var Notification: typeof Electron.Notification;
export var powerMonitor: Electron.PowerMonitor;
export var powerSaveBlocker: Electron.PowerSaveBlocker;
export var protocol: Electron.Protocol;
export var screen: Electron.Screen;
export var ServiceWorkers: Main.ServiceWorkers;
export var session: typeof Electron.session;
export var shell: Electron.Shell;
export var systemPreferences: Electron.SystemPreferences;
export var TouchBar: typeof Electron.TouchBar;
export var TouchBarButton: Main.TouchBarButton;
export var TouchBarColorPicker: Main.TouchBarColorPicker;
export var TouchBarGroup: Main.TouchBarGroup;
export var TouchBarLabel: Main.TouchBarLabel;
export var TouchBarOtherItemsProxy: Main.TouchBarOtherItemsProxy;
export var TouchBarPopover: Main.TouchBarPopover;
export var TouchBarScrubber: Main.TouchBarScrubber;
export var TouchBarSegmentedControl: Main.TouchBarSegmentedControl;
export var TouchBarSlider: Main.TouchBarSlider;
export var TouchBarSpacer: Main.TouchBarSpacer;
export var Tray: typeof Electron.Tray;
export var webContents: typeof Electron.webContents;
export var WebRequest: Main.WebRequest;

// Taken from `Remote`
export function getCurrentWebContents(): Electron.WebContents;
export function getCurrentWindow(): Electron.BrowserWindow;
export function getGlobal(name: string): any;
export var process: NodeJS.Process;
export var require: NodeJS.Require;
