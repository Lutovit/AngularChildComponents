import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';
import { tOrganization, tForeignOrganization } from '../../../Models/models';

@Component({
  selector: 'app-foreign-organization',
  templateUrl: './foreign-organization.component.html',
  styleUrl: './foreign-organization.component.css'
})


export class ForeignOrganizationComponent implements OnInit
{
  public form : FormGroup = new FormGroup({});
  public organization : tForeignOrganization = new tForeignOrganization();

  @Output()
  onFormChanged = new EventEmitter<tForeignOrganization>();
  formChanged() : void
  {
    if(this.form.valid)
    {
      //console.log(this.organization);
      this.onFormChanged.emit(this.organization);
    }
  }

  
  constructor(private cdr: ChangeDetectorRef){}


  ngOnInit(): void
  {
    this.initForm();      
  }
  

  initForm():void
  {
    this.form = new FormGroup({                    
        "orgFullName": new FormControl("", [Validators.required]),  
        "orgINN": new FormControl("", [ Validators.required ]),
        "orgKPP": new FormControl("", [ Validators.required ]),
        "email": new FormControl("", [ Validators.required, Validators.email ]),
    });
  }


  addressChanged(e : any):void
  {
    //console.log(e);
    this.organization.address = e;
    this.formChanged();
    //console.log(this.organization);
  }

  







  

  


}
