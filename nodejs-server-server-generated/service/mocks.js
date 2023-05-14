// module.exports.users = [
//     {
//         name: 'hanna',
//         tariffs: this.HANNA_TARIFS,
//         denied: false
//     },
//     {
//         name: 'dominik',
//         tariffs: this.DOMINIK_TARIFS,
//         denied: false
//     },
//     {
//         name: 'adel',
//         tariffs: null,
//         denied: true
//     },
//     {
//         name: 'kristof',
//         tariffs: null,
//         denied: true
//     },    
// ]

module.exports.UNAUTHORIZED_USER = [
    {
      "unic_id" : "000000003c2eef59000000003f0b5b64",
      "cost" : {
        "price" : 13490,
        "loyalty" : "24 hónap hűséggel",
        "currency" : "Ft",
        "frequency" : "hó"
      },
      "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa",
      "invoice_type" : "pay_monthly",
      "tariff_title" : "Yettel Prime+",
      "desc" : [ "Korlátlan mobilnet belföldön", "250 perc beszéd" ]
    }, 
  
    {
      "unic_id" : "000000000cd99205000000001073b071",
      "cost" : {
        "price" : 22490,
        "loyalty" : "24 hónap hűséggel",
        "currency" : "Ft",
        "frequency" : "hó"
      },
      "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa",
      "invoice_type" : "pay_monthly",
      "tariff_title" : "Yettel Prime Max+",
      "desc" : [ "Korlátlan mobilnet belföldön", "Korlátlan beszéd belföldön" ]
    },
  
    {
      "unic_id" : "000000000cd9927b000000001073b071",
      "cost" : {
        "price" : 11490,
        "loyalty" : "24 hónap hűséggel",
        "currency" : "Ft",
        "frequency" : "hó"
      },
      "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa",
      "invoice_type" : "pay_monthly",
      "tariff_title" : "Yettel S Net+ YES!",
      "desc" : [ "26 éven aluli fiataloknak", "50 GB mobilnet belfldön és az EU-ban", "50 perc beszéd" ]
    },
  
    {
      "unic_id" : "000000000cd99271000000001073b071",
      "cost" : {
        "price" : 1100,
        "loyalty" : "Nincs hűségidő",
        "currency" : "Ft",
        "frequency" : "30 nap"
      },
      "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa",
      "invoice_type" : "sim_only",
      "tariff_title" : "Yettel Feltöltőkártyás 1GB megújuló Mobilnet",
      "desc" : [ "1 GB mobilnet a csomagban", "0 perc a csomagban", "Perc- és SMS-díj: 25 Ft" ]
    },
  
    {
      "unic_id" : "000000000cd9926c000000001073b071",
      "cost" : {
        "price" : 3300,
        "loyalty" : "Nincs hűségidő",
        "currency" : "Ft",
        "frequency" : "30 nap"
      },
      "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa",
      "invoice_type" : "sim_only",
      "tariff_title" : "Yettel Feltöltőkártyás 2in1 Net csomag",
      "desc" : [ "5 GB mobilnet a csomagban", "25 perc a csomagban", "További perc- és SMS-díj: 25 Ft" ]
    },
  
  
  ]
module.exports.HANNA_TARIFS = [
    {
        "unic_id" : "000000003c2eef59000000003f0b5b64666",
        "cost" : {
          "price" : 9990,
          "loyalty" : "24 hónap hűséggel",
          "currency" : "Ft",
          "frequency" : "hó"
        },
        "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa/custom-user",
        "invoice_type" : "pay_monthly",
        "tariff_title" : "Yettel Hűséges Hanna Prime+",
        "desc" : [ "Korlátlan mobilnet belföldön", "500 perc beszéd" ]
      }, 

      {
        "unic_id" : "000000000cd99205000000001073b071666",
        "cost" : {
          "price" : 19990,
          "loyalty" : "24 hónap hűséggel",
          "currency" : "Ft",
          "frequency" : "hó"
        },
        "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa/custom-user",
        "invoice_type" : "pay_monthly",
        "tariff_title" : "Yettel Hűséges Hanna Prime Max+",
        "desc" : [ "Korlátlan mobilnet az EU-ban", "Korlátlan beszéd" ]
      }, 
]
module.exports.DOMINIK_TARIFS = [
    {
        "unic_id" : "000000000cd9927b000000001073b071777",
        "cost" : {
          "price" : 7990,
          "loyalty" : "24 hónap hűséggel",
          "currency" : "Ft",
          "frequency" : "hó"
        },
        "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa/custom-user",
        "invoice_type" : "pay_monthly",
        "tariff_title" : "Yettel Derék Dominik S Net+",
        "desc" : [ "Korlátlan mobilnet belföldön", "150 perc beszéd" ]
      }, 

      {
        "unic_id" : "000000003c2eef59000000003f0b5b64777",
        "cost" : {
          "price" : 23990,
          "loyalty" : "24 hónap hűséggel",
          "currency" : "Ft",
          "frequency" : "hó"
        },
        "prime_tariffs_link" : "https://www.yettel.hu/prime-tarifa/custom-user",
        "invoice_type" : "pay_monthly",
        "tariff_title" : "Yettel Derék Dominik Prime+",
        "desc" : [ "Korlátlan mobilnet az EU-ban", "Korlátlan beszéd" ]
      }, 
]
