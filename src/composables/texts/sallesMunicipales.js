const salles = [
    {
        styles: {
            titleColor: "var(--darkblue)",
            titleBackgroundColor: 'white',
            textColor: "var(--darktext)",
            backgroundColor: "white",
            textPosition: '2', //set the oreder property of the flex element
            imagePosition: '1',
            footColor: 'var(--brown)',
            tableColor: 'dark'
        },
        content: {
            title: "La salle des fêtes",
            address: "1 Place de la Mairie - Poullaouen",
            text: "Cette salle est située au rez-de-chaussée du bâtiment de la Mairie. Elle ne comprend pas de cuisine mais dispose de 2 frigos, une scène avec une sono fixe et un bar. Des tables et des chaises sont également à votre disposition.",
            sitting: "60",
            standing: "120",
            prices: {
                habitants: {
                    oneDay: "220€",
                    twoDays: "200€"
                },
                exterieurs: {
                    oneDay: "300€",
                    twoDays: "350€"
                },
                
            }
        },
        kitchen: false
    },
    {
        styles: {
            titleColor: "var(--darkblue)",
            titleBackgroundColor: 'white',
            textColor: "var(--lighttext)",
            backgroundColor: "var(--darkblue)",
            textPosition: '1', //set the oreder property of the flex element
            imagePosition: '2',
            footColor: 'var(--brown)',
            tableColor: 'light'
        },
        content: {
            title: "La salle Amzer Zo",
            address: "Rue du Ty Meur - Poullaouen",
            text: "Elle comprend une cuisine entièrement équipée (frigo et chambre froide), une pièce avec un bar, une autre pièce avec une scène et sono fixe. Des tables et des chaises sont à votre disposition.",
            sitting: "216",
            standing: "620",
            prices: {
                habitants: {
                    oneDay: "220€",
                    oneDayKitchen: "+80€",
                    twoDays: "380€",
                    twoDaysKitchen: "+120€"
                },
                exterieurs: {
                    oneDay: "380€",
                    oneDayKitchen: "+120€",
                    twoDays: "680€",
                    twoDaysKitchen: "+220€"
                }
            }
        },
        kitchen: true
    },
    {
        styles: {
            titleColor: "var(--darkblue)",
            titleBackgroundColor: 'white',
            textColor: "var(--darktext)",
            backgroundColor: "white",
            textPosition: '2', //set the oreder property of the flex element
            imagePosition: '1',
            footColor: 'var(--brown)',
            tableColor: 'dark'
        },
        content: {
            title: "La salle touristique",
            address: "Rue du Ty Meur - Poullaouen",
            text: "Cette salle est située au rez-de-chaussée du complexe touristique, associatif et sportif, face à la voie verte. Elle peut être chauffée et comporte un point d’eau et un réfrigérateur.",
            sitting: "?",
            standing: "50",
            prices: {
                habitants: {
                    oneDay: "80€",
                    twoDays: "160€"
                },
                exterieurs: {
                    oneDay: "200€",
                    twoDays: "400€"
                },
                
            }
        },
        kitchen: false
    },
    {
        styles: {
            titleColor: "var(--darkblue)",
            titleBackgroundColor: 'white',
            textColor: "var(--lighttext)",
            backgroundColor: "var(--brown)",
            textPosition: '2', //set the oreder property of the flex element
            imagePosition: '1',
            footColor: 'white',
            tableColor: 'light'
        },
        content: {
            title: "La salle polyvalente",
            address: "3 rue Ti Ker - Locmaria-Berrien",
            text: "Elle comprends une cuisine équipée.",
            sitting: "120",
            standing: "342",
            prices: {
                habitants: {
                    oneDay: "150€",
                    twoDays: "200€"
                },
                exterieurs: {
                    oneDay: "250€",
                    twoDays: "300€"
                },
                
            }
        },
        kitchen: false
    },
]

export default salles
