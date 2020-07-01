// STATUS CODES
// 0 - actions required
// 1 - active
// 2 - completed

export default {
    1012: {
        id: 1012,
        name: "Print Box Toppers",
        status: 1,
        business: "Wilkes-Barre #121",
        quantity: 10000,
        starting: new Date(2020, 5, 15),
        ending: new Date(2020, 7, 2),
        campaigns: [
            {
                product: 'Box Toppers',
                start: new Date(2020, 5, 15),
            }
        ],
        invoices: [
            {
                date: new Date(2020, 5, 29),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.00
                    }
                ]
            },
            {
                date: new Date(2020, 5, 22),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.00
                    }
                ]
            },
            {
                date: new Date(2020, 5, 15),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.00
                    }
                ]
            },
        ]
    },
    1013: {
        id: 1013,
        name: "Annual Mailing Program",
        status: 1,
        business: "Wilkes-Barre #121",
        quantity: 5000,
        starting: new Date(2020, 1, 3),
        ending: new Date(2021, 1, 1),
        campaigns: [
            {
                product: "Jumbo Postcards",
                start: new Date(2020, 1, 3),
            },
            {
                product: "Folded Magnets",
                start: new Date(2020, 3, 13),
            },
            {
                product: "Small Plastic Postcards",
                start: new Date(2020, 5, 29),
            },
            {
                product: "Menus",
                start: new Date(2020, 8, 7),
            },
            {
                product: "Scratch-Off Postcards",
                start: new Date(2019, 10, 16),
            },
        ],
        invoices: [
            {
                date: new Date(2020, 5, 29),
                items: [
                    {
                        product: "Small Plastic Postcards",
                        total: 229.00
                    }
                ]
            },
            {
                date: new Date(2020, 5, 22),
                items: [
                    {
                        product: "Folded Magnets",
                        total: 229.00
                    }
                ]
            },
            {
                date: new Date(2020, 5, 15),
                items: [
                    {
                        product: "Folded Magnets",
                        total: 229.00
                    }
                ]
            },
        ]
    },
}