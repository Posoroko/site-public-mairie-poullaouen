import Ecole from '@/views/mon quotidien/Ecole'
import Associations from '@/views/mon quotidien/Associations'
// import Bibliothèque from '@/views/mon quotidien/Bibliothèque'
// import Entreprises from '@/views/mon quotidien/Entreprises'
// import Equipement from '@/views/mon quotidien/Entreprises'
// import Poste from '@/views/mon quotidien/Poste'



const routesMonQuotidien =  {
    ecole: {
        path: "/l'ecole-municipale",
        name: 'Ecole',
        component: Ecole
    },
    associations: {
        path: '/les-associations',
        name: 'Associations',
        component: Associations
    },
    // bibliothèque: {
    //     path: '/bibliothèque',
    //     name: 'Bibliothèque',
    //     component: Bibliothèque
    // },
    // équipementSportif: {
    //     path: '/équipements-de-sport-et-de-loisir',
    //     name: 'Equipement',
    //     component: Equipement
    // },
    // entreprises: {
    //     path: '/commerces-et-entreprises',
    //     name: 'Entreprises',
    //     component: Entreprises
    // },
    // poste: {
    //     path: '/la-poste',
    //     name: 'Poste',
    //     component: Poste
    // }
}

export { routesMonQuotidien }