//Import modules
import {NPCActor} from "./module/actor/sheets/xpnpc.js";
import {TroubleshooterActor} from "./module/actor/sheets/xptroubleshooter";
import {XPCharacter} from "./module/actor/xpcharacter";

Hooks.once('init', async function() {

    //Define custom entity classes
    CONFIG.Actor.entityClass=XPCharacter;

    //Register sheets
    Actors.unregisterSheet("core",ActorSheet);
    Actors.registerSheet("paranoia_xp_unofficial", TroubleshooterActor, {
        types: ["troubleshooter"],
        makeDefault:true,
        label:"XP.PC_Name_Label"
        });
    Actors.registerSheet("paranoia_xp_unofficial", NPCActor, {
        types: ["npc"],
        makeDefault:true,
        label:"XP.NPC"
        });


    })