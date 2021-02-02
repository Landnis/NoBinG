import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseumReservedPage } from './museum-reserved.page';

describe('MuseumReservedPage', () => {
  let component: MuseumReservedPage;
  let fixture: ComponentFixture<MuseumReservedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumReservedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseumReservedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
