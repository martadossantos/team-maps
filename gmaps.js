const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

// Initialize and add the map
let map;

async function initMap() {
  // The location of Taipei
  const position = { lat: 24.713, lng: 46.675 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const mapBounds = {
    north: 64.73,
    south: -47.00,
    west: -168.28,
    east: 147,
  };

  // The map, centered at Taipei
  map = new Map(document.getElementById("map"), {
    backgroundColor: "#222222",
    zoom: 2,
    center: position,
    mapId: "68fd81845d3bb1d6",
    disableDefaultUI: true,
    minZoom: 2,
    maxZoom: 4,
    mapTypeID: "terrain",
    gestureHandling: "greedy",
    restriction: {
        latLngBounds: mapBounds,
        strictBounds: false,
      },
  });

  


  const tourStops = [
    {
      position: { lat: 25.033, lng: 121.565 },
      title: "Taipei",
    },
    {
      position: { lat: 51.507, lng: 0.127 },
      title: "London",
    },
    {
      position: { lat: 37.774, lng: -122.419 },
      title: "San Francisco",
    },
  ];


  tourStops.forEach(({ position, title }) => {
    const label = document.createElement("div");
    label.className = "price-tag";
    label.textContent = title; 

    const marker = new AdvancedMarkerElement({
      position,
      map,
      content: label,
    });

  });
  
}

initMap();
