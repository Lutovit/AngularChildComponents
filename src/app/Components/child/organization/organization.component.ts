import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';
import { tOrganization } from '../../../Models/models';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.css'
})


export class OrganizationComponent implements OnInit
{
  public form : FormGroup = new FormGroup({});
  public organization : tOrganization = new tOrganization();

  @Output()
  onFormChanged = new EventEmitter<tOrganization>();
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
        "orgOGRN": new FormControl("", [ Validators.required ]),
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
