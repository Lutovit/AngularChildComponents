import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';
import { tOrganization, tForeignOrganization, tIP } from '../../../Models/models';


@Component({
  selector: 'app-ip-organization',
  templateUrl: './ip-organization.component.html',
  styleUrl: './ip-organization.component.css'
})


export class IpOrganizationComponent implements OnInit
{
  public form : FormGroup = new FormGroup({});
  public organization : tIP = new tIP();

  @Output()
  onFormChanged = new EventEmitter<tIP>();
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
        "familyName": new FormControl("", [Validators.required]),  
        "firstName": new FormControl("", [ Validators.required ]),
        "secondName": new FormControl("", [ Validators.required ]),
        "oGRNIP": new FormControl("", [ Validators.required ]),
        "email": new FormControl("", [ Validators.required, Validators.email ]),
    });
  }


  addressChanged(e : any):void
  {
    //console.log(e);
    this.organization.postAddress = e;
    this.formChanged();
    //console.log(this.organization);
  }

  


  

  


}
