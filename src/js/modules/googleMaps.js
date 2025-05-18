/**
 * Google Maps Module
 * Handles the functionality for the Google Maps integration in the footer
 */

export function initGoogleMaps() {
  // This function will be called when the Google Maps API is loaded
  window.initMap = function() {
    const mapElement = document.getElementById('map');

    if (!mapElement) return;

    // Default coordinates (can be replaced with actual coordinates)
    const location = { lat: 28.6139, lng: 77.2090 }; // Delhi, India as default

    // Create the map
    const map = new google.maps.Map(mapElement, {
      center: location,
      zoom: 15,
      styles: [
        {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [{ "weight": "2.00" }]
        },
        {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [{ "color": "#9c9c9c" }]
        },
        {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [{ "visibility": "on" }]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{ "color": "#f2f2f2" }]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [{ "color": "#f2f2f2" }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{ "visibility": "off" }]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{ "visibility": "simplified" }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{ "color": "#3498db" }, { "visibility": "on" }]
        }
      ]
    });

    // Add a marker
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'R.K. Scientific Industries'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
      content: '<div><strong>R.K. Scientific Industries</strong><br>123 Industrial Area, City, State, India</div>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  };

  // Load Google Maps API
  // Note: In a real implementation, you would need to replace 'YOUR_API_KEY' with an actual Google Maps API key
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}