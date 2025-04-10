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

  icon = {
    url: '../map-icon/pin.png', // url
    scaledSize: new google.maps.Size(28, 30), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 30), // anchor
  };

marker = {

    label: {
      color: 'orange',
      fontWeight: 'bold',
      fontSize: '14px',
      text: 'Mabunda Group',
    },

    options: {
      draggable: false,
      icon: this.icon,
      content: 'Example',
      gmpClickable: true,
    },

    position: {
      lat: -25.749, lng: 28.0947
    }
  };

  
};


