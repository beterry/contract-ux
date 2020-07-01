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
    1014: {
        id: 1014,
        name: "Print Menus",
        status: 2,
        business: "Wilkes-Barre #121",
        quantity: 10000,
        starting: new Date(2020, 0, 20),
        ending: new Date(2020, 2, 23),
        campaigns: [
            {
                product: 'Menus',
                start: new Date(2020, 0, 20),
            }
        ],
        invoices: [
            {
                date: new Date(2020, 2, 23),
                items: [
                    {
                        product: "Menus",
                        total: 34.00
                    }
                ]
            },
            {
                date: new Date(2020, 2, 16),
                items: [
                    {
                        product: "Menus",
                        total: 34.00
                    }
                ]
            },
            {
                date: new Date(2020, 2, 9),
                items: [
                    {
                        product: "Menus",
                        total: 34.00
                    }
                ]
            },
        ]
    },
    1015: {
        id: 1015,
        name: "Print Box Toppers",
        status: 2,
        business: "Wilkes-Barre #121",
        quantity: 10000,
        starting: new Date(2019, 4, 6),
        ending: new Date(2019, 6, 8),
        campaigns: [
            {
                product: 'Box Toppers',
                start: new Date(2019, 4, 6),
            }
        ],
        invoices: [
            {
                date: new Date(2019, 6, 8),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
            {
                date: new Date(2020, 5, 24),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
            {
                date: new Date(2020, 5, 17),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
        ]
    },
    1016: {
        id: 1016,
        name: "Print Door Hangers",
        status: 2,
        business: "Wilkes-Barre #121",
        quantity: 10000,
        starting: new Date(2019, 1, 18),
        ending: new Date(2019, 3, 22),
        campaigns: [
            {
                product: 'Door Hangers',
                start: new Date(2019, 1, 18),
            }
        ],
        invoices: [
            {
                date: new Date(2019, 3, 22),
                items: [
                    {
                        product: "Door Hangers",
                        total: 34.05
                    }
                ]
            },
            {
                date: new Date(2020, 3, 15),
                items: [
                    {
                        product: "Door Hangers",
                        total: 34.05
                    }
                ]
            },
            {
                date: new Date(2020, 3, 8),
                items: [
                    {
                        product: "Door Hangers",
                        total: 34.05
                    }
                ]
            },
        ]
    },
    1017: {
        id: 1017,
        name: "Annual Mailing Program",
        status: 2,
        business: "Wilkes-Barre #121",
        quantity: 5000,
        starting: new Date(2019, 1, 11),
        ending: new Date(2020, 0, 20),
        campaigns: [
            {
                product: "EDDM Postcards",
                start: new Date(2019, 1, 11),
            },
            {
                product: "Jumbo Postcards",
                start: new Date(2020, 1, 18),
            },
            {
                product: "Menus",
                start: new Date(2020, 3, 29),
            },
            {
                product: "Peel-A-Box Postcards",
                start: new Date(2020, 6, 15),
            },
            {
                product: "Menus",
                start: new Date(2020, 10, 11),
            },
        ],
        invoices: [
            {
                date: new Date(2020, 0, 20),
                items: [
                    {
                        product: "Menus",
                        total: 210.00
                    }
                ]
            },
            {
                date: new Date(2020, 0, 13),
                items: [
                    {
                        product: "Menus",
                        total: 210.00
                    }
                ]
            },
            {
                date: new Date(2020, 0, 6),
                items: [
                    {
                        product: "Menus",
                        total: 210.00
                    }
                ]
            },
        ]
    },
}