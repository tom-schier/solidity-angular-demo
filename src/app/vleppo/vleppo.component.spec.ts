import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VleppoComponent } from './vleppo.component';

describe('VleppoComponent', () => {
  let component: VleppoComponent;
  let fixture: ComponentFixture<VleppoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VleppoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VleppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
