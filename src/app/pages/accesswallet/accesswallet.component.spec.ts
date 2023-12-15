import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesswalletComponent } from './accesswallet.component';

describe('AccesswalletComponent', () => {
  let component: AccesswalletComponent;
  let fixture: ComponentFixture<AccesswalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesswalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesswalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
