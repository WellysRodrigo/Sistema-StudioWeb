import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaclienteComponent } from './listacliente.component';

describe('ListaclienteComponent', () => {
  let component: ListaclienteComponent;
  let fixture: ComponentFixture<ListaclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaclienteComponent]
    });
    fixture = TestBed.createComponent(ListaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
