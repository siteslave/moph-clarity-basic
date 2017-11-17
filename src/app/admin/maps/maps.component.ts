import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: [
    `
    agm-map {
      height: 100%;
      width: 100%;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  latMark: any;
  lngMark: any;

  markers: any = [];

  zoom: number = 18;
  mapTypeId: string = 'hybrid';

  constructor() { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  setCurrentLocation() {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }, (error) => {
        console.log(error);
      });
    } else {
      alert('Geolocation don\'t support')
    }
  }

  onMapClick(event) {
    console.log(event);
    // this.markers.push(event.coords);
    this.latMark = event.coords.lat;
    this.lngMark = event.coords.lng;
  }

}
