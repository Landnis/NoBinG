import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarRentPage } from './car-rent.page';

describe('CarRentPage', () => {
  let component: CarRentPage;
  let fixture: ComponentFixture<CarRentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarRentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
