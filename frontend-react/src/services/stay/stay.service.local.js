
import { storageService } from '../async-storage.service'
import { makeId, saveToStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove,
    addStayReview
}

_createStays()
window.cs = stayService


async function query(filterBy = { txt: '', maxPrice: 100 }) {
    var stays = await storageService.query(STORAGE_KEY)
    const { txt, maxPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.summary))
    }

    if (maxPrice) {
        stays = stays.filter(stay => stay.price <= maxPrice)
    }

    if(sortField === 'type'){
        stays.sort((stay1, stay2) => 
            stay1[sortField].localeCompare(stay2[sortField]) * +sortDir)
    }

    if(sortField === 'price'){
        stays.sort((stay1, stay2) => 
            (stay1[sortField] - stay2[sortField]) * +sortDir)
    }
    
    stays = stays.map(({ _id, name, summary, price, imgUrls }) => ({ _id, name, summary, price, imgUrls }))
    return stays
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        const stayToSave = {
            _id: stay._id,
            name: stay.name,
            type: stay.type,
            price: stay.price
        }
        savedStay = await storageService.put(STORAGE_KEY, stayToSave)
    } else {
        const stayToSave = {
            name: stay.name,
            type: stay.type,
            price: stay.price,
            // Later, owner is set by the backend
            host: userService.getLoggedinUser(),
            reviews: []
        }
        savedStay = await storageService.post(STORAGE_KEY, stayToSave)
    }
    return savedStay
}

async function addStayReview(stayId, txt) {
    // Later, this is all done by the backend
    const stay = await getById(stayId)

    const review = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    stay.reviews.push(review)
    await storageService.put(STORAGE_KEY, stay)

    return review
}

async function _createStays() {
    var stays = await storageService.query(STORAGE_KEY)

    if (stays && stays.length > 0) return    
    stays = [{
        _id: 's101',
        name: 'Ribeira Charming Duplex',
        type: 'House',
        imgUrls: ['https://e26e9b.jpg', 'otherImg.jpg'],
        price: 80.0,
        summary: 'Fantastic duplex apartment...',
        capacity: 8,
        amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
        labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
        host: {
            _id: 'u101',
            fullname: 'Davit Pok',
            imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
            country: 'Portugal',
            countryCode: 'PT',
            city: 'Lisbon',
            address: '17 Kombo st',
            lat: -8.61308,
            lng: 41.1413,
        },
        reviews: [
            {
                id: 'madeId',
                txt: 'Very helpful hosts. Cooked traditional...',
                rate: 4,
                by: {
                    _id: 'u102',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
        ],
        likedByUsers: ['mini-user'],
}]
   saveToStorage(STORAGE_KEY, stays)
}
