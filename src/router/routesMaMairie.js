import { headerImages } from '@/assets/images/imageUrls.js'

import Equipe from '@/views/ma mairie/Equipe'
import Ccas from '@/views/ma mairie/Ccas'
import Salles from '@/views/ma mairie/Salles'
import Bulletins from '@/views/ma mairie/Bulletins'
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
        bulletins: {
            path: "/les-bulletins-municipaux",
            name: 'Bulletins',
            component: Bulletins,
        },
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


export { routesMaMairie }