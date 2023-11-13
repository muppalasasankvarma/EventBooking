import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMasterComponent } from './open-master.component';

describe('OpenMasterComponent', () => {
  let component: OpenMasterComponent;
  let fixture: ComponentFixture<OpenMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenMasterComponent]
    });
    fixture = TestBed.createComponent(OpenMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
