import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-group-nested-into-array',
  templateUrl: './group-nested-into-array.component.html',
  styleUrl: './group-nested-into-array.component.css'
})


export class GroupNestedIntoArrayComponent {
  title = 'FormArray Example in Angular Reactive forms';
 
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  
  }
 
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  addSkills() {
    this.skills.push(this.fb.group({
      skill: '',
      exp: '',
    }));
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
 

