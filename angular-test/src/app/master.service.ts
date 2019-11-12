import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  valueService: ValueService
  anotherValue: string;
  constructor(private service: ValueService) {
    this.valueService = service;
    this.anotherValue = 'another Value';
  }

  getValue(): string{
    return this.service.getValue();
  }
}
