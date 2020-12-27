import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelsSearchPage } from './hotels-search.page';

describe('HotelsSearchPage', () => {
  let component: HotelsSearchPage;
  let fixture: ComponentFixture<HotelsSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelsSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
