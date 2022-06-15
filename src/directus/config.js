import { Directus } from '@directus/sdk'

const directusAddress = 'http://localhost:8055'
const directus = new Directus(directusAddress)



export { directus, directusAddress }