export const _getFullAddress = (address) => {
    return `${address.street} ${address.city} ${address.state} ${address.zipCode} ${address.country}`
}

export const _getFullName = ({ main }) => {
    return `${main.firstName} ${main.lastName}`
}

export const _getSiteDetail = ({ sitesData }, { params }) => {
    return sitesData.data.filter(data => data.id === params.id)
}

export const _filteredSites = (sitesData, searchText) => {
    return sitesData.data.filter((data) => {
        const { zipCode, city, street, country, state } = data.address;
        const { firstName, lastName } = data.contacts.main
        return data.title.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            zipCode.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            city.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            street.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            country.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            state.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            firstName.toLowerCase().trim().includes(searchText.toLowerCase()) ||
            lastName.toLowerCase().trim().includes(searchText.toLowerCase())
    })
}