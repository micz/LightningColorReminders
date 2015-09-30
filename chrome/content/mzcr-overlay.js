"use strict";

var miczLightningColorReminders = {

	onLoad:function(){
		const XUL = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
		window.removeEventListener("load", miczLightningColorReminders.onLoad, false);
		let alarmRichlist = document.getElementById("alarm-richlist");
		let parentItems = {};

		 // Make a copy of the child nodes as they get modified live
		 for each (let node in Array.slice(alarmRichlist.childNodes)) {
			// Check if the node is a valid alarm and is still part of DOM
			//if (node.parentNode && node.item && node.alarm && !(node.item.parentItem.hashId in parentItems)) {
				// We only need to acknowledge one occurrence for repeating items
				//parentItems[node.item.parentItem.hashId] = node.item.parentItem;
				// Add colors
			miczLightningColorReminders.addCalendarColor(node,XUL);
			//}
		 }
	},

//aggiungere un observer per questo: http://mxr.mozilla.org/comm-central/source/calendar/base/src/calAlarmMonitor.js#72
//per caricare i colori anche se la finestra è già aperta

	addCalendarColor:function(node,XUL){
		//dump('>>>>>>> node: '+JSON.stringify(node)+'\r\n');
		dump('>>>>>>> calendar name: '+JSON.stringify(node.item.calendar.name)+'\r\n');
		dump('>>>>>>> calendar id: '+JSON.stringify(node.item.calendar.id)+'\r\n');
		dump('>>>>>>> calendar color: '+JSON.stringify(node.item.calendar.getProperty("color"))+'\r\n');
		let cal_color=node.item.calendar.getProperty("color")||'a8c2e1';
		node.setAttribute('style','border-left:7px solid '+cal_color+';');
		//let cal_color_item = document.createElementNS(XUL, "vbox");
		//cal_color_item.setAttribute('style','width:7px;background-color:'+cal_color+';');
		//node.appendChild(cal_color_item);
		//node.insertBefore(cal_color_item,node.childNodes[0]);
		//node.boxObject.firstChild.appendChild(cal_color_item);
		//node.insertBefore(cal_color_item,document.getAnonymousNodes(node)[0]);
		//let alarm_item=node.firstChild;
	},

};

window.addEventListener("load", miczLightningColorReminders.onLoad, false);
