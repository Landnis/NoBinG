import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservedActivityPage } from './reserved-activity.page';

describe('ReservedActivityPage', () => {
  let component: ReservedActivityPage;
  let fixture: ComponentFixture<ReservedActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservedActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
