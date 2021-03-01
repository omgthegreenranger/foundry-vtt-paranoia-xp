import {Actor} from "/module/actor/actor.js"

export class XPCharacter extends Actor{
    /**
     * Adds in dynamic data
     */
    prepareData(){
        super.prepareData();
        const actorDate =this.data;
        const data = actorData.data;
        const flags = actorData.flags;

        switch (actorData.type){
            case "troubleshooter":
                return this._prepareTroubleshooter(actorData);
            case "npc":
                return this._prepareNPC(actorData);
        }

    }

    /**
     * Do any precalc for Troubleshooter here
     * @param actorData
     * @private
     */
    _prepareTroubleshooter(actorData){
        const data=actorData.data;

    }

    /**
     * Do any precalc for NPCs here
     * @param actorData
     * @private
     */
    _prepareNPC(actorData){
        const data=actorData.data;

    }
}