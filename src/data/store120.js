// STATUS CODES
// 0 - actions required
// 1 - active
// 2 - completed

export default {
    1001: {
        id: 1001,
        name: "Print Box Toppers",
        status: 0,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2020, 6, 13),
        ending: new Date(2020, 8, 15),
        campaigns: [
            {
                product: 'Box Toppers',
                start: new Date(2020, 6, 13),
            }
        ],
        invoices: []
    },
    1002: {
        id: 1002,
        name: "Print Box Toppers",
        status: 2,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2020, 2, 23),
        ending: new Date(2020, 4, 27),
        campaigns: [
            {
                product: 'Box Toppers',
                start: new Date(2020, 2, 23),
            }
        ],
        invoices: [
            {
                date: new Date(2020, 4, 27),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.00
                    },
                    {
                        product: "Box Topper Extras",
                        total: 34.00
                    },
                ]
            },
            {
                date: new Date(2020, 4, 20),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.00
                    },
                    {
                        product: "Box Topper Extras",
                        total: 34.00
                    },
                ]
            },
            {
                date: new Date(2020, 4, 13),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.00
                    },
                    {
                        product: "Box Topper Extras",
                        total: 34.00
                    },
                ]
            },
        ]
    },
    1003: {
        id: 1003,
        name: "Annual Mailing Program",
        status: 1,
        business: "Scranton #120",
        quantity: 25000,
        starting: new Date(2020, 1, 3),
        ending: new Date(2021, 1, 1),
        campaigns: [
            {
                product: "Peel-A-Box Postcards",
                start: new Date(2020, 2, 23),
            },
            {
                product: "Menus",
                start: new Date(2020, 3, 20),
            },
            {
                product: "Oversized Postcards",
                start: new Date(2020, 5, 29),
            },
            {
                product: "Scratch-Off Postcards",
                start: new Date(2020, 8, 14),
            },
            {
                product: "Folded Magnets",
                start: new Date(2020, 10, 23),
            }
        ],
        invoices: [
            {
                date: new Date(2020, 6, 1),
                items: [
                    {
                        product: "Mail List Costs",
                        total: 8.14
                    },
                    {
                        product: "Postcards",
                        total: 810.15
                    }
                ]
            },
            {
                date: new Date(2020, 5, 24),
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
                date: new Date(2020, 5, 17),
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
    },
    1004: {
        id: 1004,
        name: "Print Menus",
        status: 2,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2019, 10, 4),
        ending: new Date(2020, 0, 8),
        campaigns: [
            {
                product: "Menus",
                start: new Date(2020, 10, 4),
            }
        ],
        invoices: [
            {
                date: new Date(2020, 0, 8),
                items: [
                    {
                        product: "Menus",
                        total: 50.25
                    }
                ]
            },
            {
                date: new Date(2020, 0, 1),
                items: [
                    {
                        product: "Menus",
                        total: 50.25
                    }
                ]
            },
            {
                date: new Date(2019, 11, 25),
                items: [
                    {
                        product: "Menus",
                        total: 50.25
                    }
                ]
            },
        ]
    },
    1005: {
        id: 1005,
        name: "Print Box Toppers",
        status: 2,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2019, 6, 8),
        ending: new Date(2020, 8, 9),
        campaigns: [
            {
                product: "Box Toppers",
                start: new Date(2019, 6, 8),
            }
        ],
        invoices: [
            {
                date: new Date(2019, 8, 9),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
            {
                date: new Date(2019, 8, 2),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
            {
                date: new Date(2019, 7, 26),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
        ]
    },
    1006: {
        id: 1006,
        name: "Print Box Toppers",
        status: 2,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2019, 4, 6),
        ending: new Date(2020, 6, 10),
        campaigns: [
            {
                product: "Box Toppers",
                start: new Date(2019, 4, 6),
            }
        ],
        invoices: [
            {
                date: new Date(2019, 6, 10),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
            {
                date: new Date(2019, 6, 3),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
            {
                date: new Date(2019, 5, 26),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.10
                    }
                ]
            },
        ]
    },
    1007: {
        id: 1007,
        name: "Print Box Toppers",
        status: 2,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2019, 0, 28),
        ending: new Date(2020, 3, 3),
        campaigns: [
            {
                product: "Box Toppers",
                start: new Date(2019, 0, 28),
            }
        ],
        invoices: [
            {
                date: new Date(2019, 3, 3),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.05
                    }
                ]
            },
            {
                date: new Date(2019, 2, 27),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.05
                    }
                ]
            },
            {
                date: new Date(2019, 2, 20),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.05
                    }
                ]
            },
        ]
    },
    1008: {
        id: 1008,
        name: "EDDM Postcards",
        status: 2,
        business: "Scranton #120",
        quantity: 5000,
        starting: new Date(2019, 0, 14),
        ending: new Date(2020, 2, 20),
        campaigns: [
            {
                product: "EDDM Postcards",
                start: new Date(2019, 0, 14),
            }
        ],
        invoices: [
            {
                date: new Date(2019, 2, 20),
                items: [
                    {
                        product: "EDDM Postcards",
                        total: 70.43
                    }
                ]
            },
            {
                date: new Date(2019, 2, 13),
                items: [
                    {
                        product: "EDDM Postcards",
                        total: 70.43
                    }
                ]
            },
            {
                date: new Date(2019, 2, 6),
                items: [
                    {
                        product: "EDDM Postcards",
                        total: 70.43
                    }
                ]
            },
        ]
    },
    1009: {
        id: 1009,
        name: "Weekly Mailing",
        status: 2,
        business: "Scranton #120",
        quantity: 5000,
        starting: new Date(2018, 8, 10),
        ending: new Date(2018, 10, 14),
        campaigns: [
            {
                product: "Oversized Postcards",
                start: new Date(2018, 8, 10),
            }
        ],
        invoices: [
            {
                date: new Date(2018, 10, 14),
                items: [
                    {
                        product: "Oversized Postcards",
                        total: 140.00
                    }
                ]
            },
            {
                date: new Date(2018, 10, 7),
                items: [
                    {
                        product: "Oversized Postcards",
                        total: 140.00
                    }
                ]
            },
            {
                date: new Date(2018, 9, 31),
                items: [
                    {
                        product: "Oversized Postcards",
                        total: 140.00
                    }
                ]
            },
        ]
    },
    1010: {
        id: 1010,
        name: "Print Box Toppers",
        status: 2,
        business: "Scranton #120",
        quantity: 10000,
        starting: new Date(2018, 6, 9),
        ending: new Date(2018, 8, 12),
        campaigns: [
            {
                product: "Box Toppers",
                start: new Date(2018, 6, 9),
            }
        ],
        invoices: [
            {
                date: new Date(2018, 8, 12),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.05
                    }
                ]
            },
            {
                date: new Date(2018, 8, 5),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.05
                    }
                ]
            },
            {
                date: new Date(2018, 7, 29),
                items: [
                    {
                        product: "Box Toppers",
                        total: 34.05
                    }
                ]
            },
        ]
    },
    1011: {
        id: 1011,
        name: "Annual Mailing Program",
        status: 2,
        business: "Scranton #120",
        quantity: 20000,
        starting: new Date(2018, 6, 2),
        ending: new Date(2019, 7, 5),
        campaigns: [
            {
                product: "Peel-A-Box Postcards",
                start: new Date(2018, 6, 2),
            },
            {
                product: "Scratch-Off Postcards",
                start: new Date(2018, 8, 10),
            },
            {
                product: "Oversized Postcards",
                start: new Date(2019, 0, 21),
            },
            {
                product: "Menus",
                start: new Date(2019, 2, 18),
            },
            {
                product: "Folded Magnets",
                start: new Date(2019, 4, 27),
            },
        ],
        invoices: [
            {
                date: new Date(2019, 7, 7),
                items: [
                    {
                        product: "Folded Magnets",
                        total: 638.46
                    }
                ]
            },
            {
                date: new Date(2019, 6, 31),
                items: [
                    {
                        product: "Folded Magnets",
                        total: 638.46
                    }
                ]
            },
            {
                date: new Date(2019, 6, 24),
                items: [
                    {
                        product: "Folded Magnets",
                        total: 638.46
                    }
                ]
            },
        ]
    }
}