function buyWeapon() {
    var v = CreateWeapon(Profession.Assassin, 69, EquipmentQuality.purple1);
    let entry = "";
    for (var i = 0; i < v.entryList.length; i++) {
        entry += getEntryColorByQuality(v.quality) + v.entryList[i].name + "#r";
    }
    var v1 = {
        "maskColorAlpha": 0,
        "isFastFood": false,
        "isSeed": false,
        "isCodeLock": false,
        "isBind": true,
        "slotIndex": 1,
        "iconId": "Weapon_1_1001f02",
        "tooltip": {
            "Fastness": "#cfffea5装备耐久: #W1000/1000",
            "isWashed": false,
            //"BriefInfo": "        #cF8DF60按【ctrl】键展开详细信息#r                   #I(Equiptooltip_Brief)#r#cC26AF5【玉魄·游龙上九霄】",
            "isTimeLock": false,
            "Score": "#Color_Default装备评分: 8752",
            "MergeCoutDesc": "本周已重锻次数：0（周日0点刷新）。",
            "TooltipType": 3,
            "Upgrade": "",
            "Class": "#cfffea5职业需求: #W碎梦",
            //"SuitName": "#cC26AF5[龙腾套装] (#cC26AF52/#cC26AF54/#cC26AF56#cC26AF5)",
            //"SuitScore": "套装评分：1378",
            "isCodeLock": false,
            //"Description": "#W4级蓝田玉: #cF8DF60最小外功攻击 #cfffea5+31#cF8DF60，最大外功攻击 #cfffea5+59#r#W4级昆仑玉: #cF8DF60外功命中 #cfffea5+10#r#W4级虎牙玉符: #cF8DF60外功会心 #cfffea5+10#r#W4级金章玉笏: #cF8DF60外功会心伤害 #cfffea5+5.2%#r#W4级如意玉钩: #cF8DF60外功破防 #cfffea5+4.2%#r#cC26AF5【玉魄·游龙上九霄】#r#cC26AF5外功攻击: #cEEAAE8+219#r#cC26AF5外功破防: #cEEAAE8+300#r",
            "irrelevantWord": "#Color_MissionBlue【重锻】#Color_Default与本装备#Color_MissionBlue词条互斥#Color_Default的装备：#Color_MissionBlue内功武器、所有防具、内功戒指、内功手镯、内功项链#Color_Default",
            //"SuitEffect": "#cC26AF5[2] #cC26AF5气血上限 #cEEAAE8+491#r#n#cC26AF5[4] #cC26AF5根骨 #cEEAAE8+7#r#n#cC26AF5[6] #cC26AF5基础气血上限 #cEEAAE8+5.0%#r#n",
            "BigIcon": "Weapon_1_1001f02",
            "BasicProp": "#cfffea5外功攻击: #W" + v.realExternalMinPower + " - " + v.realExternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5内功攻击: #W" + v.realInternalMinPower + " - " + v.realInternalMaxPower + "#cfffea5(" + v.minPowerMax + " - " + v.maxPowerMax + ") #r#cfffea5攻击速度：#W" + v.speed + " #cfffea5(" + v.part1.maxSpeed + " " + getEquipmentByQuality(v.part1.quality) + v.part1.name + "#cfffea5)#r#cfffea5攻击范围：#W" + v.range + " #cfffea5(" + v.part2.maxRange + " " + getEquipmentByQuality(v.part2.quality) + v.part2.name + "#cfffea5)#r#cfffea5攻击效果：#W" + v.part3.effect + " #cfffea5(" + getEquipmentByQuality(v.part3.quality) + v.part3.name + "#cfffea5)",
            "Type": "长刀",
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
        "bigIconId": "Weapon_1_1001f02",
        "quality": 6,
        "count": 1,
        "name": v.name,
        "colorType": 9,
        "index": 2
    }
    rawData.BagSlotData.push(v1);
    $($(".skill-list")[0]).append("<li class='item bg-color-purple js_daoju_tips' data-tips='" + JSON.stringify(v1) + "'><p class='pic-wrap'><img src='https://cbg-n.res.netease.com/images/role/" + v1.bigIconId + ".png'></p></li>");
}