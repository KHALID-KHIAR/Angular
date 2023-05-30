import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartRoseComponent } from './echart-rose.component';

describe('EchartRoseComponent', () => {
  let component: EchartRoseComponent;
  let fixture: ComponentFixture<EchartRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartRoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
