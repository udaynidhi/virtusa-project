import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseintoComponent } from './courseinto.component';

describe('CourseintoComponent', () => {
  let component: CourseintoComponent;
  let fixture: ComponentFixture<CourseintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseintoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
