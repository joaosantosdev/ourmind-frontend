import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosHomeComponent } from './servicos-home.component';

describe('ServicosHomeComponent', () => {
  let component: ServicosHomeComponent;
  let fixture: ComponentFixture<ServicosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
