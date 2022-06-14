import { directus } from '@/directus/config'

let response = null
let error = null

const getCollection = async (collection, limit) => {

    await directus.items(collection).readByQuery({
        limit: limit
    }).then(res => {
        response = res
    }).catch(err => {
        error = err
    })
    return new Promise((resolve, reject) => {
        if(!error) {
            resolve(response)
        } else{
            reject(error)
        }
    })
}

export { getCollection }