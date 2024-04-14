import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRowTemplateComponent } from './edit-row-template.component';

describe('EditRowTemplateComponent', () => {
  let component: EditRowTemplateComponent;
  let fixture: ComponentFixture<EditRowTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRowTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
