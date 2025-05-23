import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareButtonsComponent } from './share-buttons.component';

describe('ShareButtonsComponent', () => {
  let component: ShareButtonsComponent;
  let fixture: ComponentFixture<ShareButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
