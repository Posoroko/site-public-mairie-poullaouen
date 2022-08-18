import { Directus } from '@directus/sdk'

const directusAddress = 'http://localhost:8055'
// const directusAddress = 'https://oxerzt8l.directus.app'
const directus = new Directus(directusAddress)



export { directus, directusAddress }