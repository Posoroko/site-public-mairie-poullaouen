import { headerImages } from '@/assets/images/imageUrls.js'

import Equipe from '@/views/ma mairie/Equipe'
import Ccas from '@/views/ma mairie/Ccas'
import Salles from '@/views/ma mairie/Salles'
// import Bulletins from '@/views/ma mairie/Bulletins'
// import ComptesRendus from '@/views/ma mairie/ComptesRendus'
// import Arrêtés from '@/views/ma mairie/Arrêtés'
// import Publications from '@/views/ma mairie/Publications'

const routesMaMairie = {
        equipe: {
            path: '/equipe-municipale',
            name: 'Equipe',
            component: Equipe,
            image: headerImages.home
        },
        ccas: {
            path: "/centre-communal-d'action-sociale",
            name: 'Ccas',
            component: Ccas,
            image: headerImages.home
        },
        salles: {
            path: "/Les-salles-communales",
            name: 'Salles',
            component: Salles,
        },
        // bulletins: {
        //     path: textes.routesMaMairie.bulletins,
        //     name: 'Bulletins',
        //     component: Bulletins,
        // },
        // comptesRendus: {
        //     path: textes.routesMaMairie.comptesRendus,
        //     name: 'Comptes-rendus',
        //     component: ComptesRendus,
        // },
        // arrêtés: {
        //     path: textes.routesMaMairie.arrêtés,
        //     name: 'Arrêtés',
        //     component: Arrêtés,
        // },
        // publications: {
        //     path: textes.routesMaMairie.publications,
        //     name: 'Publications',
        //     component: Publications,
        // }
}
const buttons = 
    [
    //   {
    //   titre: textes.maMairie.équipe,
    //   route: textes.routesMaMairie.équipe,
    //   icon: 'group',
    //   key: 1
    // },
    // {
    //   titre: textes.maMairie.ccas,
    //   route: textes.routesMaMairie.ccas,
    //   icon: 'face',
    //   key: 2
    // },
    // {
    //   titre: textes.maMairie.salles,
    //   route: textes.routesMaMairie.salles,
    //   icon: 'foundation',
    //   key: 3
    // },
    // {
    //   titre: textes.maMairie.bulletins,
    //   route: textes.routesMaMairie.bulletins,
    //   icon: 'article',
    //   key: 4
    // },
    // {
    //   titre: textes.maMairie.comptesRendus,
    //   route: textes.routesMaMairie.comptesRendus,
    //   icon: 'description',
    //   key: 5
    // },
    // {
    //   titre: textes.maMairie.arrêtés,
    //   route: textes.routesMaMairie.arrêtés,
    //   icon: 'local_police',
    //   key: 6
    // },
    // {
    //   titre: textes.maMairie.publications,
    //   route: textes.routesMaMairie.publications,
    //   icon: 'rule',
    //   key: 7
    // }
]

export { routesMaMairie, buttons }