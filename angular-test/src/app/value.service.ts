import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  getValue(): string{
    return 'real value';
  }
}
