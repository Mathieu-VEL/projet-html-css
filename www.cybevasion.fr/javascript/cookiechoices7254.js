/*
Copyright 2014 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function(window) {

	if (!!window.cookieChoices) {
		return window.cookieChoices;
	}

	var document = window.document;
	// IE8 does not support textContent, so we should fallback to innerText.
	var supportsTextContent = 'textContent' in document.body;

	var cookieChoices = (function() {

		/* ID */
		var cookieName = 'cookies_settings';
		var consentText = 'idConsentText';
		var cookieConsentId = 'cookieChoiceInfo';
		var cookieButtonBarId = 'cookieButtonBar';
		var dismissLinkId = 'cookieChoiceDismiss';
		var infoLinkId = 'cookieChoiceInfoLink';
		var RefuseLinkId = 'cookieChoiceRefuse';
		var refuseText = 'Refuser';

		/* Styles */
		var css_text = '';
		css_text += '#'+cookieConsentId+' {';
		css_text += ' position: fixed;';
		css_text += ' bottom:0;';
		css_text += ' width:100%;';
		css_text += ' background: rgba(0, 0, 0, .9);';
		css_text += ' color: #FFFFFF;';
		css_text += ' font-size: 1.1em;';
		css_text += ' margin: 0;';
		css_text += ' padding: 10px;';
		css_text += ' box-sizing: border-box;';
		css_text += ' text-align: center;';
		css_text += ' line-height: 2;';
		css_text += ' z-index: 1001;';
		css_text += '}';

		css_text += '#'+dismissLinkId+' {';
		css_text += ' margin-left: 20px;';
		css_text += ' font-size: 1em;';
		css_text += ' text-decoration: none;';
		css_text += ' padding: 5px 10px;';
		css_text += ' border-radius: 3px;';
		css_text += ' background: #32A0F5;';
		css_text += ' color: #FFFFFF;';
		css_text += ' display: inline-block;';
		css_text += ' min-width: 120px;';
		css_text += ' box-sizing: border-box;';
		css_text += ' line-height: 1.5em;';
		css_text += '}';

		css_text += '#'+RefuseLinkId+' {';
		css_text += ' margin-left: 20px;';
		css_text += ' font-size: 1em;';
		css_text += ' text-decoration: none;';
		css_text += ' padding: 5px 10px;';
		css_text += ' border-radius: 3px;';
		css_text += ' background: #FFFFFF;';
		css_text += ' color: #32A0F5;';
		css_text += ' display: inline-block;';
		css_text += ' min-width: 120px;';
		css_text += ' box-sizing: border-box;';
		css_text += ' line-height: 1.5em;';
		css_text += '}';

		css_text += '#'+infoLinkId+' {';
		css_text += ' font-size: 1em;';
		css_text += ' text-decoration: none;';
		css_text += ' padding: 5px 10px;';
		css_text += ' border-radius: 3px;';
		css_text += ' background: #ffffff;';
		css_text += ' color: #32A0F5;';
		css_text += ' display: inline-block;';
		css_text += ' min-width: 120px;';
		css_text += ' box-sizing: border-box;';
		css_text += ' line-height: 1.5em;';
		css_text += '}';

		css_text += '@media screen and (max-width: 800px){';
		css_text += ' #'+cookieConsentId+' {';
		css_text += '   line-height: 1.5;';
		css_text += ' }';
		css_text += ' #'+consentText+' {';
		css_text += '   display: block;';
		css_text += '   text-align: justify;';
		css_text += ' }';
		css_text += ' #'+cookieButtonBarId+' {';
		css_text += '   margin-top: 10px;';
		css_text += ' }';
		css_text += '}';
		css_text += '@media screen and (max-width: 510px){';
		css_text += '#'+cookieConsentId+' {';
		css_text += ' position: fixed;';
		css_text += ' bottom: 8px;';
		css_text += ' width: calc(100% - 40px) !important;';
		css_text += ' background: #FFFFFF;';
		css_text += ' color: #383838;';
		css_text += ' font-size: 1.1em;';
		css_text += ' margin-left: 20px !important;';
		css_text += ' margin-right: 20px !important;';
		css_text += ' border-radius: 8px;';
		css_text += ' filter: drop-shadow(0px 8px 28px #0000004d);';
		css_text += '}';
		css_text += ' #'+consentText+' {';
		css_text += '   color: #383838;';
		css_text += ' }';
		css_text += ' #'+cookieButtonBarId+' {';
		css_text += '   columns: 1;';
		css_text += '   margin-top: 30px;';
		css_text += '   margin-bottom: 25px;';
		css_text += ' }';
		css_text += '#'+dismissLinkId+' {';
		css_text += ' margin-left: 0px;';
		css_text += ' border-radius: 8px;';
		css_text += ' background: #32A0F5;';
		css_text += ' color: #FFFFFF;';
		css_text += ' width: 100%;';
		css_text += ' min-height: 40px;';
		css_text += ' padding-top: 8px;';
		css_text += '}';
		css_text += '#'+infoLinkId+' {';
		css_text += ' border-radius: 8px;';
		css_text += ' background: #ffffff;';
		css_text += ' color: #32A0F5;';
		css_text += ' width: 100%;';
		css_text += ' border: 1px solid #32A0F5;';
		css_text += ' margin-top: 10px;';
		css_text += ' min-height: 40px;';
		css_text += ' padding-top: 8px;';
		css_text += '}';
		css_text += '#'+RefuseLinkId+' {';
		css_text += ' margin-left: 0px;';
		css_text += ' border-radius: 8px;';
		css_text += ' background: #FFFFFF;';
		css_text += ' color: #32A0F5;';
		css_text += ' display: inline-block;';
		css_text += ' width: 100%;';
		css_text += ' border: 1px solid #32A0F5;';
		css_text += ' margin-top: 10px;';
		css_text += ' min-height: 40px;';
		css_text += ' padding-top: 8px;';
		css_text += '}';
		css_text += '}';


		function _createHeaderElement(cookieText, dismissText, linkText, linkHref) {
			var cookieConsentElement = document.createElement('div');
			cookieConsentElement.id = cookieConsentId;
			cookieConsentElement.appendChild(_createConsentText(cookieText));
			var cookieButtonBar = document.createElement('div');
			cookieButtonBar.id = cookieButtonBarId;


			if(window.innerWidth < 510){
				
				cookieButtonBar.appendChild(_createDismissLink(dismissText));
				cookieConsentElement.appendChild(cookieButtonBar);

				if (!!linkText && !!linkHref) {
					cookieButtonBar.appendChild(_createInformationLink(linkText, linkHref));
				}
				cookieButtonBar.appendChild(_createRefuseLink(refuseText));
				cookieConsentElement.appendChild(cookieButtonBar);

			}else{
				if (!!linkText && !!linkHref) {
					cookieButtonBar.appendChild(_createInformationLink(linkText, linkHref));
				}
				cookieButtonBar.appendChild(_createRefuseLink(refuseText));
				cookieConsentElement.appendChild(cookieButtonBar);

				cookieButtonBar.appendChild(_createDismissLink(dismissText));
				cookieConsentElement.appendChild(cookieButtonBar);
			}



			var style_css = document.createElement('style');
			style_css.type = 'text/css';
			if(style_css.styleSheet){
				style_css.styleSheet.cssText = css_text;
			} else {
				style_css.appendChild(document.createTextNode(css_text));
			}
			document.head.appendChild(style_css);

			return cookieConsentElement;
		}

		function _setElementText(element, text) {
			// if (supportsTextContent) {
			//   element.textContent = text;
			// } else {
			//   element.innerText = text;
			// }
			element.innerHTML = text;
		}



		function _createConsentText(cookieText) {
			var consentTextElement = document.createElement('span');
			consentTextElement.id = consentText;
			_setElementText(consentTextElement, cookieText);
			return consentTextElement;
		}

		function _createDismissLink(dismissText) {
			var dismissLink = document.createElement('a');
			_setElementText(dismissLink, dismissText);
			dismissLink.id = dismissLinkId;
			dismissLink.href = '#';
			return dismissLink;
		}

		function _createRefuseLink(refuseText) {
			var refuseLink = document.createElement('a');
			_setElementText(refuseLink, refuseText);
			refuseLink.id = RefuseLinkId;
			refuseLink.href = '#';
			return refuseLink;
		}

		function _createInformationLink(linkText, linkHref) {
			var infoLink = document.createElement('a');
			_setElementText(infoLink, linkText);
			infoLink.id = infoLinkId;
			infoLink.href = '#';
			return infoLink;
		}

		function _dismissLinkClick() {
			_saveModalPreferences();
			_removeCookieConsent();
			location.reload();
			return false;
		}

		function _refuseLinkClick() {
			_refuserCookies();
			_removeCookieConsent();
			return false;
		}

		function _showOptionsLinkClick() {
			_createModalPreferences();
			return false;
		}

		function _showCookieConsent(cookieText, dismissText, linkText, linkHref) {
			if (_shouldDisplayConsent()) {
				_removeCookieConsent();
				var consentElement = _createHeaderElement(cookieText, dismissText, linkText, linkHref);
				var fragment = document.createDocumentFragment();
				fragment.appendChild(consentElement);
				document.body.appendChild(fragment.cloneNode(true));

				document.getElementById(dismissLinkId).onclick = _dismissLinkClick;
				document.getElementById(infoLinkId).onclick = _showOptionsLinkClick;
				document.getElementById('cookieChoiceRefuse').onclick = _refuseLinkClick;
			}
		}

		function showCookieConsentBar(cookieText, dismissText, linkText, linkHref) {
			_showCookieConsent(cookieText, dismissText, linkText, linkHref);
		}

		function _removeCookieConsent() {
			var cookieChoiceElement = document.getElementById(cookieConsentId);
			if (cookieChoiceElement != null) {
				cookieChoiceElement.parentNode.removeChild(cookieChoiceElement);
			}
		}

		function _shouldDisplayConsent() {
			// Display the header only if the cookie has not been set.
			return !document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
		}

		function _createModalPreferences() {
			var html = '';
			html += '<div class="overlayCookies">';
			html += '<div class="containerCookies">';
			html += '<div class="contentCookies_1">';
			html += '<div class="contentCookies_2">';
			html += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="M10.25 4a2.25 2.25 0 0 0-4.495-.154L5.75 4v2h-1.5V4a3.75 3.75 0 0 1 7.495-.2l.005.2v2H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7.25V4z"></path></svg>';
			html += '<b style="font-size: 1.3em;">Gérez vos paramètres de confidentialité</b>';
			html += '<br>';
			html += 'Sélectionnez les cookies que vous acceptez sur notre site.';
			html += '<br>';
			html += '<div class="contentCookies_3">';

			html += '<label style="cursor: default;"><input type="checkbox" name="cookies_fonctionnels" value="1" checked disabled><div class="checkbox_cookies-grey" style="filter: grayscale(1);"></div> <b style="vertical-align: middle;">Cookies fonctionnels</b></label>';
			html += ' <span style="font-size: 0.9em;">(requis)</span>';
			html += '<div class="cookieShowDetails" onclick="var el = document.getElementsByClassName(\'cookieTypeDetails-fonctionnels\')[0];el.style.display = ((getComputedStyle(el).display == \'none\') ? \'block\' : \'none\');"><img src="https://www.cybevasion.fr/lib3/adherents/btn_plus.png"></div>';
			html += '<br>';
			html += '<div class="cookieTypeDetails cookieTypeDetails-fonctionnels">';
			html += 'Les cookies fonctionnels aident notre site à opérer correctement. Ils permettent de garder en mémoire l\'historique de vos recherches, vos annonces sauvegardées et vos autres préférences. Ces cookies techniques autorisés sont activés pour que notre site et nos services puissent fonctionner correctement.';
			html += '</div>'; // Fin de .cookieTypeDetails
			html += '<br>';

			html += '<label style="cursor: default;"><input type="checkbox" name="cookies_analytiques" value="1" checked disabled><div class="checkbox_cookies-grey" style="filter: grayscale(1);"></div> <b style="vertical-align: middle;">Cookies analytiques</b></label>';
			html += ' <span style="font-size: 0.9em;">(requis)</span>';
			html += '<div class="cookieShowDetails" onclick="var el = document.getElementsByClassName(\'cookieTypeDetails-analytiques\')[0];el.style.display = ((getComputedStyle(el).display == \'none\') ? \'block\' : \'none\');"><img src="https://www.cybevasion.fr/lib3/adherents/btn_plus.png"></div>';
			html += '<br>';
			html += '<div class="cookieTypeDetails cookieTypeDetails-analytiques">';
			html += 'Les cookies analytiques nous aident à comprendre la façon dont notre site est utilisé par les internautes. Ils nous permettent d\'améliorer notre site, nos applications et nos communications, et de continuer à vous proposer du contenu intéressant et pertinent. Ces cookies respectent les normes en vigueur.';
			html += '</div>'; // Fin de .cookieTypeDetails
			html += '<br>';

			html += '<label for="cookies_marketing"><input type="checkbox" id="cookies_marketing" name="cookies_marketing" value="1" checked><div class="checkbox_cookies"></div> <b style="vertical-align: middle;">Cookies marketing</b></label>';
			html += '<div class="cookieShowDetails" onclick="var el = document.getElementsByClassName(\'cookieTypeDetails-marketing\')[0];el.style.display = ((getComputedStyle(el).display == \'none\') ? \'block\' : \'none\');"><img src="https://www.cybevasion.fr/lib3/adherents/btn_plus.png"></div>';
			html += '<br>';
			html += '<div class="cookieTypeDetails cookieTypeDetails-marketing">';
			html += 'Les cookies tiers sont utilisés par notre site et d\'autres sociétés afin d\'afficher des publicités ciblées sur d\'autres sites. Ces publicités sont basées sur votre navigation, par exemple les hébergements que vous avez recherchés. Ces cookies nous permettent également d\'intégrer les réseaux sociaux à notre plateforme, pour que vous puissiez aimer ou partager des pages sur les réseaux sociaux.';
			html += '</div>'; // Fin de .cookieTypeDetails
			html += '<br>';

			html += '<label for="cookies_sites_partenaires"><input type="checkbox" id="cookies_sites_partenaires" name="cookies_sites_partenaires" value="1" checked><div class="checkbox_cookies"></div> <b style="vertical-align: middle;">Cookies de sites partenaires</b></label>';
			html += '<div class="cookieShowDetails" onclick="var el = document.getElementsByClassName(\'cookieTypeDetails-sites_partenaires\')[0];el.style.display = ((getComputedStyle(el).display == \'none\') ? \'block\' : \'none\');"><img src="https://www.cybevasion.fr/lib3/adherents/btn_plus.png"></div>';
			html += '<br>';
			html += '<div class="cookieTypeDetails cookieTypeDetails-sites_partenaires">';
			html += 'Ils permettent d\'accéder aux services de nos partenaires, tels que la découverte de points touristiques ou de services proches des hébergements que vous avez recherchés.';
			html += '</div>'; // Fin de .cookieTypeDetails
			html += '<br>';

			html += '<label for="cookies_videos"><input type="checkbox" id="cookies_videos" name="cookies_videos" value="1" checked><div class="checkbox_cookies"></div> <b style="vertical-align: middle;">Cookies vidéos</b></label>';
			html += '<div class="cookieShowDetails" onclick="var el = document.getElementsByClassName(\'cookieTypeDetails-videos\')[0];el.style.display = ((getComputedStyle(el).display == \'none\') ? \'block\' : \'none\');"><img src="https://www.cybevasion.fr/lib3/adherents/btn_plus.png"></div>';
			html += '<br>';
			html += '<div class="cookieTypeDetails cookieTypeDetails-videos">';
			html += 'Ils permettent de lire les vidéos présentes sur notre site. Nous utilisons divers fournisseurs de vidéos, tels que Google YouTube, Dailymotion, Vimeo, Facebook.';
			html += '</div>'; // Fin de .cookieTypeDetails
			html += '<br>';

			html += '<label for="cookies_avis_clients"><input type="checkbox" id="cookies_avis_clients" name="cookies_avis_clients" value="1" checked><div class="checkbox_cookies"></div> <b style="vertical-align: middle;">Cookies avis clients</b></label>';
			html += '<div class="cookieShowDetails" onclick="var el = document.getElementsByClassName(\'cookieTypeDetails-avis_clients\')[0];el.style.display = ((getComputedStyle(el).display == \'none\') ? \'block\' : \'none\');"><img src="https://www.cybevasion.fr/lib3/adherents/btn_plus.png"></div>';
			html += '<br>';
			html += '<div class="cookieTypeDetails cookieTypeDetails-avis_clients">';
			html += 'Ils permettent d\'afficher les avis clients de certaines annonces sur notre site. Nous utilisons divers fournisseurs d\'avis clients.';
			html += '</div>'; // Fin de .cookieTypeDetails
			
			html += '<br>';
			html += '<div class="cookieTypeDetails">';
			html += 'Vous trouverez plus d\'informations sur l\'utilisation des cookies sur <a href=\"/cookies.html\" style=\"text-decoration: underline;\">cette page</a>.';
			html += '</div>'; // Fin de .cookieTypeDetails

			html += '</div>'; // Fin de .contentCookies_3

			html += '<div class="contentCookies_4">';
			html += '<a class="buttonCookies buttonCookies-close" href="#" style="background: #ffffff;color: #32A0F5;">Fermer</a>';
			html += '<a class="buttonCookies buttonCookies-accept" href="#" style="background: #32A0F5;color: #ffffff;margin-left: 20px;">Enregistrer</a>';
			html += '</div>'; // Fin de .contentCookies_4

			html += '</div>'; // Fin de .contentCookies_2
			html += '</div>'; // Fin de .contentCookies_1
			html += '</div>'; // Fin de .containerCookies
			html += '</div>'; // Fin de .overlayCookies

			html += '<style>';
			html += '.overlayCookies { position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 10000;box-sizing: border-box;text-align: center;background: rgba(0, 0, 0, 0.75);color: #404040; }';
			html += '.containerCookies { position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 10001;display: table;table-layout: fixed;width: 100%;height: 100%; }';
			html += '.containerCookies .contentCookies_1 { display: table-cell;vertical-align: middle;text-align: center; }';
			html += '.containerCookies .contentCookies_2 { display: inline-block;background: #FFFFFF;padding: 20px;border-radius: 3px;text-align: left;max-width: 1000px; }';
			html += '.containerCookies .contentCookies_3 { margin-top: 20px;background: #efefef;padding: 20px 10px; }';
			html += '.containerCookies .contentCookies_4 { margin-top: 20px;text-align: center; }';
			html += '.containerCookies .cookieShowDetails { display: none; }';
			html += '.containerCookies .buttonCookies { font-size: 1em;text-decoration: none;padding: 5px 10px;border-radius: 3px;display: inline-block;min-width: 120px;box-sizing: border-box;line-height: 1.5em;text-align: center;border: 1px solid #32A0F5; }';
			html += '.containerCookies .cookieTypeDetails { margin-top: 5px;font-size: 0.9em;text-align: justify; }';
			html += '.containerCookies input[type=checkbox] { display: none; }';
			html += '.containerCookies .checkbox_cookies { display: inline-block;width: 16px;height: 16px;border: 2px solid #3c8cf5;border-radius: 3px;box-sizing: border-box;vertical-align: middle; }';
			html += '.containerCookies .checkbox_cookies-grey { display: inline-block;width: 16px;height: 16px;border: 2px solid #828282;border-radius: 3px;box-sizing: border-box;vertical-align: middle; }';

			html += '.containerCookies input[type=checkbox]:checked + .checkbox_cookies { background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptOC43OTUgMTQuODI1bC0zLjQyLTMuNTctMi4xNyAyLjMxIDUuNTkgNS41OSAxMi0xMi0yLjAxLTIuMzF6IiBmaWxsPSIjM2M4Y2Y1Ii8+PC9zdmc+); background-repeat: no-repeat;background-size: cover; }';
			html += '.containerCookies input[type=checkbox]:checked + .checkbox_cookies-grey { background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptOC43OTUgMTQuODI1bC0zLjQyLTMuNTctMi4xNyAyLjMxIDUuNTkgNS41OSAxMi0xMi0yLjAxLTIuMzF6IiBmaWxsPSIjODI4MjgyIi8+PC9zdmc+); background-repeat: no-repeat;background-size: cover; }';

			html += '@media screen and (max-width: 800px) {';
			html += '   .containerCookies { top: auto; }';
			html += '   .containerCookies .contentCookies_2 { padding: 20px 10px; }';
			html += '   .containerCookies .cookieShowDetails { display: inline-block;margin-left: 10px; }';
			html += '   .containerCookies .cookieTypeDetails { display: none; }';
			html += '}';
			html += '</style>';

			var temp = document.createElement('div');
			temp.innerHTML = html;      
			var fragment = document.createDocumentFragment();
			fragment.appendChild(temp);
			document.body.appendChild(fragment.cloneNode(true));

			document.getElementsByClassName('buttonCookies-close')[0].onclick = _closeModalPreferences;
			document.getElementsByClassName('buttonCookies-accept')[0].onclick = _dismissLinkClick;
		}

		function _refuserCookies() {
			// Set the cookie expiry to six months after today.
			var expiryDate = new Date();
			expiryDate.setMonth(expiryDate.getMonth() + 6);
			document.cookie = cookieName+'=marketing_0|videos_0|avisClients_0|sitesPartenaires_0; expires=' + expiryDate.toGMTString();

			// delete old cookie
			document.cookie = 'displayCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

			var overlayCookies = document.getElementsByClassName('overlayCookies')[0];
			if(overlayCookies){
				overlayCookies.parentNode.removeChild(overlayCookies);
			}
		}

		function _saveModalPreferences() {
			var cookieMarketing = document.getElementById('cookies_marketing');
			var cookieSettingMarketing = (cookieMarketing ? (cookieMarketing.checked ? '1' : '0') : '1');

			var cookieVideos = document.getElementById('cookies_videos');
			var cookieSettingVideos = (cookieVideos ? (cookieVideos.checked ? '1' : '0') : '1');

			var cookieAvisClients = document.getElementById('cookies_avis_clients');
			var cookieSettingAvisClients = (cookieAvisClients ? (cookieAvisClients.checked ? '1' : '0') : '1');

			var cookieSitesPartenaires = document.getElementById('cookies_sites_partenaires');
			var cookieSettingSitesPartenaires = (cookieSitesPartenaires ? (cookieSitesPartenaires.checked ? '1' : '0') : '1');

			// Set the cookie expiry to six months after today.
			var expiryDate = new Date();
			expiryDate.setMonth(expiryDate.getMonth() + 6);
			document.cookie = cookieName+'=marketing_'+cookieSettingMarketing+'|videos_'+cookieSettingVideos+'|avisClients_'+cookieSettingAvisClients+'|sitesPartenaires_'+cookieSettingSitesPartenaires+'; expires=' + expiryDate.toGMTString();

			// delete old cookie
			document.cookie = 'displayCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

			var overlayCookies = document.getElementsByClassName('overlayCookies')[0];
			if(overlayCookies){
				overlayCookies.parentNode.removeChild(overlayCookies);
			}
		}

		function _closeModalPreferences() {
			var overlayCookies = document.getElementsByClassName('overlayCookies')[0];
			overlayCookies.parentNode.removeChild(overlayCookies);
		}

		// Permet de redéfinir les préférences d'un groupe particulier
		function setPreference(type, old_val, new_val) {
			var cookie_found = false;
			var tab_cookies = document.cookie.split(';');
			for(var i in tab_cookies){
				var tab_item_cookie = tab_cookies[i].trim().split('=');
				if(tab_item_cookie[0] == cookieName && typeof tab_item_cookie[1] != 'undefined' && tab_item_cookie[1] != ''){
					var new_val_cookie = tab_item_cookie[1].replace(type+'_'+old_val, type+'_'+new_val);

					if(new_val_cookie.indexOf(type+'_'+new_val) > -1){
						cookie_found = true;

						// Set the cookie expiry to six months after today.
						var expiryDate = new Date();
						expiryDate.setMonth(expiryDate.getMonth() + 6);
						document.cookie = cookieName+'='+new_val_cookie+'; expires=' + expiryDate.toGMTString();
					}
				}
			}

			if(!cookie_found){
				var default_value = 'marketing_0|videos_0|avisClients_0|sitesPartenaires_0';
				default_value = default_value.replace(type+'_'+old_val, type+'_'+new_val);

				var expiryDate = new Date();
				expiryDate.setMonth(expiryDate.getMonth() + 6);
				document.cookie = cookieName+'='+default_value+'; expires=' + expiryDate.toGMTString();
			}
		}

		var exports = {};
		exports.showCookieConsentBar = showCookieConsentBar;
		exports.setPreference = setPreference;
		return exports;
	})();

	window.cookieChoices = cookieChoices;
	return cookieChoices;
})(this);