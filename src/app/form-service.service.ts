import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  createReactiveForm(data: { [key: string]: boolean }): FormGroup {
    const formGroupConfig: { [key: string]: FormControl } = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && data[key]) {
        formGroupConfig[key] = new FormControl('');
      }
    }

    return new FormGroup(formGroupConfig);
  }
}
