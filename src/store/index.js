import { reactive } from 'vue'

const store = (() => {
    return reactive({
        sitesData: {
            hasError: "",
            isFetching: false,
            data: [],
            dataCount: 15
        },
        searchText: {
            value: ""
        },
        isFiltering: {
            value: false
        },
        isSorting: {
            value: false
        }
    })
})()

export default store;