/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    nav_collapse()
});

$(document).ready(function() {
    nav_collapse()
})

function nav_collapse() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    if (window.screen.availWidth <= 1024) {
        var zoom = 13;
        var autoOpen = false;
    } else {
        var autoOpen = true;
        var zoom = 16;
    }
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        // zoom: 15,
        zoom: zoom,
        maxZoom: zoom,
        minZoom: zoom,

        // The latitude and longitude to center the map (always required)
        //center: new google.maps.LatLng(-23.96788, -46.32889), // Santos 
		center: new google.maps.LatLng(-23.970232, -46.326928), // AEAS

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffd100"
            },
            {
                "saturation": "44"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-1"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-16"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffd100"
            },
            {
                "saturation": "44"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-30"
            },
            {
                "lightness": "12"
            },
            {
                "hue": "#ff8e00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-26"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c0b78d"
            },
            {
                "visibility": "on"
            },
            {
                "saturation": "4"
            },
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffe300"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffe300"
            },
            {
                "saturation": "-3"
            },
            {
                "lightness": "-10"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-5"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var festaLatLng = new google.maps.LatLng(-23.970232, -46.326928);
    var festaMarker = new google.maps.Marker({
        position: festaLatLng,
        map: map,
        icon: 'img/pin-festa.png'
    });
    var festaInfoWindow = new google.maps.InfoWindow({
        content: '<strong>Associação dos Engenheiros e Arquitetos de Santos</strong><br />Rua Dr. Artur Porchat de Assis, 47',
        maxWidth: 300,
        position: festaLatLng
    });
    google.maps.event.addListener(festaMarker, 'click', function() {
        festaInfoWindow.open(map, festaMarker);
    });
    
    var garagemLatLng = new google.maps.LatLng(-23.971194, -46.323999);
    var garagemMarker = new google.maps.Marker({
        position: garagemLatLng,
        map: map,
        icon: 'img/pin-garagem.png'
    });
    var garagemInfoWindow = new google.maps.InfoWindow({
        content: '<strong>Estacionamento Sanpark Condomínio Jançara</strong><br />Av. Conselheiro Nébias, 827',
        maxWidth: 300,
        position: garagemLatLng
    });
    google.maps.event.addListener(garagemMarker, 'click', function() {
        garagemInfoWindow.open(map, garagemMarker);
    });
    
    var hotelLatLng = new google.maps.LatLng(-23.970549, -46.329093);
    var hotelMarker = new google.maps.Marker({
        position: hotelLatLng,
        map: map,
        icon: 'img/pin-hotel.png'
    });
    var hotelInfoWindow = new google.maps.InfoWindow({
        content: '<strong>Mercure Hotel Santos</strong><br />Av. Washington Luiz, 565',
        maxWidth: 300,
        position: hotelLatLng
    });
    google.maps.event.addListener(hotelMarker, 'click', function() {
        hotelInfoWindow.open(map, hotelMarker);
    });
    
    
}