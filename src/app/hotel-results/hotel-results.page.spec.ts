import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelResultsPage } from './hotel-results.page';

describe('HotelResultsPage', () => {
  let component: HotelResultsPage;
  let fixture: ComponentFixture<HotelResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
