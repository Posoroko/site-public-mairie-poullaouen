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
            tableColor: 'dark',
            
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
        images: {
            main: {
                url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
                alt: "Salle des fêtes de Poullaouën"
            },
            album: [
                require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
                require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
                require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
                require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
                require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
            ]
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
        images: {
            main: {
                url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo.jpg'),
                alt: "Salle Amzer Zo de Plouuaouën"
            },
            album: [
                {
                    url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo-01.jpg'),
                    alt: "Intérieur de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo-02.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo-03.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo-04.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo-05.jpg'),
                    alt: "Scène de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/amzer_zo/salle-amzer-zo-06.jpg'),
                    alt: "Intérieur de la salle Amzer Zo de Poullaouën"
                },

            ]
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
        images: {
            main: {
                url: require('../../assets/images/ma_mairie/salles/salle_touristique/salle-touristique.jpg'),
                alt: "Salle touristique de Poullaouen"
            },
            album: [
                {
                    url: require('../../assets/images/ma_mairie/salles/salle_touristique/salle-touristique-01.jpg'),
                    alt: "Intérieur de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/salle_touristique/salle-touristique-02.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
            ]
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
            title: "La salle polyvalente de Locmaria-Berrien",
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
        images: {
            main: {
                url: require('../../assets/images/ma_mairie/salles/salle_locmaria/salle-locmaria-berrien.jpg'),
                alt: "Salle Polyvalente de Locmaria-Berrien"
            },
            album: [
                {
                    url: require('../../assets/images/ma_mairie/salles/salle_locmaria/salle-locmaria-berrien-01.jpg'),
                    alt: "Intérieur de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/salle_locmaria/salle-locmaria-berrien-02.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/salle_locmaria/salle-locmaria-berrien-03.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
                {
                    url: require('../../assets/images/ma_mairie/salles/salle_locmaria/salle-locmaria-berrien-04.jpg'),
                    alt: "Cuisine de la salle Amzer Zo de Poullaouën"
                },
            ]
        },
        kitchen: false
    },
]

export default salles
