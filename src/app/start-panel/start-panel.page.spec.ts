import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartPanelPage } from './start-panel.page';

describe('StartPanelPage', () => {
  let component: StartPanelPage;
  let fixture: ComponentFixture<StartPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
