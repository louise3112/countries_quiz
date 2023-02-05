const baseURL = 'http://localhost:9000/api/countries/'

export const getAllCountries = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getACountry = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
}

export const updateACountry = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {'Content-type': 'application/json'}
    })
        .then(res => res.json())
}

// export const addACountry = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' }
//     })
//         .then(res => res.json())
// }

// export const deleteACountry = (id) => {
//     return fetch(baseURL + id, {
//         method: 'DELETE'
//     })
// }