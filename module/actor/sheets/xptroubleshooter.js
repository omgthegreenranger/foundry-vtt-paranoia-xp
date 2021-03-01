import {XPBaseSheet} from "./xpbase";



export default class XPTroubleshooterActor extends XPBaseSheet{
    /** @override */
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            classes: ["XPBaseSheet", "sheet", "actor"],
            template: "system/paranoia_xp_unofficial/templates/actors/troubleshooter-sheet.html",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}]
            });
        }

    }


