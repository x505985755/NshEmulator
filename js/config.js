//CreateAssassinWeapon(69,EquipmentQuality.purple1);
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
    [{ groupName: "曹彬", groupEntry: "#c29DA42曹彬#r#c74E85E≮削金≯最大基础外功攻击 #c9DE7A4+12.0%#r", name: "曹彬·陈刃", weaponName: "乱星刀", possibility: 0.40, type: WeaponPartType.Power, maxPowerMax: 494, maxPowerMin: 394, minPowerMax: 250, minPowerMin: 170, effect: "高基础攻击", poetry: "萧条已入寒空静，飒沓仍随秋雨飞", powerFix: 24.8 }, { groupName: "蒲元", groupEntry: "#c29DA42蒲元#r#c74E85E≮削金≯最大基础外功攻击 #c9DE7A4+12.0%#r", name: "蒲元·菱形刃", weaponName: "淬厉刀", possibility: 0.20, type: WeaponPartType.Range, maxPowerMax: 395, maxPowerMin: 295, minPowerMax: 150, minPowerMin: 70, effect: "每次攻击有2.00%几率对对方造成2秒2级流血效果", poetry: "炼质才三尺，吹毛过百重。", powerFix: 20 }, { groupName: "豫让", groupEntry: "#c29DA42豫让#r#c74E85E≮削金≯最大基础外功攻击 #c9DE7A4+12.0%#r", name: "豫让·速刃", weaponName: "金错刀", possibility: 0.40, type: WeaponPartType.Speed, maxPowerMax: 420, maxPowerMin: 320, minPowerMax: 180, minPowerMin: 100, effect: "每次攻击有2.00%几率对对方造成2秒2级迟缓效果", poetry: "侠肠烈胆矢精诚，只为报仇不为生。", powerFix: 21}],
    [],
    [],
];
//百炼武器红色分块和紫色分块概率
var WeaponPartPurple1Possibility = [
    0.9, 0.1
];
//紫色武器各分块概率
var WeaponPartPurplePossibility = [
    0.5, 0.45, 0.049, 0.001
];
//稀有词条保留概率
var RareEntryPossibility = 0.1;
//词条默认数量
var EquipmentQualityEntryQuantity = [
    0,1,1,2,3,4,4
]