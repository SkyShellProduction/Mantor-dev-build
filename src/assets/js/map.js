let initMap = (elem) => {
    const cities = {
        ufa: { lat: 54.73663488297636, lng: 55.96210391184173 },
        ufa1: { lat: 54.73663488297636, lng: 54.86210391184173 },
        ufa2: { lat: 54.73663488297636, lng: 56.76210391184173 },
        ufa3: { lat: 54.73663488297636, lng: 55.16210391184173 },
    };
    const map = new google.maps.Map(elem, {
        mapId: "2ea59900a1f7c47e",
        center: cities.ufa,
        zoom: 10,
    });
    let image = require("@/assets/images/buy/marker.png");
    for (const key in cities) {
        new google.maps.Marker({
            position: cities[key],
            map,
            icon: image
        });
    }
};
export default initMap;