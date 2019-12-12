//CreateAssassinWeapon(69,EquipmentQuality.purple1);

class Entry{
    name = "";
    value1 = 0;
    value2 = 0;
    score = 0;
}
class Weapon{
    name = "";
    level = 0;
    part1 = null;
    part2 = null;
    part3 = null;
    quality = null;
    minPowerMin = 0;//小攻的最小值
    minPowerMax = 0;//小攻的最大值
    maxPowerMin = 0;//大功的最小值
    maxPowerMax = 0;//大功的最大值
    range = 0;
    speed = 0;
    realExternalMinPower = 0;
    realInternalMinPower = 0;
    realExternalMaxPower = 0;
    realInternalMaxPower = 0;
    entryList = [];
    poetry = "";
    groupEntry = "";
    score = 0;
    type = "";
    profession = "";
    icon = "";
    toJson = function () {
        let v = this;

        let entry = "";
        for (var i = 0; i < v.entryList.length; i++) {
            entry += getEntryColorByQuality(v.quality) + v.entryList[i].name + "#r";
        }
        let v1;
        if (v.quality>=5) {
            v1 = {
                "maskColorAlpha": 0,
                "isFastFood": false,
                "isSeed": false,
                "isCodeLock": false,
                "isBind": true,
                "slotIndex": 1,
                "iconId": v.icon,
                "tooltip": {
                    "Fastness": "#cfffea5装备耐久: #W1000/1000",
                    "isWashed": false,
                    //"BriefInfo": "        #cF8DF60按【ctrl】键展开详细信息#r                   #I(Equiptooltip_Brief)#r#cC26AF5【玉魄·游龙上九霄】",
                    "isTimeLock": false,
                    "Score": "#Color_Default装备评分: 8752",
                    "MergeCoutDesc": "本周已重锻次数：0（周日0点刷新）。",
                    "TooltipType": 3,
                    "Upgrade": "",
                    "Class": "#cfffea5职业需求: #W" + v.profession,
                    //"SuitName": "#cC26AF5[龙腾套装] (#cC26AF52/#cC26AF54/#cC26AF56#cC26AF5)",
                    //"SuitScore": "套装评分：1378",
                    "isCodeLock": false,
                    //"Description": "#W4级蓝田玉: #cF8DF60最小外功攻击 #cfffea5+31#cF8DF60，最大外功攻击 #cfffea5+59#r#W4级昆仑玉: #cF8DF60外功命中 #cfffea5+10#r#W4级虎牙玉符: #cF8DF60外功会心 #cfffea5+10#r#W4级金章玉笏: #cF8DF60外功会心伤害 #cfffea5+5.2%#r#W4级如意玉钩: #cF8DF60外功破防 #cfffea5+4.2%#r#cC26AF5【玉魄·游龙上九霄】#r#cC26AF5外功攻击: #cEEAAE8+219#r#cC26AF5外功破防: #cEEAAE8+300#r",
                    "irrelevantWord": "#Color_MissionBlue【重锻】#Color_Default与本装备#Color_MissionBlue词条互斥#Color_Default的装备：#Color_MissionBlue内功武器、所有防具、内功戒指、内功手镯、内功项链#Color_Default",
                    //"SuitEffect": "#cC26AF5[2] #cC26AF5气血上限 #cEEAAE8+491#r#n#cC26AF5[4] #cC26AF5根骨 #cEEAAE8+7#r#n#cC26AF5[6] #cC26AF5基础气血上限 #cEEAAE8+5.0%#r#n",
                    "BigIcon": v.icon,
                    "BasicProp": "#cfffea5外功攻击: #W" + v.realExternalMinPower + " - " + v.realExternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5内功攻击: #W" + v.realInternalMinPower + " - " + v.realInternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5攻击速度：#W" + v.speed + " #cfffea5(" + v.part1.maxSpeed.toFixed(2) + " " + getEquipmentByQuality(v.part1.quality) + v.part1.name + "#cfffea5)#r#cfffea5攻击范围：#W" + v.range + " #cfffea5(" + v.part2.maxRange.toFixed(2) + " " + getEquipmentByQuality(v.part2.quality) + v.part2.name + "#cfffea5)#r#cfffea5攻击效果：#W" + getEffectColorByQuality(v.part3.quality) + v.part3.effect + getEffectColorByQuality(v.part3.quality) + " #cfffea5(" + getEquipmentByQuality(v.part3.quality) + v.part3.name + "#cfffea5)",
                    "Type": v.type,
                    //"JadeInfo": [{
                    //    "EffectStr": "UIBase_JadeEffectMc",
                    //    "renderer": "UIBase_EffectIconRenderer",
                    //    "IconStr": "item_21040093"
                    //}, {
                    //    "EffectStr": "UIBase_JadeEffectMc",
                    //    "renderer": "UIBase_EffectIconRenderer",
                    //    "IconStr": "item_21040123"
                    //}, {
                    //    "renderer": "UIBase_EffectIconRenderer",
                    //    "IconStr": "item_21040528"
                    //}, {
                    //    "EffectStr": "UIBase_JadeEffectMc",
                    //    "renderer": "UIBase_EffectIconRenderer",
                    //    "IconStr": "item_21040558"
                    //}, {
                    //    "EffectStr": "UIBase_JadeEffectMc",
                    //    "renderer": "UIBase_EffectIconRenderer",
                    //    "IconStr": "item_21040603"
                    //}],
                    "Name": "#F(18)" + v.name,
                    "EquipColor": 6,
                    "EquipDescription": v.poetry,
                    //"Word": "#cC26AF5#cC26AF5#cC26AF5最小外功攻击: #cEEAAE8+49#cC26AF5，最大外功攻击: #cEEAAE8+75#r#cC26AF5力量: #cEEAAE8+11#r#cC26AF5碎梦心法「心剑」: #cEEAAE8+3#r#cC26AF5力量: #cEEAAE8+10#r#cC26AF5碎梦技能「一梦千一」: #cEEAAE8+2#r" + v.groupEntry,
                    "Word": entry + v.groupEntry,
                    "Bind": "#cF8DF60已绑定",
                    "Level": "#cfffea5等级要求: #cFFFFFF" + v.level,
                    "cornerIconId": "",
                    "TemplateId": 23070006,
                    "PropRequire": "#cfffea5力量要求: #W127"
                },
                "isBroken": false,
                "maskColor": 0,
                "bigIconId": v.icon,
                "quality": v.quality,
                "count": 1,
                "name": v.name,
                "colorType": 9,
                "index": 2
            }
        }
        else {
            v1 = {
                "maskColorAlpha": 0,
                "isFastFood": false,
                "isSeed": false,
                "isCodeLock": false,
                "isBind": true,
                "slotIndex": 54,
                "iconId": v.icon,
                "tooltip": {
                    "Fastness": "#cfffea5装备耐久: #W1000/1000",
                    "isWashed": false,
                    "isTimeLock": false,
                    "Score": "#Color_Default装备评分: 2602",
                    "MergeCoutDesc": "本周已重锻次数：0（周日0点刷新）。",
                    "TooltipType": 3,
                    "Upgrade": "",
                    "Class": "#cfffea5职业需求: #W" + v.profession,
                    "Description": "",
                    "irrelevantWord": "#Color_MissionBlue【重锻】#Color_Default与本装备#Color_MissionBlue词条互斥#Color_Default的装备：#Color_MissionBlue所有防具#Color_Default",
                    "BigIcon": v.icon,
                    "BasicProp": "#cfffea5外功攻击: #W" + v.realExternalMinPower + " - " + v.realExternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5内功攻击: #W" + v.realInternalMinPower + " - " + v.realInternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5攻击速度：#W1.00 #cfffea5(1.00)#r#cfffea5攻击范围：#W1.00 #cfffea5(1.00)",
                    "Type": v.type,
                    "Name": "#F(18)" + v.name,
                    "cornerIconId": "",
                    "isCodeLock": false,
                    "EquipDescription": v.poetry,
                    "Word": entry + v.groupEntry,
                    "Bind": "#cF8DF60已绑定",
                    "EquipColor": 4,
                    "TemplateId": 23000064,
                    "Level": "#cfffea5等级要求: #cFFFFFF" + v.level
                },
                "isBroken": false,
                "maskColor": 0,
                "bigIconId": v.icon,
                "quality": v.quality,
                "count": 1,
                "name": v.name,
                "colorType": 7
            }
        }
        return v1;
    }
}
class WeaponPart1{
    name = "";
    level = 0;
    quality = null;
    speed = 0;
    maxSpeed = 0;
    groupName = "";
    score = 0;
}
class WeaponPart2{
    name = "";
    level = 0;
    quality = null;
    range = 0;
    maxRange = 0;
    groupName = "";
    score = 0;
}
class WeaponPart3{
    name = "";
    level = 0;
    quality = null;
    minPowerMin = 0;//小攻的最小值
    minPowerMax = 0;//小攻的最大值
    maxPowerMin = 0;//大功的最小值
    maxPowerMax = 0;//大功的最大值
    realExternalMinPower = 0;
    realInternalMinPower = 0;
    realExternalMaxPower = 0;
    realInternalMaxPower = 0;
    weaponName = "";
    groupName = "";
    effect = "";

    poetry = "";
    groupEntry = "";
    score = 0;
    
}
class Equipment {
    name = "";
    level = 0;
    quality = null;
    poetry = "";
    score = 0;
    entryList = [];
    icon = "";
    type = "";
}
class Ring extends Equipment{
    minPowerMin = 0;//小攻的最小值
    minPowerMax = 0;//小攻的最大值
    maxPowerMin = 0;//大功的最小值
    maxPowerMax = 0;//大功的最大值
    realExternalMinPower = 0;
    realInternalMinPower = 0;
    realExternalMaxPower = 0;
    realInternalMaxPower = 0;
    toJson = function () {
        let v = this;

        let entry = "";
        for (var i = 0; i < v.entryList.length; i++) {
            entry += getEntryColorByQuality(v.quality) + v.entryList[i].name + "#r";
        }
        let v1;
        v1 = {
            "maskColorAlpha": 0,
            "isFastFood": false,
            "isSeed": false,
            "isCodeLock": false,
            "isBind": true,
            "slotIndex": 1,
            "iconId": v.icon,
            "tooltip": {
                "Fastness": "#cfffea5装备耐久: #W1000/1000",
                "isWashed": false,
                //"BriefInfo": "        #cF8DF60按【ctrl】键展开详细信息#r                   #I(Equiptooltip_Brief)#r#cC26AF5【玉魄·游龙上九霄】",
                "isTimeLock": false,
                "Score": "#Color_Default装备评分: 8752",
                "MergeCoutDesc": "本周已重锻次数：0（周日0点刷新）。",
                "TooltipType": 3,
                "Upgrade": "",
                "Class": "#cfffea5职业需求: #W" + v.profession,
                //"SuitName": "#cC26AF5[龙腾套装] (#cC26AF52/#cC26AF54/#cC26AF56#cC26AF5)",
                //"SuitScore": "套装评分：1378",
                "isCodeLock": false,
                //"Description": "#W4级蓝田玉: #cF8DF60最小外功攻击 #cfffea5+31#cF8DF60，最大外功攻击 #cfffea5+59#r#W4级昆仑玉: #cF8DF60外功命中 #cfffea5+10#r#W4级虎牙玉符: #cF8DF60外功会心 #cfffea5+10#r#W4级金章玉笏: #cF8DF60外功会心伤害 #cfffea5+5.2%#r#W4级如意玉钩: #cF8DF60外功破防 #cfffea5+4.2%#r#cC26AF5【玉魄·游龙上九霄】#r#cC26AF5外功攻击: #cEEAAE8+219#r#cC26AF5外功破防: #cEEAAE8+300#r",
                "irrelevantWord": "#Color_MissionBlue【重锻】#Color_Default与本装备#Color_MissionBlue词条互斥#Color_Default的装备：#Color_MissionBlue内功武器、所有防具、内功戒指、内功手镯、内功项链#Color_Default",
                //"SuitEffect": "#cC26AF5[2] #cC26AF5气血上限 #cEEAAE8+491#r#n#cC26AF5[4] #cC26AF5根骨 #cEEAAE8+7#r#n#cC26AF5[6] #cC26AF5基础气血上限 #cEEAAE8+5.0%#r#n",
                "BigIcon": v.icon,
                "BasicProp": "#cfffea5外功攻击: #W" + v.realExternalMinPower + " - " + v.realExternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5内功攻击: #W" + v.realInternalMinPower + " - " + v.realInternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ")",
                "Type": v.type,
                "Name": "#F(18)" + v.name,
                "EquipColor": 6,
                "EquipDescription": v.poetry,
                "Word": entry,
                "Bind": "#cF8DF60已绑定",
                "Level": "#cfffea5等级要求: #cFFFFFF" + v.level,
                "cornerIconId": "",
                "TemplateId": 23070006,
                "PropRequire": "#cfffea5力量要求: #W127"
            },
            "isBroken": false,
            "maskColor": 0,
            "bigIconId": v.icon,
            "quality": v.quality,
            "count": 1,
            "name": v.name,
            "colorType": 9,
            "index": 2
        }
        return v1;
    }
}
class ExternalRing extends Ring{
    type = "外功戒指";

}
class InternalRing extends Ring{
    type = "内功戒指";

}
class Bracelet extends Equipment{
    minHit = 0;//命中的最小值
    maxHit = 0;//命中的最大值
    realExternalHit = 0;//外功命中
    realInternalHit = 0;//内功命中
    toJson = function () {
        let v = this;

        let entry = "";
        for (var i = 0; i < v.entryList.length; i++) {
            entry += getEntryColorByQuality(v.quality) + v.entryList[i].name + "#r";
        }
        let v1;
        v1 = {
            "maskColorAlpha": 0,
            "isFastFood": false,
            "isSeed": false,
            "isCodeLock": false,
            "isBind": true,
            "slotIndex": 1,
            "iconId": v.icon,
            "tooltip": {
                "Fastness": "#cfffea5装备耐久: #W1000/1000",
                "isWashed": false,
                //"BriefInfo": "        #cF8DF60按【ctrl】键展开详细信息#r                   #I(Equiptooltip_Brief)#r#cC26AF5【玉魄·游龙上九霄】",
                "isTimeLock": false,
                "Score": "#Color_Default装备评分: 8752",
                "MergeCoutDesc": "本周已重锻次数：0（周日0点刷新）。",
                "TooltipType": 3,
                "Upgrade": "",
                "Class": "#cfffea5职业需求: #W" + v.profession,
                //"SuitName": "#cC26AF5[龙腾套装] (#cC26AF52/#cC26AF54/#cC26AF56#cC26AF5)",
                //"SuitScore": "套装评分：1378",
                "isCodeLock": false,
                //"Description": "#W4级蓝田玉: #cF8DF60最小外功攻击 #cfffea5+31#cF8DF60，最大外功攻击 #cfffea5+59#r#W4级昆仑玉: #cF8DF60外功命中 #cfffea5+10#r#W4级虎牙玉符: #cF8DF60外功会心 #cfffea5+10#r#W4级金章玉笏: #cF8DF60外功会心伤害 #cfffea5+5.2%#r#W4级如意玉钩: #cF8DF60外功破防 #cfffea5+4.2%#r#cC26AF5【玉魄·游龙上九霄】#r#cC26AF5外功攻击: #cEEAAE8+219#r#cC26AF5外功破防: #cEEAAE8+300#r",
                "irrelevantWord": "#Color_MissionBlue【重锻】#Color_Default与本装备#Color_MissionBlue词条互斥#Color_Default的装备：#Color_MissionBlue内功武器、所有防具、内功戒指、内功手镯、内功项链#Color_Default",
                //"SuitEffect": "#cC26AF5[2] #cC26AF5气血上限 #cEEAAE8+491#r#n#cC26AF5[4] #cC26AF5根骨 #cEEAAE8+7#r#n#cC26AF5[6] #cC26AF5基础气血上限 #cEEAAE8+5.0%#r#n",
                "BigIcon": v.icon,
                "BasicProp": "#cfffea5外功命中: #W" + v.realExternalHit + "#cfffea5(" + v.maxHit + ") #r#cfffea5内功命中: #W" + v.realInternalHit + "#cfffea5(" + v.maxHit + ") ",
                "Type": v.type,
                "Name": "#F(18)" + v.name,
                "EquipColor": 6,
                "EquipDescription": v.poetry,
                "Word": entry,
                "Bind": "#cF8DF60已绑定",
                "Level": "#cfffea5等级要求: #cFFFFFF" + v.level,
                "cornerIconId": "",
                "TemplateId": 23070006,
                "PropRequire": "#cfffea5力量要求: #W127"
            },
            "isBroken": false,
            "maskColor": 0,
            "bigIconId": v.icon,
            "quality": v.quality,
            "count": 1,
            "name": v.name,
            "colorType": 9,
            "index": 2
        }
        return v1;
    }
}
class ExternalBracelet extends Bracelet{
    type = "外功手镯";

}
class InternalBracelet extends Bracelet{
    type = "内功手镯";

}
//枚举
var EquipmentQuality = {
    white: 0,
    yellow: 1,
    green: 2,
    blue: 3,
    red: 4,
    purple: 5,
    purple1: 6,
}
var WeaponPartQuality = {
    green: 2,
    blue: 3,
    red: 4,
    purple: 5,
}
var EquipmentType = {
    ExternalWeapon: 1,
    InternalWeapon: 2,
    ExternalRing: 3,
    InternalRing: 4,
    ExternalNecklace: 5,
    InternalNecklace: 6,
    ExternalBracelet: 7,
    InternalBracelet: 8,
    Knife: 21,
    Sword: 22,
    Spear: 23,
    Guqin: 24,
    Lantern: 25,//灯笼
    Ribbon: 26,//丝带
    Ribbon: 27,
}
//职业
var Profession = {
    //碎梦
    Assassin: 1,
    //素问
    Doctor: 2,
    //九零
    Summoner: 3,
    //龙吟
    Swordsman: 4,
    //铁衣
    Guard: 5,
    //血河
    Knight: 6,
    //神像
    Guqiner: 7,
}
function getProfessionName(value) {
    for (var key in Profession) {

        if (Profession[key] == value) {
            return key;
        }

    }
}
function getProfessionZnName(value) {
    switch (value) {
        case Profession.Assassin: return "碎梦";
        case Profession.Doctor: return "素问";
        case Profession.Summoner: return "九零";
        case Profession.Swordsman: return "龙吟";
        case Profession.Guard: return "铁衣";
        case Profession.Knight: return "血河";
        case Profession.Guqiner: return "神像";
        default:
    }
}
function getProfessionWeaponType(value) {
    switch (value) {
        case Profession.Assassin: return "长刀";
        case Profession.Doctor: return "丝带";
        case Profession.Summoner: return "灯笼";
        case Profession.Swordsman: return "长剑";
        case Profession.Guard: return "拳套";
        case Profession.Knight: return "长枪";
        case Profession.Guqiner: return "长琴";
        default:
    }
}
function GetProfessionByWeapon(type) {
    switch (type) {
        case EquipmentType.Knife: return Profession.Assassin;
        case EquipmentType.Sword: return Profession.Swordsman;
        case EquipmentType.Spear: return Profession.Knight;
        case EquipmentType.Guqin: return Profession.Guqiner;
        case EquipmentType.Lantern: return Profession.Summoner;
        case EquipmentType.Ribbon: return Profession.Doctor;
        case EquipmentType.Knife: return Profession.Assassin;
        default:
    }
}