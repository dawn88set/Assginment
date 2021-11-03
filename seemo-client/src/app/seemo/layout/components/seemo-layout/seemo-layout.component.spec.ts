import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemoLayoutComponent } from './seemo-layout.component';

describe('SeemoLayoutComponent', () => {
  let component: SeemoLayoutComponent;
  let fixture: ComponentFixture<SeemoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeemoLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
