import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingRjxsComponent } from './working-rjxs.component';

describe('WorkingRjxsComponent', () => {
  let component: WorkingRjxsComponent;
  let fixture: ComponentFixture<WorkingRjxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingRjxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingRjxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
