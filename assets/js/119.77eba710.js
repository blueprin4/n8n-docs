(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1200:function(e,t,o){e.exports=o.p+"assets/img/workflow.203f7bce.png"},1201:function(e,t,o){e.exports=o.p+"assets/img/QuickBooks_node.b627efcb.png"},1202:function(e,t,o){e.exports=o.p+"assets/img/QuickBooks1_node.2b674e88.png"},1203:function(e,t,o){e.exports=o.p+"assets/img/QuickBooks2_node.5da43f08.png"},2008:function(e,t,o){"use strict";o.r(t);var n=o(26),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"quickbooks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quickbooks"}},[e._v("#")]),e._v(" QuickBooks")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://quickbooks.intuit.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuickBooks"),n("OutboundLink")],1),e._v(" is an accounting software package developed by Intuit.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/QuickBooks/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.quickbooks"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a customer and an invoice, and send the invoice to the customer. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/949",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("QuickBooks")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1200),alt:"A workflow with the QuickBooks node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-quickbooks-node-create-customer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-quickbooks-node-create-customer"}},[e._v("#")]),e._v(" 2. QuickBooks node (create:customer)")]),e._v(" "),n("p",[e._v("This node will create a new customer in QuickBooks.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the QuickBooks node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/QuickBooks/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a display name in the "),n("em",[n("strong",[e._v("Display Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Primary Email Address'.")]),e._v(" "),n("li",[e._v("Enter the email address of the customer in the "),n("em",[n("strong",[e._v("Primary Email Address")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new customer.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1201),alt:"Using the QuickBooks node to create a new customer"}})]),e._v(" "),n("h3",{attrs:{id:"_3-quickbooks1-node-create-invoice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-quickbooks1-node-create-invoice"}},[e._v("#")]),e._v(" 3. QuickBooks1 node (create:invoice)")]),e._v(" "),n("p",[e._v("This node will create an invoice for the customer that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Invoice' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("For Customer")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > Id. You can also add the following expression: "),n("code",[e._v('{{$json["Id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Item")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Item' from the "),n("em",[n("strong",[e._v("Add Line Item Property")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select an item from the "),n("em",[n("strong",[e._v("Item")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Amount' from the "),n("em",[n("strong",[e._v("Add Line Item Property")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter an amount in the "),n("em",[n("strong",[e._v("Amount")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select 'Detail Type' from the "),n("em",[n("strong",[e._v("Add Line Item Property")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a type from the "),n("em",[n("strong",[e._v("Detail Type")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Description' from the "),n("em",[n("strong",[e._v("Add Line Item Property")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a description in the "),n("em",[n("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node creates an invoice for the customer that we created in the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1202),alt:"Using the QuickBooks node to create a new invoice"}})]),e._v(" "),n("h3",{attrs:{id:"_4-quickbooks2-node-send-invoice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-quickbooks2-node-send-invoice"}},[e._v("#")]),e._v(" 4. QuickBooks2 node (send:invoice)")]),e._v(" "),n("p",[e._v("This node will send the invoice that we created in the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),n("li",[e._v("Select 'Invoice' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Send' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Invoice ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > Id. You can also add the following expression: "),n("code",[e._v('{{$json["Id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter the email address of the customer in the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends the invoice to the customer.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1203),alt:"Using the QuickBooks node to send an invoice to a customer"}})])],1)}),[],!1,null,null,null);t.default=i.exports}}]);