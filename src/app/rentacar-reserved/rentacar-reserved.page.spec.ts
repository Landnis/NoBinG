import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentacarReservedPage } from './rentacar-reserved.page';

describe('RentacarReservedPage', () => {
  let component: RentacarReservedPage;
  let fixture: ComponentFixture<RentacarReservedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentacarReservedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentacarReservedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
