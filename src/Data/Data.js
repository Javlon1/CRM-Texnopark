export const HeaderData = [
    {
        id: 1,
        link: '/',
        nav_uz: 'Statistika',
        nav_ru: 'Статистика',
        nav_en: 'Statistics',
        icon: "bi bi-house-fill",
    },
    {
        id: 2,
        link: '/lid',
        nav_uz: 'Lidlar',
        nav_ru: 'Лиды',
        nav_en: 'Lids',
        icon: "bi bi-bar-chart-fill",

    },
    {
        id: 3,
        link: '/customer',
        nav_uz: 'Mijozlar',
        nav_ru: 'Клиенты',
        nav_en: 'Customers',
        icon: "bi bi-people-fill",
    },
    {
        id: 4,
        link: '/finance',
        nav_uz: 'Moliya',
        nav_ru: 'Финансы',
        nav_en: 'Finance',
        icon: "bi bi-credit-card-fill",
        dropdown: [
            {
                id: 1,
                link: "/finance",
                nav_uz: "To‘lovlar",
                nav_ru: 'Платежи',
                nav_en: 'Payments',
            },
            {
                id: 2,
                link: "/expense",
                nav_uz: 'Harajatlar',
                nav_ru: 'Затраты',
                nav_en: 'Expenses',
            },
        ]
    },
    {
        id: 5,
        link: '/warehouse',
        nav_uz: 'Ombor',
        nav_ru: 'Склад',
        nav_en: 'Warehouse',
        icon: "bi bi-box-seam-fill",
    },
    {
        id: 6,
        link: '/employees',
        nav_uz: 'Hodimlar',
        nav_ru: 'Сотрудники',
        nav_en: 'Employees',
        icon: "bi bi-person-circle",
    },
    {
        id: 7,
        link: '/setting',
        nav_uz: 'Sozlamalar',
        nav_ru: 'Настройки',
        nav_en: 'Settings',
        icon: "bi bi-gear-fill",
    },
]

export const Lang = [
    {
        id: 1,
        lang: 'uz'
    },
    {
        id: 2,
        lang: 'ru'
    },
]


export const NotificationData = [
    {
        id: 1,
        title_uz: "To'lov - Husanboy Zafarov",
        title_ru: "взцйхвй",
        title_en: "wuqidw",
        text_uz: "Husanboy Zafarov 250 000 so'n to'lov qildi, to'liq ma'lumotlarni korish uchun meni bosing",
        text_ru: "равыаы",
        text_en: "gfgfgf",
    },
    {
        id: 2,
        title_uz: "Maxsulot - Sement 600",
        title_ru: "взцйхвй",
        title_en: "wuqidw",
        text_uz: "Yangi Sement 600 maxsuloti qoshildi, narxlarni o'rnatish uchun shu yerga bosing",
        text_ru: "равыаы",
        text_en: "gfgfgf",
    },
]


export const rateData = [
    {
        usd: "1",
        uzs: "12271,82",
    }
]


export const chartsData = [
    {
        id: 1,
        title_uz: "Umumiy aylanma",
        title_ru: "Общий оборот",
        title_en: "Total turnover",
        text_uz: "Oxirgi 30 kunlik",
        text_ru: "щлзщлвй взщйцвлйв звйщцлй",
        text_en: "diqwud  dqwduqb  dqwuid",
        dan: [
            {
                id: 0,
                date: "dan",
            },
            {
                id: 1,
                date: 2,
            },
            {
                id: 2,
                date: 3
            }
        ],
        gacha: [
            {
                id: 0,
                date: "gacha",
            },
            {
                id: 1,
                date: 21,
            },
            {
                id: 2,
                date: 22
            }
        ],
        product: [
            {
                id: 1,
                name_uz: "Schet raqamiga tushgan tushum",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 112,
                color: "#5754E0"
            },
            {
                id: 2,
                name_uz: "Qarzdorlarning soni",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 312,
                color: "#623EB9"
            },
            {
                id: 3,
                name_uz: "Naqd olingan pullar",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 212,
                color: "#1A1E52"
            },
        ]
    },
    {
        id: 2,
        title_uz: "Tovar aylanmasi",
        title_ru: "Оборот товаров",
        title_en: "Ashi turnover",
        text_uz: "Oxirgi 30 kunlik",
        text_ru: "щлзщлвй взщйцвлйв звйщцлй",
        text_en: "diqwud  dqwduqb  dqwuid",
        dan: [
            {
                id: 0,
                date: "dan",
            },
            {
                id: 1,
                date: 2,
            },
        ],
        gacha: [
            {
                id: 0,
                date: "gacha",
            },
            {
                id: 1,
                date: 31,
            },
            {
                id: 2,
                date: 21
            }
        ],
        product: [
            {
                id: 1,
                name_uz: "shim",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 52,
                color: "#5754E0"
            },
            {
                id: 2,
                name_uz: "Koylak",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 112,
                color: "#623EB9"
            },
            {
                id: 3,
                name_uz: "Galstuk ",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 72,
                color: "#1A1E52"
            },
            {
                id: 4,
                name_uz: "Oyoq kiyimlar",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 92,
                color: "#BF88E2"
            },
        ]
    },
    {
        id: 3,
        title_uz: "Mijozlar segmenti",
        title_ru: "Общий оборот",
        title_en: "Total turnover",
        text_uz: "Oxirgi 30 kunlik",
        text_ru: "щлзщлвй взщйцвлйв звйщцлй",
        text_en: "diqwud  dqwduqb  dqwuid",
        dan: [
            {
                id: 0,
                date: "dan",
            },
            {
                id: 1,
                date: 2,
            },
        ],
        gacha: [
            {
                id: 0,
                date: "gacha",
            },
            {
                id: 1,
                date: 12,
            },
            {
                id: 2,
                date: 28
            }
        ],
        product: [
            {
                id: 1,
                name_uz: "Schet raqamiga tushgan tushum",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 212,
                color: "#5754E0"
            },
            {
                id: 2,
                name_uz: "Qarzdorlarning soni",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 152,
                color: "#623EB9"
            },
            {
                id: 3,
                name_uz: "Naqd olingan pullar",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 312,
                color: "#1A1E52"
            },
        ]
    },
    {
        id: 4,
        title_uz: "Harajatlar",
        title_ru: "Общий оборот",
        title_en: "Total turnover",
        text_uz: "Oxirgi 30 kunlik",
        text_ru: "щлзщлвй взщйцвлйв звйщцлй",
        text_en: "diqwud  dqwduqb  dqwuid",
        dan: [
            {
                id: 0,
                date: "dan",
            },
            {
                id: 1,
                date: 2,
            },
        ],
        gacha: [
            {
                id: 0,
                date: "gacha",
            },
            {
                id: 1,
                date: 21,
            },
        ],
        product: [
            {
                id: 1,
                name_uz: "Schet raqamiga tushgan tushum",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 212,
                color: "#5754E0"
            },
            {
                id: 2,
                name_uz: "Qarzdorlarning soni",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 252,
                color: "#623EB9"
            },
            {
                id: 3,
                name_uz: "Naqd olingan pullar",
                name_ru: "ововов вовов",
                name_en: "dhhdd ddhdd jd",
                value: 312,
                color: "#1A1E52"
            },
        ]
    },
]


export const dataTable = [
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 2,
        name: "javlon",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "jony",
        phone: 1,
        comment: "daygd dwayud dayufd",
        balans: 0
    },
    {
        id: 1,
        name: "javlon",
        phone: 2,
        comment: "b",
        balans: 0
    },
]

export const DragDropData = [
    {
        id:1,
        title_uz:"So‘rovlar uz",
        title_ru:"So‘rovlar ru",
        items:[
            {
                id:1,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:2,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:3,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:4,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:5,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
        ],
    },
    {
        id:2,
        title_uz:"Kutish uz",
        title_ru:"Kutish ru",
        items:[
            {
                id:6,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:7,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:8,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:9,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:10,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
        ],
    },
    {
        id:3,
        title_uz:"To‘plam uz",
        title_ru:"To‘plam ru",
        items:[
            {
                id:11,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:12,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:13,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:14,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
            {
                id:15,
                name:"Mukhammadjonov javlon",
                phone:905251243,
            },
        ],
    },
]