import { Directus } from '@directus/sdk'

const getCollection = (collection) => {
    let response = null
    let error = null
    Directus.items(collection).getByQuery({
        limit: -1
    }).then(res => {
        response = res
    }).catch(err => {
        error = err
    })

}

export { getCollection }