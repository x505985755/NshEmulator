//CreateAssassinWeapon(69,EquipmentQuality.purple1);
var v =
    [
        [0.5, 0.3, 0.2],
        [0.0, 0.5, 0.3, 0.2],
        [0.0, 0.5, 0.3, 0.2],
    ]

var InternalWeaponEntry = [
    "断玉",
    "砌玉",
    "气海",
    "内功命中",
    "内功会心",
    "内功破防",
    "内功破盾",
];
var ExternalWeaponEntry = [
    {
        name: "≮削金≯最大基础外功攻击: +{0}%", minValue: 12, maxValue: 17, rare: true
    },
    {
        name: "≮熔金≯最小基础外功攻击: +{0}%", minValue: 12, maxValue: 17, rare: true
    },
    {
        name: "力量: +{0}", minValue: 6, maxValue: 12
    },
    {
        name: "最小外功攻击: +{0}，最大外功攻击: +{1}", minValue: 60, maxValue: 130, tooValue: true
    },
    {
        name: "外功命中: +{0}", minValue: 5, maxValue: 10
    },
    {
        name: "外功会心: +{0}", minValue: 5, maxValue: 10
    },
    {
        name: "外功破防: +{0}", minValue: 30, maxValue: 70
    },
    {
        name: "外功破盾: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "全元素攻击: +{0}", minValue: 30, maxValue: 70
    },
    {
        name: "最终伤害: +{0}", minValue: 25, maxValue: 60
    },
    {
        name: "阴攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "阳攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "毒攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "血攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "火攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "冰攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "风攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "雷攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "土攻击: +{0}", minValue: 40, maxValue: 80
    },
    {
        name: "忽视阳抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视阴抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视毒抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视血抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视火抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视冰抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视风抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视土抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视阳抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "忽视阴抗: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "对神像伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对素问伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对九零伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对碎梦伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对血河伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对龙吟伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对铁衣伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对神像伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对素问伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对九零伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对碎梦伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对血河伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对龙吟伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对铁衣伤害提高: +{0}%", minValue: 5, maxValue: 10, float: true
    },
    {
        name: "对五行伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对建筑伤害提高: +{0}", minValue: 50, maxValue: 100
    },
    {
        name: "对首领伤害提高: +{0}", minValue: 50, maxValue: 100
    },
];
//通用词条
var UniversalEntry = [
    {
        name: "身法: +{0}", minValue: 6, maxValue: 12
    },
    {
        name: "幸运: +{0}", minValue: 6, maxValue: 15
    },
    {
        name: "控制增强: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "减速增强: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "封脉增强: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "位移增强: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "冰冻增强: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "沉默增强: +{0}", minValue: 10, maxValue: 30
    },
    {
        name: "「逆水之寒」：装备基础属性提升{0}%", minValue: 30, maxValue: 30, rare: true
    },
    {
        name: "「凭风凌绝」：装备基础属性提升{0}%", minValue: 15, maxValue: 15, rare: true
    },
];
var AssassinEntry = [
    {
        name: "碎梦技能「一梦千一」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「心剑」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「碎影」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「百裂千击」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「十击」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「荆轲现匕」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「刹那」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「月轮」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「月影碎空」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「碧血丹青」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「断肠」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「无尽·绝」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「入梦之光」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「无尽·灭」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「梦隐」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「无尽·闪」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「无尽·影」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「黯灭」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「影摄魂」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「云雀」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「流星追月」: + {0}", minValue: 2, maxValue: 4
    },
    {
        name: "碎梦技能「追魂」: + {0}", minValue: 2, maxValue: 4
    }
];
var WeaponPartType = {
    Power: 0,
    Range: 1,
    Speed: 2,
}
var AssassinWeaponPart1 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [{ groupName: "曹彬", name: "曹彬·乌皮鞘", possibility: 0.20, type: WeaponPartType.Power, maxSpeed: 0.93, minSpeed: 0.89 }, { groupName: "蒲元", name: "蒲元·附耳鞘", possibility: 0.40, type: WeaponPartType.Range, maxSpeed: 0.88, minSpeed: 0.82 }, { groupName: "豫让", name: "豫让·连叶鞘", possibility: 0.40, type: WeaponPartType.Speed, maxSpeed: 0.98, minSpeed: 0.92 }],
    [],
    [],
];
var AssassinWeaponPart2 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [{ groupName: "曹彬", name: "曹彬·方纹柄", possibility: 0.40, type: WeaponPartType.Power, maxRange: 0.93, minRange: 0.89 }, { groupName: "蒲元", name: "蒲元·硬木柄", possibility: 0.40, type: WeaponPartType.Range, maxRange: 0.98, minRange: 0.92 }, { groupName: "豫让", name: "豫让·追魂柄", possibility: 0.20, type: WeaponPartType.Speed, maxRange: 0.88, minRange: 0.82 }],
    [],
    [],
];
var AssassinWeaponPart3 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [{ groupName: "曹彬", groupEntry: "#c29DA42曹彬#r#c74E85E≮削金≯最大基础外功攻击 #c9DE7A4+12.0%#r", name: "曹彬·陈刃", weaponName: "乱星刀", possibility: 0.40, type: WeaponPartType.Power, maxPowerMax: 494, maxPowerMin: 394, minPowerMax: 250, minPowerMin: 170, effect: "#cC26AF5高基础攻击#cC26AF5", poetry: "萧条已入寒空静，飒沓仍随秋雨飞", powerFix: 24.8 }, { groupName: "蒲元", groupEntry: "#c29DA42蒲元#r#c74E85E≮削金≯最大基础外功攻击 #c9DE7A4+12.0%#r", name: "蒲元·菱形刃", weaponName: "淬厉刀", possibility: 0.20, type: WeaponPartType.Range, maxPowerMax: 395, maxPowerMin: 295, minPowerMax: 150, minPowerMin: 70, effect: "#cC26AF5每次攻击有2.00%几率对对方造成2秒2级流血效果#cC26AF5", poetry: "炼质才三尺，吹毛过百重。", powerFix: 20 }, { groupName: "豫让", groupEntry: "#c29DA42豫让#r#c74E85E≮削金≯最大基础外功攻击 #c9DE7A4+12.0%#r", name: "豫让·速刃", weaponName: "金错刀", possibility: 0.40, type: WeaponPartType.Speed, maxPowerMax: 420, maxPowerMin: 320, minPowerMax: 180, minPowerMin: 100, effect: "#cC26AF5每次攻击有2.00%几率对对方造成2秒2级迟缓效果#cC26AF5", poetry: "侠肠烈胆矢精诚，只为报仇不为生。", powerFix: 21}],
    [],
    [],
];
//百炼武器红色分块和紫色分块概率
var WeaponPartPurple1Possibility = [
    0.9, 0.1
]
//稀有词条保留概率
var RareEntryPossibility = 0.1