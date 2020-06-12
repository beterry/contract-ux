// STATUS CODES
// 0 - actions required
// 1 - active
// 2 - completed

export default {
    1001: {
        id: 1001,
        name: "Box Toppers",
        status: 0,
        business: "Five Star Pizza - Kissimmee",
        quantity: 5000,
        starting: new Date(2020, 3, 20),
        ending: new Date(2020, 3, 20),
        campaigns: [],
        invoices: []
    },
    1002: {
        id: 1002,
        name: "Annual Mailing Program",
        status: 0,
        business: "Five Star Pizza - Belleview",
        quantity: 5000,
        starting: new Date(2020, 4, 13),
        ending: new Date(2021, 4, 1),
        campaigns: [],
        invoices: []
    },
    1003: {
        id: 1003,
        name: "Annual Mailing Program",
        status: 1,
        business: "Five Star Pizza - Jacksonville",
        quantity: 25000,
        starting: new Date(2020, 4, 13),
        ending: new Date(2021, 4, 1),
        campaigns: [
            {
                product: "Peel-A-Box Postcards",
                start: new Date(2020, 2, 23),
                end: new Date(2020, 3, 19),
                weeks: 11,
                status: 2,
                artwork: "1003_peel.png"
            },
            {
                product: "Menus",
                start: new Date(2020, 3, 20),
                end: new Date(2020, 5, 28),
                weeks: 10,
                status: 1,
                artwork: "1003_menu.png"
            },
            {
                product: "Oversized Postcards",
                start: new Date(2020, 5, 29),
                end: new Date(2020, 8, 13),
                weeks: 11,
                status: 0,
                artwork: "1003_postcard.png"
            },
            {
                product: "Scratch-Off Postcards",
                start: new Date(2020, 8, 14),
                end: new Date(2020, 10, 22),
                weeks: 10,
                status: 0,
                artwork: "1003_scratch.png"
            },
            {
                product: "Folded Magnets",
                start: new Date(2020, 10, 23),
                end: new Date(2021, 1, 1),
                weeks: 11,
                status: 0,
                artwork: "1003_magnet.png"
            }
        ],
        invoices: [
            {
                date: new Date(2020, 5, 3),
                items: [
                    {
                        product: "Mail List Costs",
                        total: 8.91
                    },
                    {
                        product: "Menus",
                        total: 792.88
                    }
                ]
            },
            {
                date: new Date(2020, 4, 27),
                items: [
                    {
                        product: "Mail List Costs",
                        total: 8.91
                    },
                    {
                        product: "Menus",
                        total: 792.88
                    }
                ]
            },
            {
                date: new Date(2020, 4, 20),
                items: [
                    {
                        product: "Mail List Costs",
                        total: 8.91
                    },
                    {
                        product: "Menus",
                        total: 792.88
                    }
                ]
            }
        ]
    }
}