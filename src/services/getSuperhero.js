import axios from 'axios'

const URL = 'https://www.superheroapi.com/api.php/'
const APIKEY = '1895113727309795/'

export const getSuperhero = (id) => {
    return axios({
        method: 'get',
        url: URL+APIKEY+id
    })
    .then(res => res.data)
    .then(data => {
        const heroData = {
            img: data.image.url,
            name: data.name,
            id: data.id,
            powerstats: data.powerstats,
            appearance: data.appearance,
            biography: data.biography,
            base: data.work.base
        }
        const myTeam = JSON.parse(localStorage.getItem('myTeam'))
        if (!myTeam) {
            let array = []
            array.push(heroData)
            localStorage.setItem('myTeam', JSON.stringify(array))
        } else {
            const newTeam = myTeam.concat(heroData)
            localStorage.setItem('myTeam', JSON.stringify(newTeam))
        }
    })
    .catch(err => err)
}

export const getSearched = (search) => {
    let results = []
    return axios({
        method: 'get',
        url: URL+APIKEY+'search/'+search
    })
    .then(res => res.data)
    .then(data => {
        data.results.map(item => {
        const heroData = {
            img: item.image.url,
            name: item.name,
            id: item.id,
            powerstats: item.powerstats,
            appearance: item.appearance,
            biography: item.biography,
            base: item.work.base
            }
        results.push(heroData)
        })
    return results
    })
    .catch(() => 'err')
}