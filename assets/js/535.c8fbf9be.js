(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{1647:function(e,t,n){"use strict";n.r(t);var r=n(26),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getresponse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getresponse"}},[e._v("#")]),e._v(" GetResponse")]),e._v(" "),n("p",[e._v("You can use these credentials to authenticate the following nodes with GetResponse.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GetResponse/"}},[e._v("GetResponse")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/GetResponseTrigger/"}},[e._v("GetResponse Trigger")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Create a "),n("a",{attrs:{href:"https://www.getresponse.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GetResponse"),n("OutboundLink")],1),e._v(" account.")]),e._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("⚠️ Callback URL with GetResponse")]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" The Redirect URL should be a URL in your domain. For example, "),n("code",[e._v("https://mytemplatemaker.example.com/gr_callback")]),e._v(". GetResponse doesn't accept the localhost callback URL. Refer to the "),n("a",{attrs:{href:"#_1-how-to-configure-the-oauth-credentials-for-the-local-environment"}},[e._v("FAQs")]),e._v(" to learn to configure the credentials for the local environment.")])]),e._v(" "),n("ol",[n("li",[e._v("Open your "),n("a",{attrs:{href:"https://app.getresponse.com/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("GetResponse dashboard"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Menu")])]),e._v(" and select 'Integrations and API'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Custom apps")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Register your app")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter all the necessary information.")]),e._v(" "),n("li",[e._v("Copy your OAuth Callback URL from the 'Create New Credentials' screen in n8n and paste it in the "),n("em",[n("strong",[e._v("Redirect URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Click on the app you created to get the "),n("em",[n("strong",[e._v("Client ID")])]),e._v(" and the "),n("em",[n("strong",[e._v("Client Secret")])]),e._v(".")]),e._v(" "),n("li",[e._v("Copy the displayed "),n("em",[n("strong",[e._v("Client ID")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter a name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'GetResponse OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste the Client ID in the "),n("em",[n("strong",[e._v("Client ID")])]),e._v(" field in the 'GetResponse OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Copy the "),n("em",[n("strong",[e._v("Client secret key")])]),e._v(" from GetResponse.")]),e._v(" "),n("li",[e._v("Paste it in the "),n("em",[n("strong",[e._v("Client Secret")])]),e._v(" field in the 'GetResponse OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click on the circle button in the OAuth section to connect a GetResponse account to n8n.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button to save your credentials in n8n.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/UFMpTJyPY4w",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"using-api-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-api-key"}},[e._v("#")]),e._v(" Using API Key")]),e._v(" "),n("ol",[n("li",[e._v("Open your "),n("a",{attrs:{href:"https://app.getresponse.com/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("GetResponse dashboard"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Menu")])]),e._v(" and select 'Integrations and API'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("API")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Generate API key")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter a name for your key.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Generate")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Copy the displayed "),n("em",[n("strong",[e._v("API key")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter a name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'GetResponse API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste the API key in the "),n("em",[n("strong",[e._v("API Key")])]),e._v(" field in the 'GetResponse API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click the "),n("em",[n("strong",[e._v("Create")])]),e._v(" button to create your credentials in n8n.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/hs7nwmpQujk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-to-configure-the-oauth-credentials-for-the-local-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-the-oauth-credentials-for-the-local-environment"}},[e._v("#")]),e._v(" How to configure the OAuth credentials for the local environment?")]),e._v(" "),n("p",[e._v("GetResponse doesn't accept the localhost callback  URL. However, you can follow the steps mentioned below to configure the OAuth credentials for the local environment:")]),e._v(" "),n("ol",[n("li",[e._v("We will use "),n("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngrok"),n("OutboundLink")],1),e._v(" to expose the local server running on port "),n("code",[e._v("5678")]),e._v(" to the internet. In your terminal, run the following command:")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ngrok http "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5678")]),e._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Run the following command in a new terminal. Replace "),n("code",[e._v("<YOUR-NGROK-URL>")]),e._v(" with the URL that you get from the previous step.")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WEBHOOK_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("YOUR-NGROK-URL"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Start your n8n instance.")]),e._v(" "),n("li",[e._v("Follow the instructions mentioned in the "),n("a",{attrs:{href:"#using-oauth"}},[e._v("Using OAuth")]),e._v(" section to configure your credentials.")])]),e._v(" "),n("h2",{attrs:{id:"further-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reference"}},[e._v("#")]),e._v(" Further Reference")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://apidocs.getresponse.com/v3/case-study/oauth2-authorization-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0 - Authorization Code"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://apireference.getresponse.com/#section/Authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authentication - API key"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);