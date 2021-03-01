//Import modules
import {XPNPCActor} from "./module/actor/sheets/xpnpc.js";
import {XPTroubleshooterActor} from "./module/actor/sheets/xptroubleshooter.js";
import {XPCharacter} from "./module/actor/xpcharacter.js";

Hooks.once('init', async function() {
    console.log("Friend Computer boot process")
    //Define custom entity classes
    CONFIG.Actor.entityClass=XPCharacter;

    //Register sheets
    Actors.unregisterSheet("core",ActorSheet);
    Actors.registerSheet("paranoia_xp_unofficial", XPTroubleshooterActor, {
        types: ["troubleshooter"],
        makeDefault:true,
        label:"XP.PC_Name_Label"
        });
    Actors.registerSheet("paranoia_xp_unofficial", XPNPCActor, {
        types: ["npc"],
        makeDefault:true,
        label:"XP.NPC"
        });


    })