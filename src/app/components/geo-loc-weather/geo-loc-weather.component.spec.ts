import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocWeatherComponent } from './geo-loc-weather.component';

describe('GeoLocWeatherComponent', () => {
  let component: GeoLocWeatherComponent;
  let fixture: ComponentFixture<GeoLocWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoLocWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoLocWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
