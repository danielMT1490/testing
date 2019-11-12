import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let service: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;
  const spy = jasmine.createSpyObj('ValueService',['getValue']);

  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers:[
        MasterService,
        {provide: ValueService, useValue: spy}
      ]
    });
    valueServiceSpy = TestBed.get(ValueService);
    service = TestBed.get(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get anotherValue', () => {
    //comprobamos que el valor de la variable de contruccion es la que debe ser
    expect(service.anotherValue).toEqual('another Value');
  });

  it('should get getValue', () => {
    const master = new MasterService(new ValueService);
    //comprobamos que el valor que devuelve el servicio es correcto
    expect(master.getValue()).toEqual('real value');
  });

  it('should spy getValue', () => {
    const stubValue = 'stub value';
    //utilizamos el valor mockeado
    valueServiceSpy.getValue.and.returnValue(stubValue);
    expect(service.getValue()).toEqual(stubValue);
  });
});
