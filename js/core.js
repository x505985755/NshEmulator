//CreateAssassinWeapon(69,EquipmentQuality.purple1);
function CreateEquipment(type, profession, level, quality) {
    switch (type) {
        case EquipmentType.ExternalWeapon: return CreateWeapon(profession, level, quality);
        case EquipmentType.InternalWeapon: return CreateWeapon(profession, level, quality);
        case EquipmentType.ExternalRing: return CreateRing(type, level, quality);
        case EquipmentType.InternalRing: return CreateRing(type, level, quality);
        case EquipmentType.ExternalNecklace: return CreateNecklace(type, level, quality);
        case EquipmentType.InternalNecklace: return CreateNecklace(type, level, quality);
        case EquipmentType.ExternalBracelet: return CreateBracelet(type, level, quality);
        case EquipmentType.InternalBracelet: return CreateBracelet(type, level, quality);


        case EquipmentType.Knife: return CreateWeapon(GetProfessionByWeapon(type), level, quality);
        default:
    }
}
function CreateWeapon(profession, level, quality) {
    let weapon = new Weapon();
    if (Number(quality) >= 5) {
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
        weapon.profession = getProfessionZnName(profession);
        weapon.type = getProfessionWeaponType(profession);
        weapon.icon = EquipmentLibrary.find(x => x.level == weapon.level && x.quality == weapon.quality && x.type == weapon.type).icon;


    }
    else {
        weapon.level = parseInt(level / 10) * 10;
        weapon.part1 = null;
        weapon.speed = 1.00;
        weapon.part2 = null;
        weapon.range = 1.00;
        weapon.part3 = null;
        weapon.quality = quality;
        weapon.groupEntry = "";

        weapon.profession = getProfessionZnName(profession);
        weapon.type = getProfessionWeaponType(profession);

        let weaponData = EquipmentLibrary.find(x => x.level == weapon.level && x.quality == weapon.quality && x.type == weapon.type);


        weapon.minPowerMin = weaponData.minPowerMin.toFixed(0);
        weapon.minPowerMax = weaponData.minPowerMax.toFixed(0);
        weapon.maxPowerMin = weaponData.maxPowerMin.toFixed(0);
        weapon.maxPowerMax = weaponData.maxPowerMax.toFixed(0);

        weapon.realExternalMinPower = randomNum(weaponData.minPowerMin, weaponData.minPowerMax).toFixed(0);
        weapon.realExternalMaxPower = randomNum(weaponData.maxPowerMin, weaponData.maxPowerMax).toFixed(0);

        weapon.realInternalMinPower = randomNum(weaponData.minPowerMin, weaponData.minPowerMax).toFixed(0);
        weapon.realInternalMaxPower = randomNum(weaponData.maxPowerMin, weaponData.maxPowerMax).toFixed(0);

        weapon.icon = weaponData.icon;
        weapon.name = weaponData.name;
        weapon.poetry = weaponData.poetry;
        
    }
    weapon.entryList = new Array();
    for (var i = 0; i < EquipmentQualityEntryQuantity[quality]; i++) {
        weapon.entryList[i] = CreateEntry(getWeaponType(profession), profession, level);
    }
    return weapon;
}
function CreateWeaponPart1(profession, level, quality) {
    let part = new WeaponPart1();
    if (quality == EquipmentQuality.purple1) {
        if (Math.random() < WeaponPartPurple1Possibility[0]) {
            part.quality = WeaponPartQuality.red;
        }
        else {
            part.quality = WeaponPartQuality.purple;
        }
    }
    else {
        part.quality = randomObj3(WeaponPartPurplePossibility, [WeaponPartQuality.green, WeaponPartQuality.blue, WeaponPartQuality.red, WeaponPartQuality.purple]);
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

    return part;
}
function CreateWeaponPart2(profession,level, quality) {
        let part = new WeaponPart2();

        if (quality == EquipmentQuality.purple1) {
            if (Math.random() < WeaponPartPurple1Possibility[0]) {
                part.quality = WeaponPartQuality.red;
            }
            else {
                part.quality = WeaponPartQuality.purple;
            }
        }
        else {
            part.quality = randomObj3(WeaponPartPurplePossibility, [WeaponPartQuality.green, WeaponPartQuality.blue, WeaponPartQuality.red, WeaponPartQuality.purple]);
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
function CreateWeaponPart3(profession,level, quality) {
        let part = new WeaponPart3();
        if (quality == EquipmentQuality.purple1) {
            if (Math.random() < WeaponPartPurple1Possibility[0]) {
                part.quality = WeaponPartQuality.red;
            }
            else {
                part.quality = WeaponPartQuality.purple;
            }
        }
        else {
            part.quality = randomObj3(WeaponPartPurplePossibility, [WeaponPartQuality.green, WeaponPartQuality.blue, WeaponPartQuality.red, WeaponPartQuality.purple]);
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
function CreateRing(type, level, quality) {
    let ring;
    if (type == EquipmentType.ExternalRing) {
        ring = new ExternalRing();
    }
    else {
        ring = new InternalRing();
    }
    ring.quality = quality;
    ring.level = parseInt(level / 10) * 10 + 7;
    if (level < ring.level) {
        ring.level -= 10;
    }
    let ringData = EquipmentLibrary.find(x => x.level == ring.level && x.quality == ring.quality && x.type == ring.type);
    ring.minPowerMin = ringData.minPowerMin.toFixed(0);
    ring.minPowerMax = ringData.minPowerMax.toFixed(0);
    ring.maxPowerMin = ringData.maxPowerMin.toFixed(0);
    ring.maxPowerMax = ringData.maxPowerMax.toFixed(0);

    ring.realExternalMinPower = randomNum(ringData.minPowerMin, ringData.minPowerMax).toFixed(0);
    ring.realExternalMaxPower = randomNum(ringData.maxPowerMin, ringData.maxPowerMax).toFixed(0);

    ring.realInternalMinPower = randomNum(ringData.minPowerMin, ringData.minPowerMax).toFixed(0);
    ring.realInternalMaxPower = randomNum(ringData.maxPowerMin, ringData.maxPowerMax).toFixed(0);

    ring.icon = ringData.icon;
    ring.name = ringData.name;
    ring.poetry = ringData.poetry;
    ring.entryList = new Array();
    if (quality == EquipmentQuality.purple1) {
        if (type == EquipmentType.ExternalBracelet) {
            ring.entryList[0] = GetEntry("最小外功攻击");
            ring.entryList[1] = GetEntry("身法");
            ring.entryList[2] = GetEntry("全元素攻击");
            ring.entryList[3] = GetEntry("最终伤害");
        }
        else {
            ring.entryList[0] = GetEntry("最小内功攻击");
            ring.entryList[1] = GetEntry("身法");
            ring.entryList[2] = GetEntry("全元素攻击");
            ring.entryList[3] = GetEntry("最终伤害");
        }
    }
    else if (quality == EquipmentQuality.purple) {
        if (type == EquipmentType.ExternalBracelet) {
            ring.entryList[0] = GetEntry("外功命中");
            ring.entryList[1] = GetEntry("最小外功攻击");
            ring.entryList[2] = CreateEntry(type, profession, level);
            ring.entryList[3] = CreateEntry(type, profession, level);
        }
        else {
            ring.entryList[0] = GetEntry("内功命中");
            ring.entryList[1] = GetEntry("最小内功攻击");
            ring.entryList[2] = CreateEntry(type, profession, level);
            ring.entryList[3] = CreateEntry(type, profession, level);
        }
    }
    else {
        for (var i = 0; i < EquipmentQualityEntryQuantity[quality]; i++) {
            ring.entryList[i] = CreateEntry(type, null, level);
        }
    }
    return ring;
}
function CreateBracelet(type, level, quality) {
    let bracelet;
    if (type == EquipmentType.ExternalBracelet) {
        bracelet = new ExternalBracelet();
    }
    else {
        bracelet = new InternalBracelet();
    }
    bracelet.quality = quality;
    bracelet.level = parseInt(level / 10) * 10 + 8;
    if (level < bracelet.level) {
        bracelet.level -= 10;
    }
    let braceletData = EquipmentLibrary.find(x => x.level == bracelet.level && x.quality == bracelet.quality && x.type == bracelet.type);
    bracelet.minHit = braceletData.minHit.toFixed(0);
    bracelet.maxHit = braceletData.maxHit.toFixed(0);

    bracelet.realExternalHit = randomNum(braceletData.minHit, braceletData.maxHit).toFixed(0);

    bracelet.realInternalHit = randomNum(braceletData.minHit, braceletData.maxHit).toFixed(0);

    bracelet.icon = braceletData.icon;
    bracelet.name = braceletData.name;
    bracelet.poetry = braceletData.poetry;
    bracelet.entryList = new Array();
    if (quality == EquipmentQuality.purple1) {
        if (type == EquipmentType.ExternalBracelet) {
            bracelet.entryList[0] = GetEntry("外功会心");
            bracelet.entryList[1] = GetEntry("外功破盾");
            bracelet.entryList[2] = GetEntry("力量");
            bracelet.entryList[3] = GetEntry("最小外功攻击");
        }
        else {
            bracelet.entryList[0] = GetEntry("内功会心");
            bracelet.entryList[1] = GetEntry("内功破盾");
            bracelet.entryList[2] = GetEntry("气海");
            bracelet.entryList[3] = GetEntry("最小内功攻击");
        }
    }
    else if (quality == EquipmentQuality.purple) {
        if (type == EquipmentType.ExternalBracelet) {
            bracelet.entryList[0] = GetEntry("外功会心");
            bracelet.entryList[1] = GetEntry("最小外功攻击");
            bracelet.entryList[2] = CreateEntry(type, profession, level);
            bracelet.entryList[3] = CreateEntry(type, profession, level);
        }
        else {
            bracelet.entryList[0] = GetEntry("内功会心");
            bracelet.entryList[1] = GetEntry("最小内功攻击");
            bracelet.entryList[2] = CreateEntry(type, profession, level);
            bracelet.entryList[3] = CreateEntry(type, profession, level);
        }
    }
    else {
        for (var i = 0; i < EquipmentQualityEntryQuantity[quality]; i++) {
            bracelet.entryList[i] = CreateEntry(type, profession, level);
        }
    }
    return bracelet;
}
function CreateNecklace(type, level, quality) {
    let necklace;
    if (type == EquipmentType.ExternalNecklace) {
        necklace = new ExternalNecklace();
    }
    else {
        necklace = new InternalNecklace();
    }
    necklace.quality = quality;
    necklace.level = parseInt(level / 10) * 10 + 9;
    if (level < necklace.level) {
        necklace.level -= 10;
    }
    let necklaceData = EquipmentLibrary.find(x => x.level == necklace.level && x.quality == necklace.quality && x.type == necklace.type);
    necklace.minHit = necklaceData.minHit.toFixed(0);
    necklace.maxHit = necklaceData.maxHit.toFixed(0);

    necklace.realExternalHit = randomNum(necklaceData.minHit, necklaceData.maxHit).toFixed(0);

    necklace.realInternalHit = randomNum(necklaceData.minHit, necklaceData.maxHit).toFixed(0);

    necklace.icon = necklaceData.icon;
    necklace.name = necklaceData.name;
    necklace.poetry = necklaceData.poetry;
    necklace.entryList = new Array();
    if (quality == EquipmentQuality.purple1) {
        if (type == EquipmentType.ExternalNecklace) {
            necklace.entryList[0] = GetEntry("力量");
            necklace.entryList[1] = GetEntry("身法");
            necklace.entryList[2] = GetEntry("外功破防");
            necklace.entryList[3] = GetEntry("最终伤害");
        }
        else {
            necklace.entryList[0] = GetEntry("内功会心");
            necklace.entryList[1] = GetEntry("身法");
            necklace.entryList[2] = GetEntry("内功破防");
            necklace.entryList[3] = GetEntry("最终伤害");
        }
    }
    else if (quality == EquipmentQuality.purple) {
        if (type == EquipmentType.ExternalNecklace) {
            necklace.entryList[0] = GetEntry("外功会心");
            necklace.entryList[1] = GetEntry("力量");
            necklace.entryList[2] = CreateEntry(type, profession, level);
            necklace.entryList[3] = CreateEntry(type, profession, level);
        }
        else {
            necklace.entryList[0] = GetEntry("内功会心");
            necklace.entryList[1] = GetEntry("气海");
            necklace.entryList[2] = CreateEntry(type, profession, level);
            necklace.entryList[3] = CreateEntry(type, profession, level);
        }
    }
    else {
        for (var i = 0; i < EquipmentQualityEntryQuantity[quality]; i++) {
            necklace.entryList[i] = CreateEntry(type, profession, level);
        }
    }
    return necklace;
}
function GetEntry(name) {
    let entryJson = EntryLibrary.find(x => x.name.includes(name));
    let entry = new Entry();
    entry.name = entryJson.name;
    let value = randomNum(entryJson.minValue, entryJson.maxValue);
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
    entry.name = format(entry.name, [entry.value1, entry.value2]);
    return entry;
}
function CreateEntry(type, profession, level) {
    let entries = EntryLibrary.getEntries(type, profession);
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
function randomObj1(obj) {
    let r = Math.random();
    let possibility = obj[0].possibility;
    for (let i = 0; i < obj.length; i++) {
        if (r < possibility) {
            return obj[i].obj;
        }
        else {
            if (i < obj.length - 1) {
                possibility += obj[i + 1].possibility;
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
            if (i < obj.length - 1) {
                possibility += obj[i+1].possibility;
            }
        }
    }
    return obj[obj.length - 1];
}
function randomObj3(pos,obj) {
    let r = Math.random();
    let possibility = pos[0];
    for (let i = 0; i < pos.length; i++) {
        if (r < possibility) {
            return obj[i];
        }
        else {
            if (i < pos.length - 1) {
                possibility += pos[i + 1];
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
function getEquipmentColorByQuality(quality) {
    switch (Number(quality)) {
        case 4: return "red";
        case 5: return "purple";
        case 6: return "purple";
        default:
    }
}
function getEffectColorByQuality(quality) {
    switch (Number(quality)) {
        case 2: return "";
        case 3: return "";
        case 4: return "#cC26AF5";
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
function getEquipmentByQuality(quality) {
    switch (Number(quality)) {
        case 2: return "#c74E85E";
        case 3: return "#c80C5FF";
        case 4: return "#cFF5252";
        case 5: return "#cC26AF5";
        default:
    }
}