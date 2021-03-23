import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablettestComponent } from './tablettest.component';

describe('TablettestComponent', () => {
  let component: TablettestComponent;
  let fixture: ComponentFixture<TablettestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablettestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablettestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
