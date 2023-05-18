class fakeAPI {
    getTrips() {
        fetch("http://127.0.0.1:5500/trips.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            console.log(data)
        })
    }

    constructor() {
        this.getTrips();
    }
}

export default fakeAPI;