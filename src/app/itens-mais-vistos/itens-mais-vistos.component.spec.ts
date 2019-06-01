import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensMaisVistosComponent } from './itens-mais-vistos.component';

describe('ItensMaisVistosComponent', () => {
  let component: ItensMaisVistosComponent;
  let fixture: ComponentFixture<ItensMaisVistosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensMaisVistosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensMaisVistosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
