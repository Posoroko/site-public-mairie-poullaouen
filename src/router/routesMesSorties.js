import Histoire from '@/views/mes sorties/Histoire'
import Patrimoine from '@/views/mes sorties/Patrimoine'
import Randonnees from '@/views/mes sorties/Randonnees'
// import LogerRestaurer from '@/views/mes sorties/LogerRestaurer'
// import Fleuri from '@/views/mes sorties/Fleuri'
// import Loisirs from '@/views/mes sorties/Loisirs'

const routesMesSorties = {
    histoire: {
        path: '/histoire',
        name: 'Histoire',
        component: Histoire
    },
    patrimoine: {
        path: '/patrimoine',
        name: 'Patrimoine',
        component: Patrimoine
    },
    randonnees: {
        path: '/les-chemins-de-randonnees',
        name: 'Randonnees',
        component: Randonnees
    },
    // logerRestaurer: {
    //     path: textes.routesSorties.logerRestaurer,
    //     name: 'LogerRestaurer',
    //     component: LogerRestaurer
    // },
    // fleuri: {
    //     path: textes.routesSorties.fleuri,
    //     name: 'Fleuri',
    //     component: Fleuri
    // },
    // loisirs: {
    //     path: textes.routesSorties.loisirs,
    //     name: 'Loisirs',
    //     component: Loisirs
    // }
}

export { routesMesSorties }