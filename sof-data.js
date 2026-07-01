const RAID_NIGHTS = ["4/23","4/25","4/28","4/30","5/2","5/5","5/7","5/9","5/12","5/14","5/16","5/19","5/21","5/23","5/26","5/28","5/30","6/2","6/4","6/6","6/13"];

// Source: SOF_Master_Loot (authoritative)
// Tier rule: bucket = tier of the mob that NORMALLY drops the item
// xtier = true when dropping mob's tier differs from item's normal source tier
//
// T1 bosses: Octa the Collector, Scorn, Wirlem, The Fanged Moon, Crazok Moonfang, Ralkor's Crystals
// T2 bosses: Big Bynn's Return (Tinmizer's Wunderwerks), Deepscar's Den, Mining Behemoth,
//            Power Station, Spindlecrank, Soulbleeder
// T3 bosses: Breakneck, Krond, Battle Room, Brinda Sprockets, Seneschal Bargangle Tinkerson, Meldrath
// T4 bosses: Keepers of Stone, Halls of Fire, Ice Constructs, Aerius Windfury, Kildrukaun,
//            Tjudawos, Zeixshi`Kar, Vyskudra, Brood Mother Visziaj, Kerafyrm the Awakened
//
// 4/23 events: Deepscar's Den, Big Bynn's Return, Mining Behemoth, Power Station, Spindlecrank
// 4/25 events: The Fanged Moon (19:42), Crazok Moonfang (20:18),
//              Ralkor's Crystals (21:15), Soulbleeder (22:18), Octa the Collector (22:50)
// 4/28 events: Deepscar's Den (19:26), Big Bynn's Return/Tinmizer (20:11),
//              Mining Behemoth (20:45), Power Station, Spindlecrank
// 4/30 events: Breakneck (20:05), Bargangle (20:40), Battle Room (21:53)
// 5/2  events: Krond (19:35), Brinda (20:22), Meldrath (21:41), Soulbleeder (22:33)

const DATA = [

  // ══════════════════════════════════════════════════════════════════════════
  // RAID T1
  // ══════════════════════════════════════════════════════════════════════════

  // ── Octa the Collector drops ──────────────────────────────────────────────
  {
    item: "Glittering Gem of Focus",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Spindlecrank", count:2}],
    xtier: true,
    same: ["Spindlecrank"],
    nights: ["4/23","5/23"]
  },
  {
    item: "Inventor's Jagged Ring",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Octa the Collector", count:2}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench"],
    nights: ["4/23","4/25"]
  },
  {
    item: "Loop of Cruel Ingenuity",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Spindlecrank", count:1},{mob:"Big Bynn's Return", count:1}],
    xtier: true,
    same: ["Spindlecrank","Big Bynn's Return"],
    nights: ["4/23","5/23"]
  },
  {
    item: "Mantle of Grand Plans",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench"],
    nights: ["4/23"]
  },
  {
    item: "Steel-Studded Leather Gloves",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Steel-Studded Leather Wristguard",
    bucket: "Raid T1",
    normal: "Octa the Collector / Scorn / Wirlem",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Spindlecrank", count:2},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Spindlecrank","Crazok Moonfang"],
    nights: ["4/23","5/5","5/23","5/23","6/13"]
  },
  {
    item: "Steel-Threaded Satin Gloves",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Spindlecrank", count:1},{mob:"Octa the Collector", count:1}],
    xtier: true,
    same: ["Spindlecrank"],
    nights: ["4/23","4/25"]
  },
  {
    item: "Steel-Threaded Satin Wristband",
    bucket: "Raid T1",
    normal: "Octa the Collector / Scorn / Wirlem",
    teek: [{mob:"Deepscar's Den", count:1},{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Deepscar's Den","Spindlecrank"],
    nights: ["4/28","5/5"]
  },
  {
    item: "Steel-Welded Plate Bracer",
    bucket: "Raid T1",
    normal: "Octa the Collector / Scorn / Wirlem",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Octa the Collector", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Crazok Moonfang"],
    nights: ["4/23","4/25","5/30"]
  },
  {
    item: "Steel-Welded Plate Gauntlets",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Spindlecrank"],
    nights: ["4/23"]
  },
  {
    item: "Steel-Welded Ringmail Gauntlets",
    bucket: "Raid T1",
    normal: "Octa the Collector",
    teek: [{mob:"Big Bynn's Return", count:1}],
    xtier: true,
    same: ["Big Bynn's Return"],
    nights: ["5/23"]
  },
  {
    item: "Steel-Welded Ringmail Wristguard",
    bucket: "Raid T1",
    normal: "Octa the Collector / Scorn / Wirlem",
    teek: [{mob:"Deepscar's Den", count:1},{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Deepscar's Den","Spindlecrank","Crazok Moonfang"],
    nights: ["4/28","5/23","5/30"]
  },
  { item: "Crushing Demolisher",             bucket: "Raid T1", normal: "Octa the Collector", teek: [{mob:"Big Bynn's Return", count:1}], xtier: true, same: ["Big Bynn's Return"], nights: ["5/23"] },

  // ── Scorn drops ───────────────────────────────────────────────────────────
  {
    item: "Mask of the Unrequited",
    bucket: "Raid T1",
    normal: "Scorn",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Deepscar's Den", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Deepscar's Den"],
    nights: ["4/23","4/28"]
  },
  {
    item: "Scepter of Dark Clouds",
    bucket: "Raid T1",
    normal: "Scorn",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Spindlecrank", count:2}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Spindlecrank"],
    nights: ["4/23","5/5","5/23"]
  },
  {
    item: "Steel-Studded Leather Boots",
    bucket: "Raid T1",
    normal: "Scorn",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench"],
    nights: ["4/23"]
  },
  {
    item: "Steel-Threaded Satin Slippers",
    bucket: "Raid T1",
    normal: "Scorn",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench"],
    nights: ["4/23"]
  },
  {
    item: "Steel-Welded Plate Boots",
    bucket: "Raid T1",
    normal: "Scorn",
    teek: [{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Spindlecrank"],
    nights: ["5/5"]
  },
  {
    item: "Steel-Welded Ringmail Boots",
    bucket: "Raid T1",
    normal: "Scorn",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },

  // ── Wirlem drops ──────────────────────────────────────────────────────────
  {
    item: "Steel-Studded Leather Cowl",
    bucket: "Raid T1",
    normal: "Wirlem",
    teek: [,{mob:"Crazok Moonfang", count:1}],
    xtier: false,
    same: ["Crazok Moonfang"],
    nights: [,"6/13"]
  },
  {
    item: "Steel-Threaded Satin Hat",
    bucket: "Raid T1",
    normal: "Wirlem",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Steel-Welded Plate Helm",
    bucket: "Raid T1",
    normal: "Wirlem",
    teek: [{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Spindlecrank"],
    nights: ["5/5"]
  },
  {
    item: "Steel-Welded Ringmail Coif",
    bucket: "Raid T1",
    normal: "Wirlem",
    teek: [{mob:"Mining Behemoth", count:2}],
    xtier: true,
    same: ["Mining Behemoth"],
    nights: ["5/5"]
  },
  { item: "Choker of Untold Pain",           bucket: "Raid T1", normal: "Wirlem", teek: [{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1}], xtier: true, same: ["Spindlecrank","Crazok Moonfang"], nights: ["5/5","5/30"] },
  { item: "Dark Phantom Buckler",             bucket: "Raid T1", normal: "Wirlem", teek: [{mob:"Mining Behemoth", count:1},{mob:"Crazok Moonfang", count:1}], xtier: true, same: ["Mining Behemoth","Crazok Moonfang"], nights: ["5/5","6/13"] },
  { item: "Pain-Runed Cloak",                bucket: "Raid T1", normal: "Wirlem", teek: [{mob:"Spindlecrank", count:1}], xtier: true, same: ["Spindlecrank"], nights: ["5/5"] },
  { item: "Ring of Twisted Festivities",     bucket: "Raid T1", normal: "Wirlem", teek: [{mob:"Mining Behemoth", count:1}], xtier: true, same: ["Mining Behemoth"], nights: ["5/5"] },
  { item: "Shadowy Blackblade",              bucket: "Raid T1", normal: "Wirlem", teek: [,{mob:"Crazok Moonfang", count:1},{mob:"Crazok Moonfang", count:1}], xtier: false, same: ["Crazok Moonfang"], nights: [,"5/30","6/13"] },

  // ── The Fanged Moon drops ─────────────────────────────────────────────────
  {
    item: "Crimson Throat-Gem",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"The Fanged Moon", count:1}],
    xtier: false,
    same: [],
    nights: ["4/25"]
  },
  {
    item: "Shroud of the Moonlight Curse",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"The Fanged Moon", count:1},{mob:"Mining Behemoth", count:1}],
    xtier: true,
    same: ["Mining Behemoth"],
    nights: ["4/25","4/28"]
  },
  {
    item: "Sinew-Wrapped Ballista",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"Mining Behemoth", count:1}],
    xtier: true,
    same: ["Mining Behemoth"],
    nights: ["5/5"]
  },
  {
    item: "Steel-Studded Leather Leggings",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Mining Behemoth", count:2}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Mining Behemoth"],
    nights: ["4/23","4/28","5/23"]
  },
  {
    item: "Steel-Studded Leather Tunic",
    bucket: "Raid T1",
    normal: "The Fanged Moon / Crazok Moonfang",
    teek: [{mob:"Power Station", count:1},{mob:"Big Bynn's Return", count:1}],
    xtier: true,
    same: ["Power Station","Big Bynn's Return"],
    nights: ["4/28","5/5"]
  },
  {
    item: "Steel-Threaded Satin Pantaloons",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"Mining Behemoth", count:1}],
    xtier: true,
    same: ["Mining Behemoth"],
    nights: ["4/28"]
  },
  {
    item: "Steel-Threaded Satin Robe",
    bucket: "Raid T1",
    normal: "The Fanged Moon / Crazok Moonfang",
    teek: [{mob:"Octa the Collector", count:1},{mob:"Deepscar's Den", count:1},{mob:"Mining Behemoth", count:1}],
    xtier: true,
    same: ["Octa the Collector","Deepscar's Den","Mining Behemoth"],
    nights: ["4/25","5/5"]
  },
  {
    item: "Steel-Welded Plate Breastplate",
    bucket: "Raid T1",
    normal: "The Fanged Moon / Crazok Moonfang",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1},{mob:"Mining Behemoth", count:2},{mob:"Deepscar's Den", count:1}],
    xtier: true,
    same: ["Overseer Gakkor Deepscar","Mining Behemoth","Deepscar's Den"],
    nights: ["4/23","5/5","5/23"]
  },
  {
    item: "Steel-Welded Plate Greaves",
    bucket: "Raid T1",
    normal: "The Fanged Moon / Crazok Moonfang",
    teek: [{mob:"Mining Behemoth", count:1},{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Mining Behemoth","Spindlecrank"],
    nights: ["5/5","5/23"]
  },
  {
    item: "Steel-Welded Ringmail Coat",
    bucket: "Raid T1",
    normal: "The Fanged Moon / Crazok Moonfang",
    teek: [{mob:"Octa the Collector", count:1},{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Octa the Collector","Spindlecrank"],
    nights: ["4/25","5/23"]
  },
  {
    item: "Steel-Welded Ringmail Leggings",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Mining Behemoth", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Mining Behemoth"],
    nights: ["4/23","5/23"]
  },
  {
    item: "Ticka, Greatblade of the Ravager",
    bucket: "Raid T1",
    normal: "The Fanged Moon",
    teek: [{mob:"The Fanged Moon", count:1},{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Octa the Collector", count:1},{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Chief Mechanic Clankwrench","Octa the Collector","Spindlecrank"],
    nights: ["4/23","4/25","5/23"]
  },

  // ── Crazok Moonfang drops ─────────────────────────────────────────────────
  {
    item: "Bloodrime Pauldrons",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Mining Behemoth", count:1},{mob:"The Fanged Moon", count:1},{mob:"Big Bynn's Return", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Mining Behemoth","The Fanged Moon","Big Bynn's Return","Crazok Moonfang"],
    nights: ["4/23","4/25","5/5","5/30"]
  },
  {
    item: "Bloodseeker's Veil",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1},{mob:"The Fanged Moon", count:1},{mob:"Big Bynn's Return", count:2},{mob:"Mining Behemoth", count:1},{mob:"Deepscar's Den", count:1}],
    xtier: true,
    same: ["Overseer Gakkor Deepscar","The Fanged Moon","Big Bynn's Return","Mining Behemoth","Deepscar's Den"],
    nights: ["4/23","4/25","4/28","5/5"]
  },
  {
    item: "Moonblade of the Bloodcrazed",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1},{mob:"Big Bynn's Return", count:1},{mob:"Power Station", count:2},{mob:"Deepscar's Den", count:1},{mob:"Mining Behemoth", count:1}],
    xtier: true,
    same: ["Overseer Gakkor Deepscar","Big Bynn's Return","Power Station","Deepscar's Den","Mining Behemoth"],
    nights: ["4/23","4/28","5/5","5/23"]
  },
  {
    item: "Scarlet-Lined Bloodsash",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Mining Behemoth", count:3},{mob:"Big Bynn's Return", count:2},{mob:"Power Station", count:2},{mob:"Spindlecrank", count:1}],
    xtier: true,
    same: ["Mining Behemoth","Big Bynn's Return","Power Station","Spindlecrank"],
    nights: ["4/23","4/28","5/5","5/23"]
  },
  {
    item: "Steel-Studded Leather Armwraps",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"The Fanged Moon", count:1},{mob:"Big Bynn's Return", count:2},{mob:"Mining Behemoth", count:2},{mob:"Power Station", count:1},{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["The Fanged Moon","Big Bynn's Return","Mining Behemoth","Power Station","Spindlecrank","Crazok Moonfang"],
    nights: ["4/25","4/28","5/5","5/23","5/30"]
  },
  {
    item: "Steel-Threaded Satin Sleeves",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1},{mob:"The Fanged Moon", count:1},{mob:"Big Bynn's Return", count:1},{mob:"Power Station", count:1}],
    xtier: true,
    same: ["Overseer Gakkor Deepscar","The Fanged Moon","Big Bynn's Return","Power Station"],
    nights: ["4/23","4/25","4/28"]
  },
  {
    item: "Steel-Welded Plate Vambraces",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Mining Behemoth", count:2},{mob:"Big Bynn's Return", count:1},{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Mining Behemoth","Big Bynn's Return","Spindlecrank","Crazok Moonfang"],
    nights: ["4/23","4/28","5/23","5/30"]
  },
  {
    item: "Steel-Welded Ringmail Sleeves",
    bucket: "Raid T1",
    normal: "Crazok Moonfang",
    teek: [{mob:"Big Bynn's Return", count:1},{mob:"Mining Behemoth", count:2},{mob:"Power Station", count:1}],
    xtier: true,
    same: ["Big Bynn's Return","Mining Behemoth","Power Station"],
    nights: ["4/28"]
  },
  { item: "Lunar Horns",                      bucket: "Raid T1", normal: "Crazok Moonfang",                   teek: [{mob:"Mining Behemoth", count:1},{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1}], xtier: true, same: ["Mining Behemoth","Spindlecrank","Crazok Moonfang"], nights: ["5/23","5/30"] },

  // ── Ralkor's Crystals drops ───────────────────────────────────────────────
  { item: "Bloodied Skull Crusher",           bucket: "Raid T1", normal: "Ralkor's Crystals",               teek: [{mob:"Meldrath", count:1},{mob:"Vyskudra", count:1},{mob:"Tjudawos", count:1},{mob:"Zeixshi`Kar", count:1},{mob:"Kerafyrm", count:2}], xtier: true,  same: ["Meldrath","Vyskudra","Tjudawos","Zeixshi`Kar","Kerafyrm"], nights: ["5/2","5/12","5/19","6/4"] },
  { item: "Earring of the Carnophage",        bucket: "Raid T1", normal: "Ralkor's Crystals",               teek: [{mob:"Tjudawos", count:1},{mob:"Zeixshi`Kar", count:1},{mob:"Vyskudra", count:1}], xtier: true, same: ["Tjudawos","Zeixshi`Kar","Vyskudra"], nights: ["5/19","6/2"] },
  { item: "Necklace of the High Moon",        bucket: "Raid T1", normal: "Ralkor's Crystals",               teek: [{mob:"Meldrath", count:1},{mob:"Brood Mother Visziaj", count:1},{mob:"Keeper of Stones", count:2},{mob:"Zeixshi`Kar", count:1}], xtier: true, same: ["Meldrath","Brood Mother Visziaj","Keeper of Stones"], nights: ["5/7","5/12","5/26"] },
  { item: "Regenerator's Earring",            bucket: "Raid T1", normal: "Ralkor's Crystals",               teek: [{mob:"Keeper of Stones", count:2},{mob:"Brood Mother Visziaj", count:1},{mob:"Tjudawos", count:1}], xtier: true, same: ["Keeper of Stones","Brood Mother Visziaj","Tjudawos"], nights: ["5/9","5/12","5/26"] },
  { item: "Ring of the Ripping Claw",         bucket: "Raid T1", normal: "Ralkor's Crystals",               teek: [{mob:"Meldrath", count:2},{mob:"Vyskudra", count:2},{mob:"Tjudawos", count:1}], xtier: true,  same: ["Meldrath","Vyskudra","Tjudawos"], nights: ["5/2","5/7","5/12","5/26","6/2"] },

  // ══════════════════════════════════════════════════════════════════════════
  // RAID T2
  // ══════════════════════════════════════════════════════════════════════════

  // ── Big Bynn's Return drops ───────────────────────────────────────────────
  {
    item: "Ancient Hardened Boots",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Spindlecrank", count:1}],
    xtier: false,
    same: ["Spindlecrank"],
    nights: ["4/28"]
  },
  {
    item: "Ancient Hardened Bracer",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Spindlecrank", count:1},{mob:"Power Station", count:2}],
    xtier: false,
    same: ["Chief Mechanic Clankwrench","Spindlecrank","Power Station"],
    nights: ["4/23","4/28","5/5"]
  },
  {
    item: "Ancient Husk Boots",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Deepscar's Den", count:1},{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Deepscar's Den","Power Station"],
    nights: ["4/28","5/5"]
  },
  {
    item: "Ancient Husk Wristguard",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1},{mob:"Power Station", count:1},{mob:"Big Bynn's Return", count:1}],
    xtier: false,
    same: ["Spindlecrank","Crazok Moonfang","Power Station","Big Bynn's Return"],
    nights: ["4/23","4/25","5/5","5/23","5/23"]
  },
  {
    item: "Ancient Scaled Boots",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Big Bynn's Return", count:1}],
    xtier: false,
    same: [],
    nights: ["5/23"]
  },
  {
    item: "Ancient Scaled Wristguard",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Ancient Velvet Slippers",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Chief Mechanic Clankwrench", count:1},{mob:"Deepscar's Den", count:1}],
    xtier: false,
    same: ["Chief Mechanic Clankwrench","Deepscar's Den"],
    nights: ["4/23","4/28"]
  },
  {
    item: "Ancient Velvet Wristband",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Spindlecrank", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: false,
    same: ["Spindlecrank","Crazok Moonfang"],
    nights: ["4/23","4/25"]
  },
  {
    item: "Clockwork Medic's Defibrillator",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Chief Mechanic Clankwrench", count:2},{mob:"Spindlecrank", count:2},{mob:"Crazok Moonfang", count:1},{mob:"Power Station", count:1},{mob:"Deepscar's Den", count:1}],
    xtier: false,
    same: ["Chief Mechanic Clankwrench","Spindlecrank","Crazok Moonfang","Power Station","Deepscar's Den"],
    nights: ["4/23","4/25","4/28","5/5","5/23"]
  },
  {
    item: "Coilsteam Mechanomantle",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Crazok Moonfang", count:1},{mob:"Power Station", count:1},{mob:"Deepscar's Den", count:1}],
    xtier: true,
    same: ["Crazok Moonfang","Power Station","Deepscar's Den"],
    nights: ["4/25","5/5","5/23"]
  },
  {
    item: "Linked Cloak of Bladeturning",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Deepscar's Den", count:2}],
    xtier: false,
    same: ["Deepscar's Den"],
    nights: ["4/28"]
  },
  {
    item: "Silvered Earstud of the Sanguine",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Steam-Powered Disc of Command",
    bucket: "Raid T2",
    normal: "Big Bynn's Return",
    teek: [{mob:"Spindlecrank", count:2},{mob:"Big Bynn's Return", count:2}],
    xtier: false,
    same: ["Spindlecrank","Big Bynn's Return"],
    nights: ["4/23","4/28","5/23"]
  },

  // ── Deepscar's Den drops ──────────────────────────────────────────────────
  {
    item: "Ancient Hardened Gauntlets",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1}],
    xtier: false,
    same: [],
    nights: ["4/23"]
  },
  {
    item: "Ancient Husk Gloves",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Ancient Scaled Coif",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [{mob:"Overseer Gakkor Deepscar", count:2}],
    xtier: false,
    same: [],
    nights: ["4/23"]
  },
  {
    item: "Ancient Scaled Gauntlets",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [],
    xtier: false,
    same: [],
    nights: ["5/23"]
  },
  {
    item: "Ancient Scaled Wristguard",
    bucket: "Raid T2",
    normal: "Deepscar's Den / Big Bynn's Return",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Ancient Velvet Gloves",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Claw-Blessed Cloak",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [{mob:"Overseer Gakkor Deepscar", count:2}],
    xtier: false,
    same: [],
    nights: ["4/23"]
  },
  {
    item: "Claw-Sigiled Waistloop",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Power Station"],
    nights: ["5/5"]
  },
  {
    item: "Deepscar Painsmasher",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Dragonscar Facemask",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Power Station"],
    nights: ["5/5"]
  },
  {
    item: "Shiny Runed Metallic Cape",
    bucket: "Raid T2",
    normal: "Deepscar's Den",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },

  // ── Mining Behemoth drops ─────────────────────────────────────────────────
  {
    item: "Ancient Hardened Breastplate",
    bucket: "Raid T2",
    normal: "Mining Behemoth / Spindlecrank / Power Station",
    teek: [{mob:"Spindlecrank", count:1}],
    xtier: false,
    same: [],
    nights: ["4/28"]
  },
  {
    item: "Ancient Hardened Vambraces",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Mining Behemoth", count:1}],
    xtier: false,
    same: [],
    nights: ["4/23"]
  },
  {
    item: "Ancient Husk Armwraps",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Power Station"],
    nights: ["5/23"]
  },
  {
    item: "Ancient Husk Tunic",
    bucket: "Raid T2",
    normal: "Mining Behemoth / Spindlecrank",
    teek: [{mob:"Crazok Moonfang", count:1},{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["Crazok Moonfang","The Fanged Moon"],
    nights: ["4/25","6/13"]
  },
  {
    item: "Ancient Scaled Coat",
    bucket: "Raid T2",
    normal: "Mining Behemoth / Spindlecrank / Power Station",
    teek: [,{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["The Fanged Moon"],
    nights: [,"6/13"]
  },
  {
    item: "Ancient Scaled Leggings",
    bucket: "Raid T2",
    normal: "Mining Behemoth / Power Station",
    teek: [{mob:"Deepscar's Den", count:1},{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Deepscar's Den","Power Station"],
    nights: ["5/5","5/23"]
  },
  {
    item: "Ancient Scaled Sleeves",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Mining Behemoth", count:1},{mob:"Crazok Moonfang", count:1},{mob:"Power Station", count:1},{mob:"Power Station", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Crazok Moonfang","Power Station"],
    nights: ["4/23","4/25","5/23","5/23","6/13"]
  },
  {
    item: "Ancient Velvet Robe",
    bucket: "Raid T2",
    normal: "Mining Behemoth / Spindlecrank / Power Station",
    teek: [{mob:"Mining Behemoth", count:1},{mob:"Deepscar's Den", count:2},{mob:"The Fanged Moon", count:2},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Deepscar's Den","The Fanged Moon","Crazok Moonfang"],
    nights: ["4/23","5/5","5/23","6/13"]
  },
  {
    item: "Ancient Velvet Sleeves",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Crazok Moonfang"],
    nights: ["4/25"]
  },
  {
    item: "Glowing Facemask of Mending",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Crazok Moonfang", count:1},{mob:"Power Station", count:1}],
    xtier: true,
    same: ["Crazok Moonfang","Power Station"],
    nights: ["4/25","5/23"]
  },
  {
    item: "Jagged Alloy Repeato-Shiv",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [,{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Crazok Moonfang"],
    nights: [,"6/13"]
  },
  {
    item: "Pneumatic Powerblade",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Mining Behemoth", count:1}],
    xtier: false,
    same: [],
    nights: ["4/23"]
  },
  {
    item: "Visage of the Grand Engineer",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Mining Behemoth", count:1}],
    xtier: false,
    same: [],
    nights: ["4/23"]
  },
  {
    item: "Winged Gem of Command",
    bucket: "Raid T2",
    normal: "Mining Behemoth",
    teek: [{mob:"Crazok Moonfang", count:1},{mob:"Crazok Moonfang", count:1}],
    xtier: true,
    same: ["Crazok Moonfang"],
    nights: ["4/25","6/13"]
  },

  // ── Power Station drops ───────────────────────────────────────────────────
  {
    item: "Ancient Hardened Greaves",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [{mob:"Deepscar's Den", count:1}],
    xtier: false,
    same: ["Deepscar's Den"],
    nights: ["5/23"]
  },
  {
    item: "Ancient Husk Leggings",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [{mob:"Power Station", count:1}],
    xtier: false,
    same: [],
    nights: ["5/23"]
  },
  {
    item: "Ancient Velvet Pantaloons",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [{mob:"The Fanged Moon", count:2}],
    xtier: true,
    same: ["The Fanged Moon"],
    nights: ["4/25"]
  },
  {
    item: "Battery-Powered Choker",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [],
    xtier: false,
    same: [],
    nights: []
  },
  {
    item: "Benevolent Mender's Mantle",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [{mob:"Deepscar's Den", count:1},{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Deepscar's Den"],
    nights: ["5/5","5/23"]
  },
  {
    item: "Industrial Tinkered Drillbore",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [{mob:"The Fanged Moon", count:2},{mob:"Deepscar's Den", count:2},{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["The Fanged Moon","Deepscar's Den"],
    nights: ["4/25","5/5","5/23","6/13"]
  },
  {
    item: "Metallic Spark-Shawl",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [{mob:"Deepscar's Den", count:1},{mob:"Power Station", count:1}],
    xtier: false,
    same: ["Deepscar's Den"],
    nights: ["5/23"]
  },
  {
    item: "Power-Infused Steamcleaver",
    bucket: "Raid T2",
    normal: "Power Station",
    teek: [,{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["The Fanged Moon"],
    nights: [,"6/13"]
  },

  // ── Spindlecrank drops ────────────────────────────────────────────────────
  {
    item: "Ancient Hardened Helm",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Spindlecrank", count:1},{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["The Fanged Moon"],
    nights: ["4/23","6/13"]
  },
  {
    item: "Ancient Husk Cowl",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Spindlecrank", count:2}],
    xtier: false,
    same: [],
    nights: ["4/23","4/28"]
  },
  {
    item: "Ancient Scaled Coif",
    bucket: "Raid T2",
    normal: "Deepscar's Den / Spindlecrank",
    teek: [{mob:"Overseer Gakkor Deepscar", count:2},{mob:"Big Bynn's Return", count:1}],
    xtier: false,
    same: ["Overseer Gakkor Deepscar","Big Bynn's Return"],
    nights: ["4/23","5/5"]
  },
  {
    item: "Ancient Velvet Hat",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Spindlecrank", count:1},{mob:"Big Bynn's Return", count:1}],
    xtier: false,
    same: ["Big Bynn's Return"],
    nights: ["4/23","5/5"]
  },
  {
    item: "Bladetwisting Backplate",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Spindlecrank", count:2},{mob:"Big Bynn's Return", count:1},{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["Big Bynn's Return","The Fanged Moon"],
    nights: ["4/23","5/5","6/13"]
  },
  {
    item: "Filigreed Starburst Stud",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1},{mob:"Spindlecrank", count:1},{mob:"Big Bynn's Return", count:1}],
    xtier: false,
    same: ["Overseer Gakkor Deepscar","Big Bynn's Return"],
    nights: ["4/23","5/5"]
  },
  {
    item: "Shimmering Pearlescent Earstud",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Overseer Gakkor Deepscar", count:1},{mob:"The Fanged Moon", count:1}],
    xtier: true,
    same: ["Overseer Gakkor Deepscar","The Fanged Moon"],
    nights: ["4/23","6/13"]
  },
  {
    item: "Slick Oil-Ring of Protection",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Spindlecrank", count:2}],
    xtier: false,
    same: [],
    nights: ["4/23","4/28"]
  },
  {
    item: "Tempered Steamwound Pummeler",
    bucket: "Raid T2",
    normal: "Spindlecrank",
    teek: [{mob:"Spindlecrank", count:1}],
    xtier: false,
    same: [],
    nights: ["4/28"]
  },

  // ── Soulbleeder drops ─────────────────────────────────────────────────────
  {
    item: "Black Shroud of Penance",
    bucket: "Raid T2",
    normal: "Soulbleeder",
    teek: [{mob:"Breakneck", count:2},{mob:"Battle Room", count:2},{mob:"Chief Researcher Entharr", count:1},{mob:"Soulbleeder", count:1},{mob:"Brinda", count:1}],
    xtier: true,
    same: ["Breakneck","Battle Room","Chief Researcher Entharr","Soulbleeder","Brinda"],
    nights: ["5/7","5/9","5/16","5/28","5/30"]
  },
  {
    item: "Corrupted Spectral Shoulderguards",
    bucket: "Raid T2",
    normal: "Soulbleeder",
    teek: [{mob:"Breakneck", count:2},{mob:"Ice Constructs", count:1},{mob:"Soulbleeder", count:1},{mob:"Brinda", count:2}],
    xtier: true,
    same: ["Breakneck","Ice Constructs","Soulbleeder","Brinda"],
    nights: ["5/7","5/14","5/28","5/30","6/13"]
  },
  {
    item: "Dark Redeemer's Bludgeon",
    bucket: "Raid T2",
    normal: "Soulbleeder",
    teek: [{mob:"Chief Researcher Entharr", count:1},{mob:"Battle Room", count:1},{mob:"Brinda", count:1},{mob:"Breakneck", count:1}],
    xtier: true,
    same: ["Chief Researcher Entharr","Battle Room","Brinda","Breakneck"],
    nights: ["5/9","5/16","5/30","6/13"]
  },
  {
    item: "Earstud of Darkest Shadow",
    bucket: "Raid T2",
    normal: "Soulbleeder",
    teek: [{mob:"Breakneck", count:2},{mob:"Soulbleeder", count:1},{mob:"Bargangle", count:1}],
    xtier: true,
    same: ["Breakneck","Bargangle"],
    nights: ["4/30","5/2","6/13"]
  },
  {
    item: "Ghostly Whisper Earring",
    bucket: "Raid T2",
    normal: "Soulbleeder",
    teek: [{mob:"Breakneck", count:1},{mob:"Soulbleeder", count:1},{mob:"Battle Room", count:1},{mob:"Ice Constructs", count:1},{mob:"Bargangle", count:1},{mob:"Brinda", count:2}],
    xtier: true,
    same: ["Breakneck","Battle Room","Ice Constructs","Bargangle","Brinda"],
    nights: ["4/30","5/2","5/7","5/14","6/13"]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // RAID T3 — Meldrath's Majestic Mansion
  // Bosses: Breakneck, Krond, Battle Room, Brinda Sprockets,
  //         Seneschal Bargangle Tinkerson, Meldrath the Malignant
  // ══════════════════════════════════════════════════════════════════════════

  // ── Breakneck drops ───────────────────────────────────────────────────────
  { item: "Alloy-Coated Back Protector",       bucket: "Raid T3", normal: "Breakneck",                       teek: [{mob:"Soulbleeder", count:1},{mob:"Ice Constructs", count:1},{mob:"Breakneck", count:1},{mob:"Krond", count:1}], xtier: true, same: ["Soulbleeder","Ice Constructs","Breakneck","Krond"], nights: ["5/2","5/19","6/6"] },
  { item: "Cruel Mechanic's Shawl",            bucket: "Raid T3", normal: "Breakneck",                       teek: [{mob:"Bargangle", count:1},{mob:"Aerius Windfury", count:1},{mob:"Breakneck", count:1}], xtier: true, same: ["Bargangle","Aerius Windfury","Breakneck"], nights: ["5/16","6/2","6/6"] },
  { item: "Gyroscopic Combat Assistant Mk. I", bucket: "Raid T3", normal: "Breakneck",                       teek: [{mob:"Bargangle", count:1},{mob:"Vyskudra", count:1},{mob:"Zeixshi`Kar", count:1},{mob:"Aerius Windfury", count:1},{mob:"Battle Room", count:1}], xtier: true, same: ["Bargangle","Vyskudra","Zeixshi`Kar","Aerius Windfury","Battle Room"], nights: ["5/16","5/26","6/2","6/13"] },
  { item: "Sharpened Steamworker's Screwdriver",bucket:"Raid T3", normal: "Breakneck",                       teek: [{mob:"Ice Constructs", count:1},{mob:"Aerius Windfury", count:1},{mob:"Soulbleeder", count:1},{mob:"Krond", count:1}], xtier: true, same: ["Ice Constructs","Aerius Windfury","Soulbleeder","Krond"], nights: ["5/19","6/2","6/4","6/6"] },
  { item: "Steam-Valve Girdle",                bucket: "Raid T3", normal: "Breakneck",                       teek: [{mob:"Aerius Windfury", count:2},{mob:"Bargangle", count:1},{mob:"Battle Room", count:1}], xtier: true, same: ["Aerius Windfury","Bargangle","Battle Room"], nights: ["5/12","5/16","6/13"] },
  { item: "Steamgineer's Trinket of Station",  bucket: "Raid T3", normal: "Breakneck",                       teek: [{mob:"Soulbleeder", count:2},{mob:"Brinda", count:1},{mob:"Battle Room", count:1}], xtier: true, same: ["Soulbleeder","Brinda","Battle Room"], nights: ["5/2","5/23","6/4","6/13"] },

  // ── Krond drops ───────────────────────────────────────────────────────────
  { item: "Blastertron Mechano-Pylon Mk. I",   bucket: "Raid T3", normal: "Krond / Meldrath the Malignant",  teek: [{mob:"Keeper of Stones", count:1},{mob:"Krond", count:3},{mob:"Tjudawos", count:1},{mob:"Breakneck", count:1}], xtier: true, same: ["Keeper of Stones","Krond","Tjudawos","Breakneck"], nights: ["5/14","5/16","5/30","6/2","6/6","6/13"] },
  { item: "Chain-Powered Longcutter",          bucket: "Raid T3", normal: "Krond",                           teek: [{mob:"Halls of Fire", count:1},{mob:"Bargangle", count:1}], xtier: true, same: ["Halls of Fire","Bargangle"], nights: ["5/14","6/13"] },
  { item: "Greasy Steam-Pauldrons",            bucket: "Raid T3", normal: "Krond",                           teek: [{mob:"Battle Room", count:1},{mob:"Halls of Fire", count:1},{mob:"Breakneck", count:2},{mob:"Soulbleeder", count:1},{mob:"Bargangle", count:2},{mob:"Battle Room", count:1}], xtier: true, same: ["Battle Room","Halls of Fire","Breakneck","Soulbleeder","Bargangle"], nights: ["4/30","5/14","5/16","6/4","6/13"] },
  { item: "Ring of Molten Alloy",              bucket: "Raid T3", normal: "Krond",                           teek: [{mob:"Battle Room", count:1},{mob:"Krond", count:1},{mob:"Bargangle", count:2},{mob:"Halls of Fire", count:1}], xtier: true, same: ["Battle Room","Bargangle","Halls of Fire"], nights: ["4/30","5/23","5/30","6/2"] },
  { item: "Self-Retracting Gearplate Mk. I",   bucket: "Raid T3", normal: "Krond / Meldrath the Malignant",  teek: [{mob:"Kildrukaun", count:2}], xtier: true, same: ["Kildrukaun"], nights: ["5/9","5/19"] },
  { item: "Steam-Honed Impaler",               bucket: "Raid T3", normal: "Krond",                           teek: [{mob:"Krond", count:1},{mob:"Bargangle", count:1},{mob:"Brinda", count:2},{mob:"Battle Room", count:1}], xtier: false, same: ["Bargangle","Brinda","Battle Room"], nights: ["5/7","5/16","6/13"] },
  { item: "Steamwork Engineer's Waistband",    bucket: "Raid T3", normal: "Krond",                           teek: [{mob:"Bargangle", count:1},{mob:"Krond", count:1},{mob:"Halls of Fire", count:1},{mob:"Soulbleeder", count:1}], xtier: true, same: ["Bargangle","Halls of Fire","Soulbleeder"], nights: ["5/16","5/23","6/2","6/4"] },

  // ── Battle Room drops ─────────────────────────────────────────────────────
  {
    item: "Gear-Linked Cloak",
    bucket: "Raid T3",
    normal: "Battle Room",
    teek: [{mob:"Soulbleeder", count:1},{mob:"Aerius Windfury", count:1},{mob:"Krond", count:1},{mob:"Halls of Fire", count:1},{mob:"Ice Constructs", count:1},{mob:"Aerius Windfury", count:1},{mob:"Breakneck", count:1}],
    xtier: true,
    same: ["Soulbleeder","Aerius Windfury","Krond","Halls of Fire","Ice Constructs","Breakneck"],
    nights: ["4/25","5/19","5/30","6/2","6/6"]
  },
  { item: "Kidney-Removing Autoshank",         bucket: "Raid T3", normal: "Battle Room",                     teek: [{mob:"Ice Constructs", count:1},{mob:"Battle Room", count:1},{mob:"Krond", count:1},{mob:"Halls of Fire", count:1},{mob:"Ice Constructs", count:1}], xtier: true, same: ["Ice Constructs","Krond","Halls of Fire"], nights: ["5/19","5/21","5/30","6/2"] },
  { item: "Oil-Resistant Facemask",            bucket: "Raid T3", normal: "Battle Room",                     teek: [{mob:"Brinda", count:2},{mob:"Krond", count:1},{mob:"Aerius Windfury", count:1},{mob:"Battle Room", count:1},{mob:"Ice Constructs", count:1},{mob:"Aerius Windfury", count:1},{mob:"Breakneck", count:2}], xtier: true, same: ["Brinda","Krond","Aerius Windfury","Ice Constructs","Breakneck"], nights: ["5/2","5/16","5/19","5/21","5/30","6/2","6/13"] },
  { item: "Reflective Gem of Communication",   bucket: "Raid T3", normal: "Battle Room",                     teek: [{mob:"Brinda", count:1},{mob:"Krond", count:3},{mob:"Battle Room", count:1}], xtier: false, same: ["Brinda","Krond","Battle Room"], nights: ["5/2","5/16","5/30"] },
  {
    item: "Tiny Tinkermusic Box-o-Matic",
    bucket: "Raid T3",
    normal: "Battle Room",
    teek: [{mob:"Soulbleeder", count:1},{mob:"Krond", count:4},{mob:"Ice Constructs", count:1},{mob:"Battle Room", count:1},{mob:"Brinda", count:1},{mob:"Ice Constructs", count:1},{mob:"Breakneck", count:1}],
    xtier: true,
    same: ["Soulbleeder","Krond","Ice Constructs","Battle Room","Brinda","Breakneck"],
    nights: ["4/25","5/16","5/19","5/30","6/2","6/6","6/13"]
  },

  // ── Brinda Sprockets drops ────────────────────────────────────────────────
  { item: "Impromptu Body Protector",          bucket: "Raid T3", normal: "Brinda Sprockets",                teek: [{mob:"Brinda", count:1},{mob:"Aerius Windfury", count:1},{mob:"Halls of Fire", count:2},{mob:"Breakneck", count:1},{mob:"Bargangle", count:1},{mob:"Krond", count:1}], xtier: true, same: ["Aerius Windfury","Halls of Fire","Breakneck","Bargangle","Krond"], nights: ["5/7","5/12","5/19","5/21","5/30","6/6"] },
  { item: "Jingling Alloy Loop",               bucket: "Raid T3", normal: "Brinda Sprockets",                teek: [{mob:"Brinda", count:1},{mob:"Bargangle", count:1},{mob:"Krond", count:1}], xtier: false, same: ["Bargangle","Krond"], nights: ["5/7","5/30","6/6"] },
  { item: "Razor-Sharp Speedblade",            bucket: "Raid T3", normal: "Brinda Sprockets",                teek: [{mob:"Bargangle", count:1},{mob:"Chief Researcher Entharr", count:1},{mob:"Halls of Fire", count:1}], xtier: true, same: ["Bargangle","Chief Researcher Entharr","Halls of Fire"], nights: ["4/30","5/9","5/26"] },
  { item: "Steam-Mechanic's Faceguard",        bucket: "Raid T3", normal: "Brinda Sprockets",                teek: [{mob:"Bargangle", count:3},{mob:"Chief Researcher Entharr", count:1},{mob:"Aerius Windfury", count:1},{mob:"Halls of Fire", count:1}], xtier: true, same: ["Bargangle","Chief Researcher Entharr","Aerius Windfury","Halls of Fire"], nights: ["4/30","5/9","5/12","5/26","6/6"] },
  { item: "Steamwork Welder's Multitool",      bucket: "Raid T3", normal: "Brinda Sprockets",                teek: [{mob:"Breakneck", count:1},{mob:"Aerius Windfury", count:1}], xtier: true, same: ["Breakneck","Aerius Windfury"], nights: ["5/21","5/26"] },
  { item: "Version XI Serial Translatron",     bucket: "Raid T3", normal: "Brinda Sprockets / Meldrath the Malignant", teek: [{mob:"Bargangle", count:1},{mob:"Brinda", count:1},{mob:"Keeper of Stones", count:1},{mob:"Breakneck", count:1},{mob:"Kerafyrm", count:1},{mob:"Ralkor's Crystals", count:1},{mob:"Krond", count:1}], xtier: true, same: ["Bargangle","Brinda","Keeper of Stones","Breakneck","Kerafyrm","Ralkor's Crystals","Krond"], nights: ["4/30","5/7","5/19","5/21","5/28","6/6"] },

  // ── Seneschal Bargangle Tinkerson drops ───────────────────────────────────
  { item: "Auto-Aiming Steamcoiled Recurvinator", bucket: "Raid T3", normal: "Seneschal Bargangle Tinkerson / Meldrath the Malignant", teek: [{mob:"Battle Room", count:1},{mob:"Breakneck", count:1},{mob:"Halls of Fire", count:1},{mob:"Ice Constructs", count:1},{mob:"Krond", count:1}], xtier: true, same: ["Battle Room","Breakneck","Krond"], nights: ["4/30","5/16","5/26","6/13"] },
  { item: "Hydraulic Crushblade",              bucket: "Raid T3", normal: "Seneschal Bargangle Tinkerson",   teek: [{mob:"Bargangle", count:1}], xtier: false, same: ["Bargangle"], nights: ["5/7"] },
  { item: "Intricate Engineer's Locket",       bucket: "Raid T3", normal: "Seneschal Bargangle Tinkerson",   teek: [{mob:"Battle Room", count:1},{mob:"Brinda", count:1}], xtier: false, same: ["Battle Room","Brinda"], nights: ["4/30","5/16"] },
  { item: "Perpetually Spinning Gear",         bucket: "Raid T3", normal: "Seneschal Bargangle Tinkerson",   teek: [{mob:"Battle Room", count:1},{mob:"Breakneck", count:2},{mob:"Halls of Fire", count:1},{mob:"Battle Room", count:2}], xtier: true, same: ["Battle Room","Breakneck"], nights: ["4/30","5/16","5/21","5/26","6/6"] },
  { item: "Studded Engineer's Workgrips",      bucket: "Raid T3", normal: "Seneschal Bargangle Tinkerson",   teek: [{mob:"Brinda", count:1},{mob:"Breakneck", count:1},{mob:"Halls of Fire", count:1},{mob:"Krond", count:2}], xtier: true, same: ["Brinda","Breakneck","Krond"], nights: ["5/16","5/21","5/26","6/13"] },
  { item: "Telescopic Eye-Goggles",            bucket: "Raid T3", normal: "Seneschal Bargangle Tinkerson",   teek: [{mob:"Breakneck", count:1},{mob:"Ice Constructs", count:1}], xtier: true, same: ["Breakneck"], nights: ["5/16","5/26"] },

  // ── Meldrath the Malignant drops ──────────────────────────────────────────
  { item: "Earstud of Oily Retribution",       bucket: "Raid T3", normal: "Meldrath the Malignant",          teek: [{mob:"Kildrukaun", count:1},{mob:"Zeixshi`Kar", count:1}], xtier: true, same: ["Kildrukaun","Zeixshi`Kar"], nights: ["5/9","6/2"] },
  { item: "Gearlock Steel Curvebow",           bucket: "Raid T3", normal: "Meldrath the Malignant",          teek: [{mob:"Keeper of Stones", count:1},{mob:"Kerafyrm", count:1},{mob:"Tjudawos", count:1},{mob:"Zeixshi`Kar", count:1}], xtier: true, same: ["Keeper of Stones","Kerafyrm","Tjudawos","Zeixshi`Kar"], nights: ["5/19","5/28","6/2"] },
  { item: "Gnomish Engineer's Gearloop",       bucket: "Raid T3", normal: "Meldrath the Malignant",          teek: [{mob:"Keeper of Stones", count:1},{mob:"Kildrukaun", count:1},{mob:"Tjudawos", count:1}], xtier: true, same: ["Keeper of Stones","Kildrukaun","Tjudawos"], nights: ["5/14","5/19","6/2"] },
  { item: "High-Volume Servant Transceiver",   bucket: "Raid T3", normal: "Meldrath the Malignant",          teek: [{mob:"Keeper of Stones", count:1},{mob:"Kildrukaun", count:1},{mob:"Vyskudra", count:1},{mob:"Kerafyrm", count:1},{mob:"Ralkor's Crystals", count:2}], xtier: true, same: ["Keeper of Stones","Kildrukaun","Vyskudra","Kerafyrm","Ralkor's Crystals"], nights: ["5/19","5/26","5/28"] },
  { item: "Hydraulic Hammer of Smashing",      bucket: "Raid T3", normal: "Meldrath the Malignant",          teek: [{mob:"Kildrukaun", count:1},{mob:"Keeper of Stones", count:1},{mob:"Vyskudra", count:1}], xtier: true, same: ["Kildrukaun","Keeper of Stones","Vyskudra"], nights: ["5/9","5/14","5/26"] },
  { item: "Oil Stained Crystal",               bucket: "Raid T3", normal: "Meldrath the Malignant",          teek: [], xtier: false, same: [], nights: [] },

  // ══════════════════════════════════════════════════════════════════════════
  // RAID T4 — Crystallos
  // Bosses: Keepers of Stone, Halls of Fire, Ice Constructs, Aerius Windfury,
  //         Kildrukaun, Tjudawos, Zeixshi`Kar, Vyskudra,
  //         Brood Mother Visziaj, Kerafyrm the Awakened
  // ══════════════════════════════════════════════════════════════════════════

  // ── Keepers of Stone drops ────────────────────────────────────────────────
  { item: "Blood-Crystal Stone of Rebellion",  bucket: "Raid T4", normal: "Keepers of Stone",                teek: [{mob:"Meldrath", count:1},{mob:"Ralkor's Crystals", count:1}], xtier: true, same: ["Meldrath","Ralkor's Crystals"], nights: ["5/7","6/4"] },
  { item: "Fanatic's Badge of Passing",        bucket: "Raid T4", normal: "Keepers of Stone",                teek: [{mob:"Keeper of Stones", count:1},{mob:"Meldrath", count:1},{mob:"Ralkor's Crystals", count:1}], xtier: true, same: ["Meldrath","Ralkor's Crystals"], nights: ["5/14","5/23","6/4"] },
  { item: "Mounted Prismatic Focus-Gem",       bucket: "Raid T4", normal: "Keepers of Stone",                teek: [{mob:"Meldrath", count:1},{mob:"Keeper of Stones", count:1},{mob:"Ralkor's Crystals", count:1}], xtier: true, same: ["Meldrath","Ralkor's Crystals"], nights: ["5/7","5/14","6/4"] },
  { item: "Wyvern Signet of Doctrine",         bucket: "Raid T4", normal: "Keepers of Stone",                teek: [], xtier: false, same: [], nights: [] },
  { item: "Wyvern-Crafted Adornment",          bucket: "Raid T4", normal: "Keepers of Stone",                teek: [{mob:"Tjudawos", count:1},{mob:"Kildrukaun", count:1},{mob:"Brood Mother Visziaj", count:1}], xtier: false, same: ["Tjudawos","Kildrukaun","Brood Mother Visziaj"], nights: ["5/19","6/2","6/4"] },

  // ── Halls of Fire drops ───────────────────────────────────────────────────
  { item: "Bauble of Prismatic Flame",         bucket: "Raid T4", normal: "Halls of Fire",                   teek: [{mob:"Breakneck", count:2},{mob:"Battle Room", count:1},{mob:"Brinda", count:1}], xtier: true, same: ["Breakneck","Battle Room","Brinda"], nights: ["5/7","5/30","6/6"] },
  { item: "Drakeling's Mark of Allegiance",    bucket: "Raid T4", normal: "Halls of Fire",                   teek: [{mob:"Breakneck", count:1},{mob:"Aerius Windfury", count:1},{mob:"Battle Room", count:1},{mob:"Ice Constructs", count:2}], xtier: true, same: ["Breakneck","Aerius Windfury","Battle Room"], nights: ["5/7","5/19","5/21","5/26"] },
  { item: "Kindjal of Martyrdom",              bucket: "Raid T4", normal: "Halls of Fire",                   teek: [{mob:"Krond", count:2},{mob:"Halls of Fire", count:2},{mob:"Breakneck", count:1}], xtier: true, same: ["Krond","Breakneck"], nights: ["5/2","5/7","5/14","5/30"] },
  { item: "Pauldrons of Legendary Conquest",   bucket: "Raid T4", normal: "Halls of Fire",                   teek: [{mob:"Krond", count:2},{mob:"Aerius Windfury", count:3},{mob:"Brinda", count:1}], xtier: true, same: ["Krond","Aerius Windfury","Brinda"], nights: ["5/2","5/7","5/19","5/26","6/6"] },
  { item: "Spaulders of Vibrant Succor",       bucket: "Raid T4", normal: "Halls of Fire",                   teek: [{mob:"Battle Room", count:1},{mob:"Battle Room", count:1}], xtier: true, same: ["Battle Room"], nights: ["5/21","5/30"] },

  // ── Ice Constructs drops ──────────────────────────────────────────────────
  { item: "Ancient Sigil-Runed Censer",        bucket: "Raid T4", normal: "Ice Constructs",                  teek: [{mob:"Chief Researcher Entharr", count:1}], xtier: false, same: ["Chief Researcher Entharr"], nights: ["5/9"] },
  { item: "Coldspire of Channeling",           bucket: "Raid T4", normal: "Ice Constructs",                  teek: [{mob:"Bargangle", count:1}], xtier: true, same: ["Bargangle"], nights: ["4/30"] },
  { item: "Magma-Wrought Painloop",            bucket: "Raid T4", normal: "Ice Constructs",                  teek: [{mob:"Battle Room", count:1},{mob:"Chief Researcher Entharr", count:1},{mob:"Soulbleeder", count:1}], xtier: true, same: ["Battle Room","Chief Researcher Entharr","Soulbleeder"], nights: ["5/7","5/9","5/28"] },
  { item: "Prismatic Rune of the Fallen",      bucket: "Raid T4", normal: "Ice Constructs",                  teek: [], xtier: false, same: [], nights: [] },
  { item: "Signet of the Great Blasphemy",     bucket: "Raid T4", normal: "Ice Constructs",                  teek: [{mob:"Krond", count:1},{mob:"Bargangle", count:1}], xtier: true, same: ["Krond","Bargangle"], nights: ["5/2","6/6"] },

  // ── Aerius Windfury drops ─────────────────────────────────────────────────
  { item: "Backplate of Blessed Resilience",   bucket: "Raid T4", normal: "Aerius Windfury",                 teek: [{mob:"Brinda", count:3},{mob:"Ice Constructs", count:1},{mob:"Krond", count:1},{mob:"Battle Room", count:1}], xtier: true, same: ["Brinda","Ice Constructs","Krond","Battle Room"], nights: ["5/2","5/7","5/14","5/23","6/6"] },
  {
    item: "Circular Magmatic Disc",
    bucket: "Raid T4",
    normal: "Aerius Windfury",
    teek: [{mob:"Soulbleeder", count:1},{mob:"Breakneck", count:1},{mob:"Ice Constructs", count:2},{mob:"Halls of Fire", count:1},{mob:"Brinda", count:2}],
    xtier: true,
    same: ["Soulbleeder","Breakneck","Halls of Fire","Brinda"],
    nights: ["4/25","4/30","5/9","5/14","5/19","6/6"]
  },
  { item: "Golem-Lord's Earring of Control",   bucket: "Raid T4", normal: "Aerius Windfury",                 teek: [{mob:"Ice Constructs", count:1},{mob:"Battle Room", count:1}], xtier: true, same: ["Ice Constructs","Battle Room"], nights: ["5/9","5/16"] },
  { item: "Icy Dirk of Meditation",            bucket: "Raid T4", normal: "Aerius Windfury",                 teek: [{mob:"Krond", count:1}], xtier: true, same: ["Krond"], nights: ["5/23"] },
  {
    item: "Jewel of Resolute Obedience",
    bucket: "Raid T4",
    normal: "Aerius Windfury",
    teek: [{mob:"Soulbleeder", count:1},{mob:"Breakneck", count:1},{mob:"Brinda", count:1},{mob:"Ice Constructs", count:2},{mob:"Battle Room", count:1},{mob:"Halls of Fire", count:1},{mob:"Battle Room", count:1}],
    xtier: true,
    same: ["Soulbleeder","Breakneck","Brinda","Battle Room","Halls of Fire"],
    nights: ["4/25","4/30","5/7","5/9","5/16","5/19","6/6"]
  },

  // ── Kildrukaun drops ──────────────────────────────────────────────────────
  { item: "Blosseron of the Crystalheart",     bucket: "Raid T4", normal: "Kildrukaun / Kerafyrm the Awakened", teek: [{mob:"Kildrukaun", count:1},{mob:"Kerafyrm", count:2}], xtier: false, same: ["Kerafyrm"], nights: ["5/26","5/28"] },
  { item: "Draconic Faceguard of the True-Blooded", bucket: "Raid T4", normal: "Kildrukaun",                 teek: [,{mob:"Tjudawos", count:1}], xtier: false, same: ["Tjudawos"], nights: [,"6/2"] },
  { item: "Drakestone of the Unborn",          bucket: "Raid T4", normal: "Kildrukaun",                      teek: [{mob:"Tjudawos", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Tjudawos","Meldrath"], nights: ["5/14","5/16"] },
  { item: "Earring of Dragon's Fire",          bucket: "Raid T4", normal: "Kildrukaun",                      teek: [,{mob:"Kildrukaun", count:1}], xtier: false, same: ["Kildrukaun"], nights: [,"6/2"] },
  {
    item: "Facemask of Cleansing",
    bucket: "Raid T4",
    normal: "Kildrukaun",
    teek: [{mob:"Ralkor's Crystals", count:2},{mob:"Kildrukaun", count:1},{mob:"Kerafyrm", count:1}],
    xtier: true,
    same: ["Ralkor's Crystals"],
    nights: ["4/25","5/9","5/12"]
  },
  { item: "Longsword of the Fanatic Legion",   bucket: "Raid T4", normal: "Kildrukaun",                      teek: [{mob:"Meldrath", count:1}], xtier: true, same: ["Meldrath"], nights: ["5/16"] },
  { item: "Prismatic Greatspear of Bloodshed", bucket: "Raid T4", normal: "Kildrukaun",                      teek: [{mob:"Kerafyrm", count:1}], xtier: false, same: ["Kerafyrm"], nights: ["5/12"] },
  { item: "Ritual Visor of Darkness",          bucket: "Raid T4", normal: "Kildrukaun",                      teek: [], xtier: false, same: [], nights: [] },
  { item: "Veil of Draconic Study",            bucket: "Raid T4", normal: "Kildrukaun",                      teek: [{mob:"Kildrukaun", count:1},{mob:"Tjudawos", count:2}], xtier: false, same: ["Tjudawos"], nights: ["5/9","5/14","6/2"] },

  // ── Tjudawos drops ────────────────────────────────────────────────────────
  { item: "Ancient Earstud of Continuation",   bucket: "Raid T4", normal: "Tjudawos",                        teek: [,{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Keeper of Stones"], nights: [,"6/2"] },
  { item: "Beveled Quartz Faceguard",          bucket: "Raid T4", normal: "Tjudawos",                        teek: [{mob:"Zeixshi`Kar", count:1},{mob:"Brood Mother Visziaj", count:2},{mob:"Ralkor's Crystals", count:2}], xtier: true, same: ["Zeixshi`Kar","Brood Mother Visziaj","Ralkor's Crystals"], nights: ["5/19","5/28"] },
  {
    item: "Chain Gorget of the Scaleborn",
    bucket: "Raid T4",
    normal: "Tjudawos",
    teek: [{mob:"Ralkor's Crystals", count:1},{mob:"Kerafyrm", count:1},{mob:"Brood Mother Visziaj", count:1}],
    xtier: true,
    same: ["Ralkor's Crystals","Brood Mother Visziaj"],
    nights: ["4/25","5/21","5/28"]
  },
  { item: "Crimson Drakesblood Earring",       bucket: "Raid T4", normal: "Tjudawos",                        teek: [{mob:"Brood Mother Visziaj", count:1},{mob:"Zeixshi`Kar", count:1}], xtier: false, same: ["Brood Mother Visziaj","Zeixshi`Kar"], nights: ["5/28","6/2"] },
  { item: "Dragonforged Earring of Charity",   bucket: "Raid T4", normal: "Tjudawos",                        teek: [], xtier: false, same: [], nights: [] },
  { item: "Flashing Prismatic Knucklewraps",   bucket: "Raid T4", normal: "Tjudawos",                        teek: [{mob:"Kildrukaun", count:1}], xtier: false, same: ["Kildrukaun"], nights: ["5/14"] },
  { item: "Heor`Otor the Frozen Waste",        bucket: "Raid T4", normal: "Tjudawos / Kerafyrm the Awakened",teek: [{mob:"Zeixshi`Kar", count:1}], xtier: false, same: ["Zeixshi`Kar"], nights: ["5/19"] },
  { item: "Intricately Carved Greatsword",     bucket: "Raid T4", normal: "Tjudawos",                        teek: [{mob:"Kildrukaun", count:1},{mob:"Zeixshi`Kar", count:1},{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Kildrukaun","Zeixshi`Kar","Keeper of Stones"], nights: ["5/14","5/19","6/2"] },
  { item: "Magma-Studded Earguard",            bucket: "Raid T4", normal: "Tjudawos",                        teek: [{mob:"Kerafyrm", count:1},{mob:"Zeixshi`Kar", count:1}], xtier: false, same: ["Kerafyrm","Zeixshi`Kar"], nights: ["5/21","6/2"] },

  // ── Zeixshi`Kar drops ─────────────────────────────────────────────────────
  { item: "Amice of Black Dawn",               bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [{mob:"Tjudawos", count:2},{mob:"Zeixshi`Kar", count:1},{mob:"Meldrath", count:2},{mob:"Brood Mother Visziaj", count:1}], xtier: true, same: ["Tjudawos","Meldrath","Brood Mother Visziaj"], nights: ["5/9","5/12","5/16","6/2","6/4"] },
  { item: "Cloak of the Draconic Legion",      bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [{mob:"Keeper of Stones", count:1},{mob:"Brood Mother Visziaj", count:1}], xtier: false, same: ["Keeper of Stones","Brood Mother Visziaj"], nights: ["5/19","5/21"] },
  { item: "Enveloping Chromascale Cloak",      bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [{mob:"Vyskudra", count:1},{mob:"Tjudawos", count:2},{mob:"Meldrath", count:1}], xtier: true, same: ["Vyskudra","Tjudawos","Meldrath"], nights: ["5/12","5/14","6/2","6/6"] },
  { item: "Fanatical Earring of Pain Suppression", bucket: "Raid T4", normal: "Zeixshi`Kar",                 teek: [{mob:"Tjudawos", count:1},{mob:"Brood Mother Visziaj", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Tjudawos","Brood Mother Visziaj","Meldrath"], nights: ["5/9","5/21","6/13"] },
  { item: "Giovin the Smoldering",             bucket: "Raid T4", normal: "Zeixshi`Kar / Kerafyrm the Awakened", teek: [{mob:"Vyskudra", count:2},{mob:"Keeper of Stones", count:1},{mob:"Brood Mother Visziaj", count:1},{mob:"Meldrath", count:1}], xtier: false, same: ["Vyskudra","Keeper of Stones","Brood Mother Visziaj","Meldrath"], nights: ["5/12","5/19","5/21","5/26","6/13"] },
  { item: "Pulsing Draconic Wurmstone",        bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [{mob:"Zeixshi`Kar", count:1},{mob:"Tjudawos", count:1},{mob:"Kildrukaun", count:1}], xtier: false, same: ["Tjudawos","Kildrukaun"], nights: ["5/12","5/14","5/19"] },
  { item: "Spaulders of the Ancient Warder",   bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [,{mob:"Brood Mother Visziaj", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Brood Mother Visziaj","Meldrath"], nights: [,"6/4","6/6"] },
  { item: "Stonehewn Radiant Band",            bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [{mob:"Kildrukaun", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Kildrukaun","Meldrath"], nights: ["5/19","6/13"] },
  { item: "Volatile Blackflame Stiletto",      bucket: "Raid T4", normal: "Zeixshi`Kar",                     teek: [{mob:"Vyskudra", count:1},{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Vyskudra","Keeper of Stones"], nights: ["5/12","5/19"] },

  // ── Vyskudra drops ────────────────────────────────────────────────────────
  { item: "Crystal-Linked Cloak",              bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Zeixshi`Kar", count:1},{mob:"Brood Mother Visziaj", count:1}], xtier: false, same: ["Zeixshi`Kar","Brood Mother Visziaj"], nights: ["5/12","5/21"] },
  { item: "Fingerloop of Prismatic Rage",      bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Keeper of Stones", count:1},{mob:"Kildrukaun", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Keeper of Stones","Kildrukaun","Meldrath"], nights: ["5/9","5/19","5/23"] },
  { item: "Granite Shoulderpads of Zealotry",  bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Kildrukaun", count:1},{mob:"Zeixshi`Kar", count:1},{mob:"Meldrath", count:1},{mob:"Kerafyrm", count:1}], xtier: true, same: ["Kildrukaun","Zeixshi`Kar","Meldrath","Kerafyrm"], nights: ["5/9","5/12","5/23","6/4"] },
  { item: "Highblade of the Wyvern Lord",      bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Keeper of Stones"], nights: ["5/9"] },
  { item: "Jagged Astral Ring",                bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Brood Mother Visziaj", count:1}], xtier: false, same: ["Brood Mother Visziaj"], nights: ["5/12"] },
  { item: "Luminescent Ring of Benevolence",   bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Kildrukaun", count:1},{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Kildrukaun","Keeper of Stones"], nights: ["5/9","5/26"] },
  { item: "Massive Crystal-Flecked Faceplate", bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Kildrukaun", count:2},{mob:"Brood Mother Visziaj", count:1},{mob:"Kerafyrm", count:1}], xtier: false, same: ["Kildrukaun","Brood Mother Visziaj","Kerafyrm"], nights: ["5/14","5/19","5/21","6/4"] },
  { item: "Nyseng the Deep-Born",              bucket: "Raid T4", normal: "Vyskudra / Kerafyrm the Awakened",teek: [{mob:"Tjudawos", count:2},{mob:"Kildrukaun", count:1},{mob:"Brood Mother Visziaj", count:1},{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Tjudawos","Kildrukaun","Brood Mother Visziaj","Keeper of Stones"], nights: ["5/9","5/12","5/14","5/26"] },
  { item: "Purified Silverstone of Warding",   bucket: "Raid T4", normal: "Vyskudra",                        teek: [{mob:"Kildrukaun", count:1}], xtier: false, same: ["Kildrukaun"], nights: ["5/14"] },

  // ── Brood Mother Visziaj drops ────────────────────────────────────────────
  { item: "Amoger the Jarring",                bucket: "Raid T4", normal: "Brood Mother Visziaj / Kerafyrm the Awakened", teek: [{mob:"Keeper of Stones", count:1},{mob:"Vyskudra", count:2},{mob:"Meldrath", count:1}], xtier: false, same: ["Keeper of Stones","Vyskudra","Meldrath"], nights: ["5/19","5/21","6/2","6/6"] },
  { item: "Arcane Runed Dragonsash",           bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [{mob:"Kerafyrm", count:1}], xtier: false, same: [], nights: ["5/21"] },
  { item: "Crusher of the Crimson Dawn",       bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [{mob:"Kildrukaun", count:1},{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Kildrukaun","Keeper of Stones"], nights: ["5/26","6/2"] },
  { item: "Deep-Hewn Crystal Bulwark",         bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [{mob:"Meldrath", count:1},{mob:"Kerafyrm", count:1}], xtier: true, same: ["Meldrath"], nights: ["5/2","5/21"] },
  { item: "Girdle of the Great Wyrm",          bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [,{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Keeper of Stones"], nights: [,"6/2"] },
  { item: "Golem-Construct's Enormous Bracelet", bucket: "Raid T4", normal: "Brood Mother Visziaj",           teek: [{mob:"Meldrath", count:2},{mob:"Kerafyrm", count:1}], xtier: true, same: ["Meldrath","Kerafyrm"], nights: ["5/2","5/12","5/30"] },
  { item: "Greatmaul of the Prismatic Flight", bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [{mob:"Kerafyrm", count:1},{mob:"Meldrath", count:1}], xtier: false, same: ["Meldrath"], nights: ["5/12","5/30"] },
  { item: "Platinum Drakelord's Signet",       bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [,{mob:"Meldrath", count:1}], xtier: true, same: ["Meldrath"], nights: [,"5/30"] },
  { item: "Scale Loop of Tenacity",            bucket: "Raid T4", normal: "Brood Mother Visziaj",             teek: [,{mob:"Meldrath", count:1}], xtier: true, same: ["Meldrath"], nights: [,"5/30"] },

  // ── Kerafyrm the Awakened drops ───────────────────────────────────────────
  { item: "Ancient Dragon's Tear Necklace",    bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Tjudawos", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Tjudawos","Meldrath"], nights: ["5/9","6/13"] },
  { item: "Cloak of Shorn Dragonscales",       bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Keeper of Stones", count:1},{mob:"Kerafyrm", count:1}], xtier: false, same: ["Keeper of Stones","Kerafyrm"], nights: ["5/19","5/28"] },
  { item: "Crystal-Spiked Shouldermail",       bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Vyskudra", count:1}], xtier: false, same: ["Vyskudra"], nights: ["5/26"] },
  { item: "Crystalforged Tower Shield",        bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Kerafyrm", count:1}], xtier: false, same: [], nights: ["5/28"] },
  { item: "Crystallized Quarreler",            bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Tjudawos", count:1},{mob:"Kildrukaun", count:1}], xtier: false, same: ["Tjudawos"], nights: ["5/9","5/26"] },
  { item: "Flame-Crystal Ornament",            bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Keeper of Stones", count:1},{mob:"Kerafyrm", count:1}], xtier: false, same: ["Keeper of Stones","Kerafyrm"], nights: ["5/19","5/28"] },
  { item: "Frozen Coldrage Stud",              bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Keeper of Stones", count:1},{mob:"Vyskudra", count:1}], xtier: false, same: ["Keeper of Stones","Vyskudra"], nights: ["5/14","5/21"] },
  { item: "Handwraps of the Crystalline Fortress", bucket: "Raid T4", normal: "Kerafyrm the Awakened",        teek: [{mob:"Tjudawos", count:1},{mob:"Vyskudra", count:1}], xtier: false, same: ["Tjudawos","Vyskudra"], nights: ["5/9","5/21"] },
  { item: "High Lance of Draconic Mastery",    bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Vyskudra", count:2},{mob:"Kerafyrm", count:1}], xtier: false, same: ["Vyskudra","Kerafyrm"], nights: ["5/26","5/28"] },
  { item: "Luminous Stormcloud Cloak",         bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [], xtier: false, same: [], nights: [] },
  { item: "Porous Stonegirdle of Recovery",    bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Keeper of Stones", count:1}], xtier: false, same: ["Keeper of Stones"], nights: ["5/14"] },
  { item: "Protective Gorget of the Deep",     bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Vyskudra", count:1}], xtier: false, same: ["Vyskudra"], nights: ["5/21"] },
  { item: "Scale Loop of Loyalty",             bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Keeper of Stones", count:2},{mob:"Kildrukaun", count:1},{mob:"Kerafyrm", count:1},{mob:"Vyskudra", count:1}], xtier: false, same: ["Keeper of Stones","Kerafyrm","Vyskudra"], nights: ["5/14","5/19","5/26","5/28","6/2"] },
  { item: "Shortblade of Prismatic Destruction", bucket: "Raid T4", normal: "Kerafyrm the Awakened",          teek: [{mob:"Tjudawos", count:1},{mob:"Meldrath", count:2}], xtier: true, same: ["Tjudawos","Meldrath"], nights: ["5/26","6/6"] },
  { item: "Stormbolt, Recurve of the Heavens", bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Tjudawos", count:1},{mob:"Kerafyrm", count:1},{mob:"Vyskudra", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Tjudawos","Kerafyrm","Vyskudra","Meldrath"], nights: ["5/26","5/28","6/2","6/13"] },
  { item: "Stra'Hazir the Great Destroyer",    bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [,{mob:"Meldrath", count:1}], xtier: true, same: ["Meldrath"], nights: [,"6/13"] },
  { item: "Waistguard of Fanatic Devotion",    bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Kildrukaun", count:1},{mob:"Vyskudra", count:1},{mob:"Meldrath", count:1}], xtier: true, same: ["Kildrukaun","Vyskudra","Meldrath"], nights: ["5/26","6/2","6/6"] },
  { item: "Waistplate of Fire and Ice",        bucket: "Raid T4", normal: "Kerafyrm the Awakened",            teek: [{mob:"Tjudawos", count:1}], xtier: false, same: ["Tjudawos"], nights: ["5/26"] },
];

