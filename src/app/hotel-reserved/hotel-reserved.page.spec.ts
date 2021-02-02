import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelReservedPage } from './hotel-reserved.page';

describe('HotelReservedPage', () => {
  let component: HotelReservedPage;
  let fixture: ComponentFixture<HotelReservedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReservedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelReservedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
