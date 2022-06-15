import Ecole from '@/views/mon quotidien/Ecole'
import Associations from '@/views/mon quotidien/Associations'
import Mediatheque from '@/views/mon quotidien/Mediatheque'
import Entreprises from '@/views/mon quotidien/Entreprises'
import Equipements from '@/views/mon quotidien/Equipements'
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
    Mediatheque: {
        path: '/la-mediatheque',
        name: 'Mediatheque',
        component: Mediatheque
    },
    equipements: {
        path: '/equipements-sportifs-et-loisir',
        name: 'Equipements',
        component: Equipements
    },
    entreprises: {
        path: '/commerces-et-entreprises',
        name: 'Entreprises',
        component: Entreprises
    },
    // poste: {
    //     path: '/la-poste',
    //     name: 'Poste',
    //     component: Poste
    // }
}

export { routesMonQuotidien }