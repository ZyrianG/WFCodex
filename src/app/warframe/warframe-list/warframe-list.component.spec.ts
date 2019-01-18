import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframeListComponent } from './warframe-list.component';

describe('WarframeListComponent', () => {
  let component: WarframeListComponent;
  let fixture: ComponentFixture<WarframeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarframeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarframeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
