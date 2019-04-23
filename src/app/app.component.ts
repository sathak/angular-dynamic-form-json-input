import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    constructor() { }
  
  FormFields={};
  
  ngOnInit() {
   
    this.FormFields = {
      "fields": [
        {
          key: 'firstname',
          type: 'textbox',
          label:'First Name',
          value: '',
          required:true,
          errormessage:'First Name Required!'
        },
        {
          key: 'lastname',
          type: 'textbox',
          label:'Last Name',
          value: '',
          required:true,
          errormessage:'Last Name Required!'
        }
        ,
        {
          key: 'date',
          type: 'datepicker',
          label:'Date of birth',
          value: null,
          required:true,
          errormessage:'DOB Required!'
        },
        {
          key: 'staffname',
          type: 'autocomplete',
          label:'Staff Name',
          value: '',
          required:true,
          errormessage:'Staff Name Required!',
          options : ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
        },
        {
          key: 'region',
          type: 'select',
          label:'Region',
          value: null,
          required:true,
          errormessage:'Region Required!',
          options : ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
        },
        {
          key: 'department',
          label:'Department',
          type: 'multiselect',
          value: null,
          required:true,
          errormessage:'Department Required!',
          options : ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
        }
      ]
    };
  }
  
}
