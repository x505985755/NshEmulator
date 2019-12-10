//CreateAssassinWeapon(69,EquipmentQuality.purple1);
function CreateEquipment(type, profession, level, quality) {
    switch (type) {
        case EquipmentType.Weapon: return  CreateWeapon(profession, level, quality);
        default:
    }
}
//function CreateWeapon(profession, level, quality) {
//    switch (profession) {
//        case Profession.Assassin: return CreateAssassinWeapon(level, quality);
//        default:
//    }

//}
function CreateWeapon(profession,level, quality) {
    if (Number(quality) >= 5) {
        let weapon = new Weapon();
        weapon.level = parseInt(level / 10) * 10;
        weapon.part1 = CreateWeaponPart1(profession,level, quality);
        weapon.speed = weapon.part1.speed.toFixed(2);
        weapon.part2 = CreateWeaponPart2(profession,level, quality);
        weapon.range = weapon.part2.range.toFixed(2);
        weapon.part3 = CreateWeaponPart3(profession,level, quality);
        weapon.poetry = weapon.part3.poetry;
        weapon.name = weapon.part3.weaponName;
        weapon.quality = quality;
        weapon.groupEntry = "";
        if (weapon.part1.groupName == weapon.part2.groupName && weapon.part2.groupName == weapon.part3.groupName) {
            weapon.name = weapon.part1.groupName + "·" + weapon.name;
            weapon.groupEntry = weapon.part3.groupEntry;
        }
        weapon.minPowerMin = (Number(weapon.part3.minPowerMin) * 1.1255).toFixed(0);
        weapon.minPowerMax = (Number(weapon.part3.minPowerMax) * 1.1255).toFixed(0);
        weapon.maxPowerMin = (Number(weapon.part3.maxPowerMin) * 1.1255).toFixed(0);
        weapon.maxPowerMax = (Number(weapon.part3.maxPowerMax) * 1.1255).toFixed(0);

        weapon.realExternalMinPower = (Number(weapon.part3.realExternalMinPower) * 1.1255).toFixed(0);
        weapon.realExternalMaxPower = (Number(weapon.part3.realExternalMaxPower) * 1.1255).toFixed(0);

        weapon.realInternalMinPower = (Number(weapon.part3.realInternalMinPower) * 1.1255).toFixed(0);
        weapon.realInternalMaxPower = (Number(weapon.part3.realInternalMaxPower) * 1.1255).toFixed(0);
        


        weapon.entryList = new Array();
        for (var i = 0; i < 4; i++) {
            weapon.entryList[i] = CreateEntry(getWeaponType(profession), profession, level);
        }
        return weapon;
    }
    else {

    }
}
function CreateWeaponPart1(profession,level, quality) {
    if (quality == EquipmentQuality.purple1) {
        let part = new WeaponPart1();
        if (Math.random() < WeaponPartPurple1Possibility[0]) {
            part.quality = WeaponPartQuality.red;
        }
        else {
            part.quality = WeaponPartQuality.purple;
        }
        let l;
        switch (profession) {
            case Profession.Assassin: l = AssassinWeaponPart1[parseInt(level / 10)]; break;
            case Profession.Doctor: l = DoctorsWeaponPart1[parseInt(level / 10)]; break;
            case Profession.Summoner: l = SummonerWeaponPart1[parseInt(level / 10)]; break;
            case Profession.Swordsman: l = SwordsmanWeaponPart1[parseInt(level / 10)]; break;
            case Profession.Guard: l = GuardWeaponPart1[parseInt(level / 10)]; break;
            case Profession.Knight: l = KnightWeaponPart1[parseInt(level / 10)]; break;
            case Profession.Guqiner: l = GuqinerWeaponPart1[parseInt(level / 10)]; break;
            default:
        }

        let obj = randomObj2(l);
        part.name = obj.name;
        part.speed = randomNum(obj.minSpeed, obj.maxSpeed) + Number(part.quality) * 0.02;
        part.maxSpeed = obj.maxSpeed + Number(part.quality) * 0.02;
        part.groupName = obj.groupName;

        //let r = Math.random();
        //if (r < l[0].possibility) {
        //    part.name = l[0].name;
        //    part.speed = randomNum(l[0].minSpeed, l[0].maxSpeed) + Number(part.quality) * 0.02;
        //    part.maxSpeed = l[0].maxSpeed + Number(part.quality) * 0.02;
        //    part.groupName = l[0].groupName;
        //}
        //else if (r < l[0].possibility + l[1].possibility) {
        //    part.name = l[1].name;
        //    part.speed = randomNum(l[1].minSpeed, l[1].maxSpeed) + Number(part.quality) * 0.02;
        //    part.maxSpeed = l[1].maxSpeed + Number(part.quality) * 0.02;
        //    part.groupName = l[1].groupName;
        //}
        //else if (r < l[0].possibility + l[1].possibility + l[2].possibility) {
        //    part.name = l[2].name;
        //    part.speed = randomNum(l[2].minSpeed, l[2].maxSpeed) + Number(part.quality) * 0.02;
        //    part.maxSpeed = l[2].maxSpeed + Number(part.quality) * 0.02;
        //    part.groupName = l[2].groupName;
        //}

        return part;
    }
}
function CreateWeaponPart2(profession,level, quality) {
    if (quality == EquipmentQuality.purple1) {
        let part = new WeaponPart2();
        if (Math.random() < WeaponPartPurple1Possibility[0]) {
            part.quality = WeaponPartQuality.red;
        }
        else {
            part.quality = WeaponPartQuality.purple;
        }
        let l;
        switch (profession) {
            case Profession.Assassin: l = AssassinWeaponPart2[parseInt(level / 10)]; break;
            case Profession.Doctor: l = DoctorsWeaponPart2[parseInt(level / 10)]; break;
            case Profession.Summoner: l = SummonerWeaponPart2[parseInt(level / 10)]; break;
            case Profession.Swordsman: l = SwordsmanWeaponPart2[parseInt(level / 10)]; break;
            case Profession.Guard: l = GuardWeaponPart2[parseInt(level / 10)]; break;
            case Profession.Knight: l = KnightWeaponPart2[parseInt(level / 10)]; break;
            case Profession.Guqiner: l = GuqinerWeaponPart2[parseInt(level / 10)]; break;
            default:
        }
        let obj = randomObj2(l);
        part.name = obj.name;
        part.range = randomNum(obj.minRange, obj.maxRange) + Number(part.quality) * 0.02;
        part.maxRange = obj.maxRange + Number(part.quality) * 0.02;
        part.groupName = obj.groupName;

        return part;
    }
}
function CreateWeaponPart3(profession,level, quality) {
    if (quality == EquipmentQuality.purple1) {
        let part = new WeaponPart3();
        if (Math.random() < WeaponPartPurple1Possibility[0]) {
            part.quality = WeaponPartQuality.red;
        }
        else {
            part.quality = WeaponPartQuality.purple;
        }
        let l;
        switch (profession) {
            case Profession.Assassin: l = AssassinWeaponPart3[parseInt(level / 10)]; break;
            case Profession.Doctor: l = DoctorsWeaponPart3[parseInt(level / 10)]; break;
            case Profession.Summoner: l = SummonerWeaponPart3[parseInt(level / 10)]; break;
            case Profession.Swordsman: l = SwordsmanWeaponPart3[parseInt(level / 10)]; break;
            case Profession.Guard: l = GuardWeaponPart3[parseInt(level / 10)]; break;
            case Profession.Knight: l = KnightWeaponPart3[parseInt(level / 10)]; break;
            case Profession.Guqiner: l = GuqinerWeaponPart3[parseInt(level / 10)]; break;
            default:
        }
        let obj = randomObj2(l);
        part.name = obj.name;
        part.minPowerMax = obj.minPowerMax + obj.powerFix * (Number(part.quality) - 2);
        part.maxPowerMax = obj.maxPowerMax + obj.powerFix * (Number(part.quality) - 2);
        part.minPowerMin = obj.minPowerMin + obj.powerFix * (Number(part.quality) - 2);
        part.maxPowerMin = obj.maxPowerMin + obj.powerFix * (Number(part.quality) - 2);
        part.weaponName = obj.weaponName;
        part.groupName = obj.groupName;
        part.effect = obj.effect;
        part.poetry = obj.poetry; 
        part.groupEntry = obj.groupEntry;

        part.realExternalMaxPower = randomNum(part.maxPowerMin, part.maxPowerMax);
        part.realInternalMaxPower = randomNum(part.maxPowerMin, part.maxPowerMax);
        part.realExternalMinPower = randomNum(part.minPowerMin, part.minPowerMax);
        part.realInternalMinPower = randomNum(part.minPowerMin, part.minPowerMax);
        return part;
    }
}
function CreateEntry(type, profession, level) {
    let entries = EntryLibrary.getEntries(type, profession);
    //entries = entries.concat(UniversalEntry);
    //switch (type) {
    //    case EquipmentType.ExternalWeapon:
    //        entries = entries.concat(ExternalWeaponEntry);
    //        switch (profession) {
    //            case Profession.Assassin:
    //                entries = entries.concat(AssassinEntry);
    //            default:
    //        }
    //    default:
    //}
    let entryJson = entries[Math.floor((Math.random() * entries.length))];
    if (entryJson.rare === true) {
        if (Math.random() > RareEntryPossibility) {
            while (entryJson.rare === true) {
                entryJson = entries[Math.floor((Math.random() * entries.length))];
            }
        }
    }
    let entry = new Entry();
    entry.name = entryJson.name;
    let value = randomNum(entryJson.minValue, entryJson.maxValue)
    if (entryJson.float === true) {
        entry.value1 = value.toFixed(1);
    }
    else {
        entry.value1 = value.toFixed(0);
    }
    if (entryJson.tooValue === true) {
        let num = entry.value1;
        entry.value1 = (num - (num - entryJson.minValue) / 2).toFixed(0);
        entry.value2 = (num - (num - entryJson.maxValue) / 2).toFixed(0);
    }
    if (entryJson.name.indexOf("技能") >= 0 || entryJson.name.indexOf("心法") >= 0) {
        if (type == EquipmentType.ExternalWeapon || type == EquipmentType.InternalWeapon) {
            if (entry.value1 == 4) {
                entry.value1 = 3;
            }
        }
    }
    entry.name = format(entry.name, [entry.value1, entry.value2]);
    return entry;
}
function randomNum(minNum, maxNum) {
    return Math.random() * (maxNum - minNum) + minNum;
} 
function getEquipmentByQuality(quality) {
    switch (Number(quality)) {
        case 4: return "#cFF5252";
        case 5: return "#cC26AF5";
        default:
    }
}
function getEntryColorByQuality(quality) {
    switch (Number(quality)) {
        case 4: return "#cFF5252";
        case 5: return "#cC26AF5#cC26AF5#cC26AF5";
        case 6: return "#cC26AF5#cC26AF5#cC26AF5";
        default:
    }
}
function randomObj1(obj) {
    let r = Math.random();
    let possibility = obj[0].possibility;
    for (let i = 0; i < obj.length; i++) {
        if (r < possibility) {
            return obj[i].obj;
        }
        else {
            if (i != 0) {
                possibility += obj[i].possibility;
            }
        }
    }
    return obj[obj.length - 1].obj;
}
function randomObj2(obj) {
    let r = Math.random();
    let possibility = obj[0].possibility;
    for (let i = 0; i < obj.length; i++) {
        if (r < possibility) {
            return obj[i];
        }
        else {
            if (i != 0) {
                possibility += obj[i].possibility;
            }
        }
    }
    return obj[obj.length - 1];
}
function getWeaponType(profession) {
    switch (profession) {
        case Profession.Assassin: return EquipmentType.ExternalWeapon;
        default:
    }
}
function format(str,obj) {
    let i = 0;
    while (true) {
        let index = str.indexOf("{" + i + "}");
        if (index == -1) {
            break;
        }
        else {
            str = str.replace("{" + i + "}", obj[i]);
        }
        i++;
    }
    return str;
}
