(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1275:function(e,t,o){e.exports=o.p+"assets/img/workflow.1126f39e.png"},1276:function(e,t,o){e.exports=o.p+"assets/img/Set_node.3e4009f3.png"},1277:function(e,t,o){e.exports=o.p+"assets/img/Strapi_node.bec73bc4.png"},1278:function(e,t,o){e.exports=o.p+"assets/img/Set1_node.b0a92d2a.png"},1279:function(e,t,o){e.exports=o.p+"assets/img/Strapi1_node.265dc955.png"},1280:function(e,t,o){e.exports=o.p+"assets/img/Strapi2_node.3cc1cf31.png"},2034:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"strapi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#strapi"}},[e._v("#")]),e._v(" Strapi")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.strapi.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strapi"),n("OutboundLink")],1),e._v("  is an open-source Headless CMS that gives developers the freedom to choose their tools and frameworks while also allowing editors to easily manage and distribute their content.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Strapi/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.strapi"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get an entry in Strapi. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/779",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Strapi")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1275),alt:"A workflow with the Strapi node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to set the title, content, and description for an entry of the content type "),n("code",[e._v("Post")]),e._v(". If you have a different content type in Strapi, set the values accordingly.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Title")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Automate Strapi with n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Content")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Strapi is a headless CMS. We will use Strapi and n8n to automate our content creation workflows.")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Description")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Learn how to automate Strapi with n8n.")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that node sets the value for title, content, and description.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1276),alt:"Using the Set node to set the data"}})]),e._v(" "),n("h3",{attrs:{id:"_2-strapi-node-create-entry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-strapi-node-create-entry"}},[e._v("#")]),e._v(" 2. Strapi node (create: entry)")]),e._v(" "),n("p",[e._v("This node will create an entry for the content type "),n("code",[e._v("posts")]),e._v(". If you have a different content type, use that content type instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Strapi node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Strapi/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("posts")]),e._v(" in the "),n("em",[n("strong",[e._v("Content Type")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Title, Content, Description")]),e._v(" in the "),n("em",[n("strong",[e._v("Columns")])]),e._v(" field. If you want to add data for other columns, enter those column names.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new entry in Strapi using the information from the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1277),alt:"Using the Strapi node to create an entry"}})]),e._v(" "),n("h3",{attrs:{id:"_3-set1-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-set1-node"}},[e._v("#")]),e._v(" 3. Set1 node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),n("code",[e._v("id")]),e._v(" and "),n("code",[e._v("slug")]),e._v(" in this node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Strapi > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Strapi"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("slug")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("automate-strapi-with-n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node sets the values of "),n("code",[e._v("id")]),e._v(" and "),n("code",[e._v("slug")]),e._v(". These values are passed to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{pre:!0,attrs:{src:o(1278),alt:"Using the Set node to set the values for id and slug"}})]),e._v(" "),n("h3",{pre:!0,attrs:{id:"_4-strapi1-node-update-entry"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-strapi1-node-update-entry"}},[e._v("#")]),e._v(" 4. Strapi1 node (update: entry)")]),e._v(" "),n("p",[e._v("This node will update the slug for the entry that we created using the Strapi node.")]),e._v(" "),n("div",{pre:!0,attrs:{"v-pre":""}},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Content Type")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Strapi > Parameters > contentType. You can also add the following expression: "),n("code",[e._v('{{$node["Strapi"].parameter["contentType"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id")]),e._v(" in the "),n("em",[n("strong",[e._v("Update Key")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("slug")]),e._v(" in the "),n("em",[n("strong",[e._v("Columns")])]),e._v(" field. If you want to update a different column, enter that column name instead.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])])]),n("p",[e._v("In the screenshot below, you will notice that the node adds a slug to the entry that we created using the Strapi node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1279),alt:"Using the Strapi node to update an entry"}})]),e._v(" "),n("h3",{attrs:{id:"_5-strapi2-node-get-entry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-strapi2-node-get-entry"}},[e._v("#")]),e._v(" 5. Strapi2 node (get: entry)")]),e._v(" "),n("p",[e._v("This node returns information about the entry that we created using the Strapi node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Content Type")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Strapi > Parameters > contentType. You can also add the following expression: "),n("code",[e._v('{{$node["Strapi"].parameter["contentType"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Entry ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Strapi > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Strapi1"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns information about the entry that we specified.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1280),alt:"Using the Strapi node to get information of an entry"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);