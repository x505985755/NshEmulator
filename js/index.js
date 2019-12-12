function BuyEquipment(type, quality) {
    let v = CreateEquipment(type, Profession.Assassin, 69, quality);
    let v1 = v.toJson();
    rawData.BagSlotData.push(v1);
    $($(".skill-list")[0]).append("<li class='item bg-color-" + getEquipmentColorByQuality(v.quality) + " js_daoju_tips' data-tips='" + JSON.stringify(v1) + "'><p class='pic-wrap'><img src='https://cbg-n.res.netease.com/images/role/" + v1.bigIconId + ".png'></p></li>");
}