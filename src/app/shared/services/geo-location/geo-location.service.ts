import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  watchId: number | null = null;

  public position$ = new BehaviorSubject<GeolocationPosition | null>(null);
  public error$ = new BehaviorSubject<string | null>(null);

  // monitored geolocation
  startMonitoring() {
    if (this.watchId != null) return; // avoid duplicates

    if (!navigator.geolocation) {
      this.error$.next('Geolocation is not supported by this browser.');
      return;
    }

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.position$.next(position);
        this.error$.next(null);
      },
      (error) => {
        this.position$.next(null);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.error$.next('Geo-location access denied');
            break;
          case error.POSITION_UNAVAILABLE:
            this.error$.next('Position unavailable');
            break;
          case error.TIMEOUT:
            this.error$.next('Location request timed out');
            break;
          default:
            this.error$.next('An unknown error occurred');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }

  stopMonitoring() {
    if (this.watchId != null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  // not monitored geolocation
  getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

}
