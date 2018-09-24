export default {
    cityChange (state, city) {
        state.city = city;
        try {
            defaultCity = localStorage.city 
        } catch (e) {}
    }
}