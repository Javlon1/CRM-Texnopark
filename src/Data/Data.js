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
        dropdown:[
            {
                id:1,
                link: "/finance",
                nav_uz: "To‘lovlar",
                nav_ru: 'Платежи',
                nav_en: 'Payments',
            },
            {
                id:2,
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
    {
        id: 3,
        lang: 'en'
    },
]