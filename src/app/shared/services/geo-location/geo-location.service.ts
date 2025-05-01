import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  watchId: number | null = null;

  startWatching(
    successCallback: (position: GeolocationPosition) => void,
    errorCallback?: (error: GeolocationPositionError) => void
  ) {
    if (!navigator.geolocation) {
      errorCallback?.(new Error('Geolocation not supported') as any);
      return;
    }

    this.watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);
  }

  stopWatching() {
    if (this.watchId != null) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }
}
