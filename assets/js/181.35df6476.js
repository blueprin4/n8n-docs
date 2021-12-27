(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1457:function(t,e,a){t.exports=a.p+"assets/img/workflow.5d5ecebc.png"},1458:function(t,e,a){t.exports=a.p+"assets/img/StravaTrigger_node.6e4d4606.png"},1459:function(t,e,a){t.exports=a.p+"assets/img/Twitter_node.88f3e564.png"},2122:function(t,e,a){"use strict";a.r(e);var r=a(26),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"strava-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strava-trigger"}},[t._v("#")]),t._v(" Strava Trigger")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.strava.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strava"),r("OutboundLink")],1),t._v(" is an internet service for tracking human exercise which incorporates social network features.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),r("p",[t._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Strava/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("*")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("*")])]),t._v(" "),r("li",[t._v("Created")]),t._v(" "),r("li",[t._v("Deleted")]),t._v(" "),r("li",[t._v("Updated")])])]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("Activity")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("*")])]),t._v(" "),r("li",[t._v("Created")]),t._v(" "),r("li",[t._v("Deleted")]),t._v(" "),r("li",[t._v("Updated")])])]),t._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[t._v("Athlete")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("*")])]),t._v(" "),r("li",[t._v("Created")]),t._v(" "),r("li",[t._v("Deleted")]),t._v(" "),r("li",[t._v("Updated")])])]),t._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),r("p",[t._v("This workflow allows you to receive updates when a new activity gets created in Strava using the Strava Trigger node. It also allows you to tweet about the activity that was created in Strava using the Twitter node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/745",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),r("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following node.")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[t._v("Strava Trigger")])]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twitter/"}},[t._v("Twitter")])],1)]),t._v(" "),r("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1457),alt:"A workflow with the Strava Trigger node"}})]),t._v(" "),r("h3",{attrs:{id:"_1-strava-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-strava-trigger-node"}},[t._v("#")]),t._v(" 1. Strava Trigger node")]),t._v(" "),r("p",[t._v("This node will trigger the workflow when a new activity gets created in Strava.")]),t._v(" "),r("ol",[r("li",[t._v("First of all, you'll have to enter credentials for the Strava Trigger node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Strava/"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("li",[t._v("Select 'Activity' from the "),r("em",[r("strong",[t._v("Object")])]),t._v(" dropdown list.")]),t._v(" "),r("li",[t._v("Select 'created' from the "),r("em",[r("strong",[t._v("Event")])]),t._v(" dropdown list.")]),t._v(" "),r("li",[t._v("Click on "),r("em",[r("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),r("p",[t._v("In the screenshot below, you will notice that the node triggers the workflow when a new activity gets created in Strava.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1458),alt:"Using the Strava Trigger node to receive updates when a new activity is created"}})]),t._v(" "),r("h3",{attrs:{id:"_2-twitter-node-create-tweet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-twitter-node-create-tweet"}},[t._v("#")]),t._v(" 2. Twitter node (create: tweet)")]),t._v(" "),r("p",[t._v("This node will tweet about the activity that gets created in Strava.")]),t._v(" "),r("ol",[r("li",[t._v("First of all, you'll have to enter credentials for the Twitter node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Twitter/"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("li",[t._v("Click on the gears icon next to the "),r("em",[r("strong",[t._v("Text")])]),t._v(" field and click on "),r("em",[r("strong",[t._v("Add Expression")])]),t._v(".")])]),t._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"3"}},[r("li",[t._v("Enter the following text in the "),r("em",[r("strong",[t._v("Expression")])]),t._v(" field: "),r("code",[t._v('I ran {{$node["Strava Trigger"].json["object_data"]["distance"]}} meters and completed my {{$node["Strava Trigger"].json["object_data"]["name"]}}!')])]),t._v(" "),r("li",[t._v("Click on "),r("em",[r("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),r("p",[t._v("In the screenshot below, you will notice that this node gets the information of the activity in Strava from the previous node and tweets about it.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1459),alt:"Using the Twitter node to tweet about the activity"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("💡 Activate workflow for production")]),t._v(" "),r("p",[t._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Strava Trigger node.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);