import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouviePageComponent } from './mouvie-page.component';

describe('MouviePageComponent', () => {
  let component: MouviePageComponent;
  let fixture: ComponentFixture<MouviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouviePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
