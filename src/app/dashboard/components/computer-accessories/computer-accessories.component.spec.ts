import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerAccessoriesComponent } from './computer-accessories.component';

describe('ComputerAccessoriesComponent', () => {
  let component: ComputerAccessoriesComponent;
  let fixture: ComponentFixture<ComputerAccessoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerAccessoriesComponent]
    });
    fixture = TestBed.createComponent(ComputerAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
