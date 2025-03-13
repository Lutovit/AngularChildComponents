import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';
import { regions } from '../../../JSONFiles/regions';
import { Region, tRegionsRF } from '../../../Models/models';
import { tAddress, tPostAddress } from '../../../Models/models';


@Component({
  selector: 'app-post-address',
  templateUrl: './post-address.component.html',
  styleUrl: './post-address.component.css'
})

export class PostAddressComponent implements OnInit
{
  public regions : Region[] = [];
  public address : tPostAddress = new tPostAddress();
  public form : FormGroup = new FormGroup({});


  @Output()
  onFormChanged = new EventEmitter<tPostAddress>();
  formChanged() : void
  {
    if(this.form.valid)
    {
      //console.log(this.address);
      this.onFormChanged.emit(this.address);
    }
  }
  

  constructor(private cdr: ChangeDetectorRef){}


  ngOnInit(): void
  {
    this.regions = regions;
    this.initForm();      
  }
  

  initForm():void
  {
    this.form = new FormGroup({ 
        "country": new FormControl("", [Validators.required]),
        "region": new FormControl("", [Validators.required]),       
        "postIndex": new FormControl("", [Validators.required]),              
        "district": new FormControl("", [Validators.required]),
        "city": new FormControl("", [Validators.required]),
        "settlement": new FormControl("", [Validators.required]),
        "street": new FormControl("", [Validators.required]),
        "building": new FormControl("", [Validators.required]),
        "room": new FormControl("", [Validators.required]),
        "note": new FormControl("", [Validators.required]),
    });
  }


  setRegion(region : Region):void
  {
    for (const [key , value] of Object.entries(tRegionsRF))
    {
      if (value.toString().includes(region.number) && isNaN(Number(value)))
      {
        //console.log(region.name + "   :   " + region.number + "  :  " + key + "  :  " + value);
        this.address.region = Number(key);
        this.formChanged();
        //console.log(this.address);
      }
    }
  }

}
