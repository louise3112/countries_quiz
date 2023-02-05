export const randomCountries = (array, n) => {
    const selected = []
    const remaining = [...array]

    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * remaining.length)
        selected.push(remaining[index])
        remaining.splice(index, 1)
    }
    
    return selected
}