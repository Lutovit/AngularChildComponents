import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import { NumberAndYearComponent } from '../number-and-year/number-and-year.component';
import { NumberAndYear } from '../../../Models/models';
import { OrganizationEnum, OrganizationType, OrganizationTypesArray, tAuthor } from '../../../Models/models';



@Component({
  selector: 'app-custom-component-array',
  templateUrl: './custom-component-array.component.html',
  styleUrl: './custom-component-array.component.css'
})


export class CustomComponentArrayComponent
{
  myForm: FormGroup;
  //arr : NumberAndYear [] = [];
  arr : tAuthor [] = [];

  constructor(private fb: FormBuilder)
  {
    this.myForm = this.fb.group({
      // Initialize the FormArray with an empty array
      customComponents: this.fb.array([])
    });
  }


  get customComponents(): FormArray
  {
    return this.myForm.get('customComponents') as FormArray;
  }


  // Adds a new instance of the CustomComponent to the FormArray
  addCustomComponent(): void
  {
    this.customComponents.push(this.fb.group({
      // Your custom component's form controls
      "explanatoryNoteNumber": ["", Validators.required],
      "explanatoryNoteYear": ["",  Validators.required ]
    }));

    //this.arr.push(new NumberAndYear());
    this.arr.push(new tAuthor());
  }


  // Removes an instance of the CustomComponent from the FormArray
  removeCustomComponent(index: number): void 
  {
    this.customComponents.removeAt(index);
    this.arr.splice(index, 1);
  }


  formChanged(e : any, i : number): void
  {
    console.log(this.myForm);
    console.log(e);

    console.log(i);
    this.arr.splice(i, 1, e);
    console.log(this.arr);
  }

}
