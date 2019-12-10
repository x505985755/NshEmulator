!function(r, a) {
    "undefined" != typeof module && module.exports ? module.exports = a() : r.RoleParse = a()
}(this, function() {
    function k(r) {
        return (r + "").length < 2 ? "0" + r : r
    }
    var L = function(r) {
        return r && r instanceof Array ? r : []
    }
      , S = function(r, a) {
        if (!r instanceof Array)
            return r;
        for (var i = [], n = 0, t = r.length; n < t; n++) {
            var e = r[n];
            a(e) && i.push(e)
        }
        return i
    };
    function r(r) {
        this.raw = r
    }
    return "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(r) {
        for (var a = 0; a < this.length; a++)
            r.apply(this, [this[a], a, this])
    }
    ),
    r.prototype = {
        basic: function() {
            var r = this.raw
              , a = r.Class2NameTbl || {}
              , i = r.PlayerBasicInfo || {}
              , n = a[i.Class] ? a[i.Class][0] : ""
              , t = !!a[i.Class] && !a[i.Class][1]
              , e = i.Exp2CurrMaxGrade
              , o = i.ExperienceValue + (e && e != i.Grade ? "（可升到" + e + "级）" : "");
            return i.School = n,
            i.exp = o,
            {
                isNeigong: t,
                Basic: i,
                Other: r.OtherPlayerProp,
                Detail: r.PlayerDetailProp
            }
        },
        skill: function() {
            var r = this.raw;
            function a(r, a) {
                for (var i = S(r, function(r) {
                    if (r && r.skillCLsType)
                        return r.skillCLsType == a
                }), n = 0, t = i.length; n < t; n++) {
                    var e = i[n]
                      , o = e.bookLevel || e.BookLevel;
                    null != o && (e.$bookLevelColor = ["", "#ffffff", "#25aaff", "#ff6b6b", "#c69dff"][o],
                    e.$bookLevel = ["", "初传", "进阶", "化境", "登峰"][o])
                }
                return i
            }
            var i = L(r.BasicSkillList);
            return {
                weapon: a(i, 3),
                job: a(i, 1),
                jizhi: a(i, 4),
                jueji: a(i, 2),
                xinfa: a(i, 6),
                wangqi: L(r.WangQiSkillList),
                qiyu: L(r.QiYuSkillList),
                kuangshi: L(r.KuangshiWuXueSkillList),
                life: L(r.LifeSkillList),
                qinggong: L(r.QingGongSkillList),
                xiuwei: r.PlayerBasicInfo.XiuweiScore || 0,
                interest: L(r.InterestSkillList)
            }
        },
        equip: function() {
            var r = this.raw
              , i = r.BodyEquipSlotData
              , n = []
              , t = 0;
            return [0, 12, 13, 14, 3, 1, 15, 4, 10, 11, 7, 5, 6, 2, 8, 9].forEach(function(a) {
                var r = S(i, function(r) {
                    return r.slotIndex === a
                })[0];
                r && (r.index = t,
                t += 1,
                n.push(r))
            }),
            {
                score: r.PlayerBasicInfo.EquipScore,
                equip: n
            }
        },
        daoju: function() {
            var r = this.raw
              , a = r.PlayerBasicInfo
              , i = L(r.BagSlotData)
              , n = L(r.WareHouseSlotData)
              , t = S(n, function(r) {
                return r.slotIndex <= 40
            })
              , e = S(n, function(r) {
                return 40 < r.slotIndex
            });
            return {
                basic: a,
                bag: i,
                other: r.OtherPlayerProp,
                storage1: t,
                storage2: e
            }
        },
        jingmai: function() {
            var r = this.raw;
            return {
                score: r.PlayerBasicInfo.JingMaiScore || 0,
                jingMaiData: r.JingMaiData || {}
            }
        },
        practice: function() {
            var r = this.raw
              , a = r.GuildPractice || []
              , i = []
              , n = []
              , t = []
              , e = [];
            if (0 < a.length)
                for (var o = 0; o < a.length; o++) {
                    var s = a[o];
                    switch (s.category) {
                    case 1:
                        i.push(s);
                        break;
                    case 2:
                        n.push(s);
                        break;
                    case 3:
                        t.push(s);
                        break;
                    case 4:
                        e.push(s)
                    }
                }
            return {
                score: r.PlayerBasicInfo.XiulianScore,
                basic: i,
                jinjie: n,
                yuansu: t,
                kangxing: e
            }
        },
        waiguan: function() {
            var r = this.raw;
            function a(r, a) {
                var i = r.slice(0)
                  , n = [];
                return 0 < (n = S(i, function(r) {
                    return r.Type == a && r.Tooltip && "" == r.Tooltip.ExpireDate
                })).length && n.forEach(function(r) {
                    r.iconId = r.BigIcon
                }),
                function(r) {
                    if (r.length <= 0)
                        return r;
                    for (var a = [], i = [], n = 0; n < r.length; n++)
                        r[n].CBGValuableFlag ? a.push(r[n]) : i.push(r[n]);
                    return a.concat(i)
                }(n)
            }
            function i(r) {
                for (var a = [], i = 0; i < r.length; i++)
                    r[i].skillStyle && (a = a.concat(r[i].skillStyle));
                return a
            }
            for (var n = r.FashionClothesInfo, t = r.HorseAndXiangRui, e = t.hasOwnProperty("HorseList") ? L(t.HorseList) : [], o = L(n.clothesSlotDataArr), s = t.hasOwnProperty("XiangRuiList") ? L(t.XiangRuiList) : [], u = [], l = 0; l < s.length; l++) {
                var c = s[l];
                /怒焰战车/g.test(c.name) || u.push(c)
            }
            var f = r.PetList
              , h = [];
            0 < e.length && e.forEach(function(r) {
                var a = r.EquipList;
                a instanceof Array && a.forEach(function(r) {
                    r.name && h.push(r)
                })
            });
            var p = r.TitleInfo || {}
              , g = [];
            for (var y in p)
                if (p.hasOwnProperty(y)) {
                    (c = p[y]).isForever = "永久" == c.Duration,
                    1 == c.Charon && g.push(c);
                    var v = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
                    if (c.Duration && v.test(c.Duration)) {
                        var d = v.exec(c.Duration);
                        c.durationText = "到期时间" + d[1] + "年" + k(d[2]) + "月" + k(d[3]) + "日" + k(d[4]) + "时"
                    } else
                        c.durationText = c.Duration
                }
            return {
                data: {
                    score: n.clothesScore,
                    junmaVal: r.PlayerBasicInfo.TotalJunmaValue,
                    xiangruiInfo: u,
                    horse: e,
                    saddle: h,
                    body: a(o, 1),
                    head: a(o, 2),
                    hair: a(o, 6),
                    back: a(o, 4),
                    waist: a(o, 5),
                    weapon: a(o, 7),
                    pet: L(f),
                    qinggongStyle: i(r.QingGongSkillList),
                    liupaiStyle: i(r.BasicSkillList),
                    face: r.NieLianData,
                    titleInfo: g
                }
            }
        },
        zhuangyuan: function() {
            var r = this.raw.GardenInfo || {};
            for (var a in r) {
                r.NotEmpty = !0;
                break
            }
            return r
        },
        tiangonglu: function () {
            var r = this.raw.TianGongLuData || {};
            for (var a in r) {
                r.NotEmpty = !0;
                break
            }
            return r
        }
    },
    r
});
