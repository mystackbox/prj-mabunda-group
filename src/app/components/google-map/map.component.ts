import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  standalone: false,
})
export class MapComponent {

  center: google.maps.LatLngLiteral = { lat: -25.749, lng: 28.0947 };
  zoom = 10;

  options: google.maps.MapOptions = {
    center: { lat: -25.749, lng: 28.0947 },
    zoomControl: false,
    streetViewControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 20,
    minZoom: 8,
    fullscreenControl: false,
    mapTypeControl: false,
  };

  markerIcon = {
    url: '../google-map-icon/pin.png', // image url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(3, 30), // anchor
  };
  
marker = {
  
    label: {
      text: '.',
      color: 'brown',
      fontWeight: 'bold',
      // fontSize: '12px',
    },

    options: {
      draggable: false,
      icon: this.markerIcon,
      content: 'M',
      gmpClickable: false,
    },

    position: {
      lat: -25.749240973127016, lng: 28.094779265449265
    }
  }; 
};


