import {XPBaseSheet} from "./xpbase";



export class XPTroubleshooterActorSheet extends XPBaseSheet{
    /** @override */
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            classes: ["paranoia_xp_unofficial", "sheet", "actor","troubleshooter"],
            template: "system/paranoia_xp_unofficial/templates/actors/troubleshooter-sheet.html",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}]
            });
        }

    }


