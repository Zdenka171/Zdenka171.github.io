	var httpResponse;
	var bIsUpdatingConfig=false;	
	var bSystemBar;	
	var bDisableStatusBar;	
	var bDisableBackKey;	
	var bDisableHomeKey;	
	var bDisableRecentAppKey;	
	var bJSLibraries;
	var bDebugButton;

	var bDebugMode;	
	var bCookies;	
	var bDeleteCookiesOnExit;	
	var bDeleteCacheOnExit;
	var bVerifyPeerCertificate;
	var bUseWideViewPort;
	var nViewPortWidth;	
	var nViewPortInitialScale;	
	var nPageZoom;
	var bUseDWForScanning;
	var bTTSEnabled;
	var bDisableScannerDuringNavigation;
	var bDisableAllIME;	
	var bShortcutCreationEnabled;
	var bResizeOnSIP;	
	var bAutoRotate;
	var bLockOrientation;
	var szStartPage;
	var szCloudConfigURL;
	var nNavTimeOut;
	var bFocusOnInputBox;
	var bLogTrace;
	var bSettingsButtonEnabled;
	var bCloudConfigEnabled;
	var bLogTrace;

	function loadEvent()
	{		
		loadConfigDoc();
		readFromConfig();
		setInterval(readFromConfig, 2000);
	}
	function readFromConfig()
	{
		console.log("drd JS bIsUpdatingConfig="+bIsUpdatingConfig);
		if(bIsUpdatingConfig)
		{
			console.log("drd JS bIsUpdatingConfig readFromConfig read_orig_callback="+bIsUpdatingConfig);
			return;
		}
		if(bFocusOnInputBox)
			return;
		EB.Configreadwrite.readFromOriginalConfig(read_orig_callback);
	
	}	
	
	function read_orig_callback(val) {
			if(bIsUpdatingConfig==true)
			{
			//alert("bIsUpdatingConfig is 0");
			console.log("drd JS bIsUpdatingConfig read_orig_callback="+bIsUpdatingConfig);
			
				return;
			}
		    if(val.status == "false") {	
			} 
			else {
				//alert(val.StartPage);
					
					if(val.DebugButtonsEnabled == "1")
					{
						document.getElementById("debugButton").checked=true;
						bDebugButton=true;
					}
					else
					{
						document.getElementById("debugButton").checked=false;
						bDebugButton=false;
					}

					if(val.DebugModeEnable == "1")
					{
						document.getElementById("debugMode").checked=true;
						bDebugMode=true;
					}
					else
					{
						document.getElementById("debugMode").checked=false;
						bDebugMode=false;
					}
					
					if(val.HideSystemBar == "1")
					{
						document.getElementById("systemBar").checked=true;
						bSystemBar=true;
					}
					else
					{
						document.getElementById("systemBar").checked=false;
						bSystemBar=false;
					}						
					
					if(val.setStatusBarDisable == "1")
					{
						document.getElementById("disableStatusBar").checked=true;
						bDisableStatusBar=true;
					}
					else
					{
						document.getElementById("disableStatusBar").checked=false;
						bDisableStatusBar=false;
					}						
					
					if(val.setBackKeyDisable == "1")
					{
						document.getElementById("disableBackKey").checked=true;
						bDisableBackKey=true;
					}
					else
					{
						document.getElementById("disableBackKey").checked=false;
						bDisableBackKey=false;
					}						
					
					if(val.setHomeKeyDisable == "1")
					{
						document.getElementById("disableHomeKey").checked=true;
						bDisableHomeKey=true;
					}
					else
					{
						document.getElementById("disableHomeKey").checked=false;
						bDisableHomeKey=false;
					}						
					
					if(val.setRecentAppDisable == "1")
					{						
						document.getElementById("disableRecentAppKey").checked=true;
						bDisableRecentAppKey=true;
					}
					else
					{
						document.getElementById("disableRecentAppKey").checked=false;
						bDisableRecentAppKey=false;
					}						
					
					if(val.JSLibraries == "1")
					{						
						document.getElementById("injectJSLibraries").checked=true;
						bJSLibraries=true;
					}
					else
					{
						document.getElementById("injectJSLibraries").checked=false;
						bJSLibraries=false;
					}
					
					if(val.Cookies == "1")
					{
						document.getElementById("cookies").checked=true;
						bCookies=true;
					}
					else
					{
						document.getElementById("cookies").checked=false;
						bCookies=false;
					}	
					
					if(val.DeleteCookiesOnExit == "1")
					{
						document.getElementById("deleteCookiesOnExit").checked=true;
						bDeleteCookiesOnExit=true;
					}
					else
					{
						document.getElementById("deleteCookiesOnExit").checked=false;
						bDeleteCookiesOnExit=false;
					}	
					
					if(val.DeleteCacheOnExit == "1")
					{
						document.getElementById("deleteCacheOnExit").checked=true;
						bDeleteCacheOnExit=true;
					}
					else
					{
						document.getElementById("deleteCacheOnExit").checked=false;
						bDeleteCacheOnExit=false;
					}					
					
					if(val.VerifyPeerCertificate == "1")
					{
						document.getElementById("verifyPeerCertificate").checked=true;
						bVerifyPeerCertificate=true;
					}
					else
					{
						document.getElementById("verifyPeerCertificate").checked=false;
						bVerifyPeerCertificate=false;
					}	
					if(val.UseWideViewPort == "1")
					{
						document.getElementById("useWideViewPort").checked=true;
						bUseWideViewPort=true;
						
						document.getElementById("viewPortWidth").disabled = false;
						document.getElementById("viewPortInitialScale").disabled = false;
						document.getElementById("viewPortWidth").value=val.ViewPortWidth;
						document.getElementById("viewPortInitialScale").value=val.ViewPortInitialScale;	
					}
					else
					{
						document.getElementById("useWideViewPort").checked=false;
						bUseWideViewPort=false;

						document.getElementById("viewPortWidth").disabled = true;
						document.getElementById("viewPortInitialScale").disabled = true;

					}	
					if(val.usedwforscanning == "1")
					{
						document.getElementById("usedwforscanning").checked=true;
						bUseDWForScanning=true;
					}
					else
					{
						document.getElementById("usedwforscanning").checked=false;
						bUseDWForScanning=false;
					}
							
					if(val.TTSEnabled == "1")
					{
						document.getElementById("ttsEnabled").checked=true;
						bTTSEnabled=true;
					}
					else
					{
						document.getElementById("ttsEnabled").checked=false;
						bTTSEnabled=false;
					}
					
					if(val.DisableScannerDuringNavigation == "1")
					{
						document.getElementById("disableScannerDuringNavigation").checked=true;
						bDisableScannerDuringNavigation=true;
					}
					else
					{
						document.getElementById("disableScannerDuringNavigation").checked=false;
						bDisableScannerDuringNavigation=false;
					}				

					if(val.DisableAllIME == "1")
					{
						document.getElementById("disableAllIME").checked=true;
						bDisableAllIME=true;
					}
					else
					{
						document.getElementById("disableAllIME").checked=false;
						bDisableAllIME=false;
					}
		
					if(val.ShortcutCreationEnabled == "1")
					{
						document.getElementById("shortcutCreationEnabled").checked=true;
						bShortcutCreationEnabled=true;
					}
					else
					{
						document.getElementById("shortcutCreationEnabled").checked=false;
						bShortcutCreationEnabled=false;
					}					
					if(val.ResizeOnSIP == "1")
					{	
						document.getElementById("resizeOnSIP").checked=true;
						bResizeOnSIP=true;
					}
					else
					{
						document.getElementById("resizeOnSIP").checked=false;
						bResizeOnSIP=false;
					}
					if(val.AutoRotate == "1")
					{
						document.getElementById("autoRotate").checked=true;
						bAutoRotate=true;
					}
					else
					{
						document.getElementById("autoRotate").checked=false;
						bAutoRotate=false;
					}					
					/*if(val.LockOrientationvalue  == "1")
					{
						document.getElementById("lockOrientation").checked=true;
						bLockOrientation=true;
					}
					else
					{
						document.getElementById("lockOrientation").checked=false;
						bLockOrientation=false;
					}*/					

					if(val.LogTrace  == "1")
					{
						document.getElementById("logTrace").checked=true;
						bLogTrace=true;
					}
					else
					{
						document.getElementById("logTrace").checked=false;
						bLogTrace=false;
					}					

					if(val.SettingsButtonEnabled   == "1")
					{
						document.getElementById("settingsButton").checked=true;
						bSettingsButtonEnabled=true;
					}
					else
					{
						document.getElementById("settingsButton").checked=false;
						bSettingsButtonEnabled=false;
					}					

					if(val.CloudConfigEnabled   == "1")
					{
						document.getElementById("cloudConfig").checked=true;
						bCloudConfigEnabled=true;
					}
					else
					{
						document.getElementById("cloudConfig").checked=false;
						bCloudConfigEnabled=false;
					}					

					//alert("CloudConfigPath="+val.CloudConfigPath);
					document.getElementById("pageZoom").value=val.PageZoom;	
					document.getElementById("cloudConfigURL").value=val.CloudConfigPath;
					szCloudConfigURL=val.CloudConfigPath;					
					document.getElementById("startPage").value=val.StartPage;			
					document.getElementById("navTimeout").value=val.NavTimeout;			
					

			}
		}	
		function isBrowserEB() 
		{
			var browserEB = true;
			var str="Enterprise Browser";
			try {
			  if (str.localeCompare(EB.Configreadwrite.browser))
				  browserEB = true;
				  
			}
			catch(err) {
			  browserEB = false;
			}
			return browserEB;
			
		}
		function saveConfig(configParameter) {

		
            var json={},temp;	
			bIsUpdatingConfig=true;
			bFocusOnInputBox=false;
		
			if(!configParameter.localeCompare("debugButton"))
			{
				
				temp = document.getElementById('debugButton').checked;

				if(temp!=bDebugButton)
				{
					bDebugButton=temp;
					json["DebugButtonsEnabled"]=bDebugButton ? 1 : 0;
				}	
			}
			else if(!configParameter.localeCompare("debugMode"))
			{
				temp = document.getElementById('debugMode').checked;
				if(temp!=bDebugMode)
				{
					bDebugMode=temp;
					json["DebugModeEnable"]=bDebugMode? 1 : 0;
				}
			}			

			else if(!configParameter.localeCompare("systemBar"))
			{
				temp = document.getElementById('systemBar').checked;
				if(temp!=bSystemBar)
				{
					bSystemBar=temp;
					json["HideSystemBar"]=bSystemBar? 1 : 0;
				}
			}

			else if(!configParameter.localeCompare("disableStatusBar"))
			{
				temp = document.getElementById('disableStatusBar').checked;
				if(temp!=bDisableStatusBar)
				{
					bDisableStatusBar=temp;
					json["setStatusBarDisable"]=bDisableStatusBar? 1 : 0;
				}
			}

			else if(!configParameter.localeCompare("disableBackKey"))
			{
				temp = document.getElementById('disableBackKey').checked;
				if(temp!=bDisableBackKey)
				{
					bDisableBackKey=temp;
					json["setBackKeyDisable"]=bDisableBackKey? 1 : 0;
				}
			}

			else if(!configParameter.localeCompare("disableHomeKey"))
			{
				temp = document.getElementById('disableHomeKey').checked;
				if(temp!=bDisableHomeKey)
				{
					bDisableHomeKey=temp;
					json["setHomeKeyDisable"]=bDisableHomeKey? 1 : 0;
				}
			}

			else if(!configParameter.localeCompare("disableRecentAppKey"))
			{
				temp = document.getElementById('disableRecentAppKey').checked;
				if(temp!=bDisableRecentAppKey)
				{
					bDisableRecentAppKey=temp;
					json["setRecentAppDisable"]=bDisableRecentAppKey? 1 : 0;
				}
			}
			else if(!configParameter.localeCompare("injectJSLibraries"))
			{
				temp = document.getElementById('injectJSLibraries').checked;
				if(temp!=bJSLibraries)
				{
					bJSLibraries=temp;
					json["JSLibraries"]=bJSLibraries? 1 : 0;
				}
			}

			else if(!configParameter.localeCompare("cookies"))
			{
				temp = document.getElementById('cookies').checked;
				if(temp!=bCookies)
				{
					bCookies=temp;
					json["Cookies"]=bCookies? 1 : 0;
				}
			}
			else if(!configParameter.localeCompare("deleteCookiesOnExit"))
			{
				temp = document.getElementById('deleteCookiesOnExit').checked;
				if(temp!=bDeleteCookiesOnExit)
				{
					bDeleteCookiesOnExit=temp;
					json["DeleteCookiesOnExit"]=bDeleteCookiesOnExit? 1 : 0;
				}
			}			
			else if(!configParameter.localeCompare("verifyPeerCertificate"))
			{
				temp = document.getElementById('verifyPeerCertificate').checked;
				if(temp!=bVerifyPeerCertificate)
				{
					bVerifyPeerCertificate=temp;
					json["VerifyPeerCertificate"]=bVerifyPeerCertificate? 1 : 0;
				}
			}		
			else if(!configParameter.localeCompare("deleteCacheOnExit"))
			{
				temp = document.getElementById('deleteCacheOnExit').checked;
				if(temp!=bDeleteCacheOnExit)
				{
					bDeleteCacheOnExit=temp;
					json["DeleteCacheOnExit"]=bDeleteCacheOnExit? 1 : 0;
				}
			}			
			else if(!configParameter.localeCompare("useWideViewPort"))
			{
				temp = document.getElementById('useWideViewPort').checked;

				if(temp)
				{
					document.getElementById("viewPortWidth").disabled = false;
					document.getElementById("viewPortInitialScale").disabled = false;
				}
				else
				{

					document.getElementById("viewPortWidth").disabled = true;
					document.getElementById("viewPortInitialScale").disabled = true;					
				}
					
				if(temp!=bUseWideViewPort)
				{
					
					bUseWideViewPort=temp;
					json["UseWideViewPort"]=bUseWideViewPort? 1 : 0;
				}
			}			
			else if(!configParameter.localeCompare("viewPortWidth"))
			{
				temp = document.getElementById('viewPortWidth').value;
				if(temp!=nViewPortWidth)
				{
					nViewPortWidth=temp;
					json["ViewPortWidth"]=nViewPortWidth;
				}
			}
			else if(!configParameter.localeCompare("viewPortInitialScale"))
			{
				temp = document.getElementById('viewPortInitialScale').value;
				
				if(temp!=nViewPortInitialScale)
				{
					nViewPortInitialScale=temp;
					json["ViewPortInitialScale"]=nViewPortInitialScale;
				}
			}	
			else if(!configParameter.localeCompare("pageZoom"))
			{
				
				temp = document.getElementById('pageZoom').value;

				if(temp!=nPageZoom)
				{
					nPageZoom=temp;
					json["PageZoom"]=nPageZoom;
				}
			}
			else if(!configParameter.localeCompare("usedwforscanning"))
			{
				
				temp = document.getElementById('usedwforscanning').checked;

				if(temp!=bUseDWForScanning)
				{
					bUseDWForScanning=temp;
					json["usedwforscanning"]=bUseDWForScanning? 1 : 0;
				}
			}			
			else if(!configParameter.localeCompare("ttsEnabled"))
			{
				
				temp = document.getElementById('ttsEnabled').checked;

				if(temp!=bTTSEnabled)
				{
					bTTSEnabled=temp;
					json["TTSEnabled"]=bTTSEnabled? 1 : 0;
				}
			}			
			
			else if(!configParameter.localeCompare("disableScannerDuringNavigation"))
			{
				
				temp = document.getElementById('disableScannerDuringNavigation').checked;

				if(temp!=bDisableScannerDuringNavigation)
				{
					bDisableScannerDuringNavigation=temp;
					json["DisableScannerDuringNavigation"]=bDisableScannerDuringNavigation? 1 : 0;
				}
			}
			else if(!configParameter.localeCompare("disableAllIME"))
			{
				
				temp = document.getElementById('disableAllIME').checked;

				if(temp!=bDisableAllIME)
				{
					bDisableAllIME=temp;
					json["DisableAllIME"]=bDisableAllIME? 1 : 0;
				}
			}
			else if(!configParameter.localeCompare("shortcutCreationEnabled"))
			{
				
				temp = document.getElementById('shortcutCreationEnabled').checked;

				if(temp!=bShortcutCreationEnabled)
				{
					bShortcutCreationEnabled=temp;
					json["ShortcutCreationEnabled"]=bShortcutCreationEnabled? 1 : 0;
				}
			}			
			else if(!configParameter.localeCompare("resizeOnSIP"))
			{
				
				temp = document.getElementById('resizeOnSIP').checked;

				if(temp!=bResizeOnSIP)
				{
					bResizeOnSIP=temp;
					json["ResizeOnSIP"]=bResizeOnSIP? 1 : 0;
				}
			}			
			else if(!configParameter.localeCompare("autoRotate"))
			{
				
				temp = document.getElementById('autoRotate').checked;

				if(temp!=bAutoRotate)
				{
					bAutoRotate=temp;
					json["AutoRotate"]=bAutoRotate? 1 : 0;
				}
			}		
			else if(!configParameter.localeCompare("lockOrientation"))
			{
				
				temp = document.getElementById('lockOrientation').checked;

				if(temp!=bLockOrientation)
				{
					bLockOrientation=temp;
					json["AutoRotate"]=bLockOrientation? 1 : 0;
				}
			}	
			else if(!configParameter.localeCompare("logTrace"))
			{
				
				temp = document.getElementById('logTrace').checked;

				if(temp!=bLogTrace)
				{
					bLogTrace=temp;					
					json["LogTrace"]=bLogTrace? 1 : 0;
				}
			}
			else if(!configParameter.localeCompare("settingsButton"))
			{
				
				temp = document.getElementById('settingsButton').checked;

				if(temp!=bSettingsButtonEnabled)
				{
					bSettingsButtonEnabled=temp;					
					json["SettingsButtonEnabled"]=bSettingsButtonEnabled? 1 : 0;
				}
			}	
			else if(!configParameter.localeCompare("cloudConfig"))
			{				
				temp = document.getElementById('cloudConfig').checked;

				if(temp!=bCloudConfigEnabled)
				{
					bCloudConfigEnabled=temp;					
					json["CloudConfigEnabled"]=bCloudConfigEnabled? 1 : 0;
				}
			}
			else if(!configParameter.localeCompare("startPage"))
			{
				temp = document.getElementById('startPage').value;
				
				if(temp!=szStartPage)
				{
					szStartPage=temp;
					json["StartPage"]=szStartPage;
				}
			}				
			else if(!configParameter.localeCompare("cloudConfigURL"))
			{
				temp = document.getElementById('cloudConfigURL').value;
				
				if(temp!=szCloudConfigURL)
				{
					szCloudConfigURL=temp;
					json["CloudConfigPath"]=szCloudConfigURL;
				}
			}	
			
			else if(!configParameter.localeCompare("navTimeout"))
			{
				temp = document.getElementById('navTimeout').value;
				
				if(temp!=nNavTimeOut)
				{
					nNavTimeOut=temp;
					json["NavTimeout"]=nNavTimeOut;
				}
			}			
			//json["StartPage"]="http://www.google.com";
			
			EB.Configreadwrite.writeToConfig(json, write_actual_callback);
			setTimeout(function(){ bIsUpdatingConfig=false; }, 2000);
			
			
			//alert("Settings Applied. Relaunch the Application for changes to take effect");
		}
		
		function setInputFocus()
		{
			bFocusOnInputBox=true;
			
		}
		function write_actual_callback(data) {
		
		}
		
		function syncConfigToServer()
		{
			alert("szCloudConfigURL="+szCloudConfigURL);
			
			EB.Configreadwrite.syncConfigToServer(szCloudConfigURL,syncConfigToServerCallback);
			
		}
		function syncConfigToServerCallback(data)
		{
		}
		function loadConfigDoc() {
			//alert("test");
		  var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		  
			if (this.readyState == 4 && this.status == 200) {
			  httpResponse =      this.responseText;
			  //alert(httpResponse);
			}
			}
			  
			  xhttp.onerror = function () {
				  alert("** An error occurred during the transaction");
			}
			  
		  xhttp.open("GET", "https://techdocs.zebra.com/enterprise-browser/2-0/guide/configreference/", true);
		  xhttp.send();
		}
		function showPopup(configParameter,configParameterPopupID) {

			var text,popup;

			var paramString="#";
			paramString=paramString.concat(configParameter.toLowerCase());
			paramString=paramString.concat("\"><span>");
			//alert(paramString);
			var index = httpResponse.indexOf(paramString);
			//alert(index);
			

			var tempString = httpResponse.substring(index, httpResponse.length);
			var index1=tempString.indexOf("<p>");	
			var index2=tempString.indexOf("</p>");
			//alert(index1);
			//alert(index2);
			text=tempString.substring(index1+3, index2);
			popup = document.getElementById(configParameterPopupID);
			//alert(text);

			popup.innerHTML =text;
			popup.classList.toggle("show");
		}