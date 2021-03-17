export class ParanoiaXPItem extends Item {
  prepareData() {
    super.prepareData();

    const itemData = this.data;
    const data = itemData.data;
    const flags = itemData.flags;

    // Make separate methods for each Item type (skill,item,weapon, etc.) to keep
    // things organized.
    //if (itemData.type === 'skill') this._prepareSkillData(itemData);
  }
}