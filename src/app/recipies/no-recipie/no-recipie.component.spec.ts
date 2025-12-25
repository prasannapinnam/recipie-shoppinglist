import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipieComponent } from './no-recipie.component';

describe('NoRecipieComponent', () => {
  let component: NoRecipieComponent;
  let fixture: ComponentFixture<NoRecipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRecipieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
