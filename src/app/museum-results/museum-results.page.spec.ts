import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseumResultsPage } from './museum-results.page';

describe('MuseumResultsPage', () => {
  let component: MuseumResultsPage;
  let fixture: ComponentFixture<MuseumResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseumResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
