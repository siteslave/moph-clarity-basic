import { Component, OnInit, NgZone, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ActivatedRoute } from '@angular/router';

import {} from 'googlemaps';
import { UserService } from '../user.service';

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

  @ViewChild('search') search: ElementRef;

  lat: number = 51.678418;
  lng: number = 7.809007;
  latMark: any;
  lngMark: any;

  markers: any = [];

  zoom: number = 18;
  mapTypeId: string = 'hybrid';

  userId: any;

  constructor(
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.userId = params.userId;
    })
   }

  async ngOnInit() {

    // get info
    if (this.userId) {
      let rs = await this.userService.getLatLng(this.userId);
      if (rs.lat && rs.lng) {
        this.lat = rs.lat;
        this.lng = rs.lng;
        this.latMark = rs.lat;
        this.lngMark = rs.lng;
      } else {
        this.setCurrentLocation();
      }
    } else {
      this.setCurrentLocation();
    }

    this.mapsAPILoader.load()
    .then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement, {
        types: []
      })

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place);

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        })
      })
    })
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

    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  async saveMap() {
    if (this.userId && this.lat && this.lng) {
      let rs = await this.userService.updateLatLng(this.userId, this.lat, this.lng);
      if (rs.ok) {
        alert('Success');
      } else {
        alert('Error: ' + rs.error);
      }
    } else {
      alert('ข้อมูลไม่ครบ')
    }
  }

}
