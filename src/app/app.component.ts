import { Component } from '@angular/core';
import { FormServiceService } from './form-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycleHooks';
  myForm:FormGroup
  constructor(private _formServiceService:FormServiceService){
    this.myForm = this._formServiceService.createReactiveForm({
      email:true,
      name:true,
      age:true,
      lastName:true
    });
  }

  myFac(){
    let obj = []
    console.log(this.myForm.value );
  }
}
