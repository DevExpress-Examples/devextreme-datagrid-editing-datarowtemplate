import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowTemplateComponent } from './data-row-template.component';

describe('DataRowTemplateComponent', () => {
  let component: DataRowTemplateComponent;
  let fixture: ComponentFixture<DataRowTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataRowTemplateComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
