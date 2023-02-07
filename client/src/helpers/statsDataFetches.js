const baseURL = 'http://localhost:9000/api/stats/'

export const getAllUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getAUser = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
}

export const updateAUser = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {'Content-type': 'application/json'}
    })
        .then(res => res.json())
}

export const addAUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteAUser = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}