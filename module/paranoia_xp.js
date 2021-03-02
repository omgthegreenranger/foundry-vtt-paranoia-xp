//Import modules
import {XPNPCActorSheet} from "./actor/sheets/xpnpc.js";
import {XPTroubleshooterActorSheet} from "./actor/sheets/xptroubleshooter.js";
import {XPCharacterActor} from "./actor/xpcharacter.js";
import { preloadHandlebarsTemplates } from "./templates/preload";

Hooks.once('init', async function() {
    console.log("Friend Computer boot process");

    game.paranoia_xp_unofficial = {
        XPCharacterActor
    };
    //Define custom entity classes
    CONFIG.Actor.entityClass=XPCharacterActor;

    //Register sheets
    Actors.unregisterSheet("core",ActorSheet);
    Actors.registerSheet("paranoia_xp_unofficial", XPTroubleshooterActorSheet, {
        types: ["troubleshooter"],
        makeDefault:true,
        label:"XP.PC_Name_Label"
        });
    Actors.registerSheet("paranoia_xp_unofficial", XPNPCActorSheet, {
        types: ["npc"],
        makeDefault:true,
        label:"XP.NPC"
        });

    preloadHandlebarsTemplates();
    console.log("Friend Computer Initialization complete");
    });