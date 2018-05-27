import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAntInputComponentComponent } from './dynamic-ant-input-component.component';

describe('DynamicAntInputComponentComponent', () => {
  let component: DynamicAntInputComponentComponent;
  let fixture: ComponentFixture<DynamicAntInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAntInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAntInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
