import {XPBaseSheet} from "./xpbase";


export class XPNPCActor extends XPBaseSheet{
    /** @override */
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            classes: ["boilerplate", "sheet", "actor"],
            template: "system/paranoia_xp_unofficial/templates/actors/npc-sheet.html",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}]
            });
        }

    }


