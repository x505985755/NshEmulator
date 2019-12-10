//CreateAssassinWeapon(69,EquipmentQuality.purple1);

class Entry{
    name = "";
    value1 = 0;
    value2 = 0;
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
    Weapon: 0,
    ExternalWeapon: 1,
    InternalWeapon: 2,
}
//职业
var Profession = {
    //碎梦
    Assassin: 0,
    //素问
    Doctor: 1,
    //九零
    Summoner: 2,
    //龙吟
    Swordsman: 3,
    //铁衣
    Guard: 4,
    //血河
    Knight: 5,
    //神像
    Guqiner: 6,
}