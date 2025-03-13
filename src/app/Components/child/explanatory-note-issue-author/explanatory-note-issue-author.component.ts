import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';
import { SroData, tSROType } from '../../../Models/models';
import { SROTypesArray } from '../../../Models/models';
import { SROType, tSRO } from '../../../Models/models';
import { OrganizationEnum, OrganizationType, OrganizationTypesArray, tAuthor } from '../../../Models/models';


@Component({
  selector: 'app-explanatory-note-issue-author',
  templateUrl: './explanatory-note-issue-author.component.html',
  styleUrl: './explanatory-note-issue-author.component.css'
})


export class ExplanatoryNoteIssueAuthorComponent implements OnInit
{
  public form : FormGroup = new FormGroup({});


  public sroTypes : SROType[] = SROTypesArray;
  public organizationTypes : OrganizationType[] = OrganizationTypesArray;
  public sroDataArray : tSRO[] = [];
  public selectedOrganizationType : OrganizationType | null = null;
  public author : tAuthor = new tAuthor();

  @Output()
  onFormChanged = new EventEmitter<tAuthor>();
  formChanged() : void
  {
    if(this.form.valid)
    {
      console.log(this.author);
      this.onFormChanged.emit(this.author);
    }
  }


  constructor(private cdr: ChangeDetectorRef){}


  ngOnInit(): void
  {
    this.initForm();      
  }


  radioGroupChanged(e : OrganizationType):void
  {
    //console.log(e);
    this.selectedOrganizationType = e;
  }
  

  initForm():void
  {
      this.form = new FormGroup({       
        "sroData": new FormArray([
            new FormGroup({                    
              "sroNumber": new FormControl("", [Validators.required]),  
              "sroTypeName": new FormControl("", [ Validators.required ])
          })
        ])
    });

    this.sroDataArray.push(new tSRO());
  }

  
  getFormsControls() : FormArray
  {
    return this.form.controls["sroData"] as FormArray;
  }


  addSroDataGroup()
  {
    if((<FormArray>this.form.controls["sroData"]).length <3)
    {
      (<FormArray>this.form.controls["sroData"]).push(
          new FormGroup({                    
            "sroNumber": new FormControl("", [Validators.required]),  
            "sroTypeName": new FormControl("", [ Validators.required ])
        })
      );

      this.sroDataArray.push(new tSRO());
    }


    //console.log(this.getFormsControls().controls);
    //console.log(this.sroDataArray);   
  }


  removeSroDataGroup()
  {
    if((<FormArray>this.form.controls["sroData"]).length >1)
    {
      (<FormArray>this.form.controls["sroData"]).removeAt((<FormArray>this.form.controls["sroData"]).length - 1);

      this.sroDataArray.pop();    
    }  


    //console.log(this.getFormsControls().controls);
    //console.log(this.sroDataArray);    
  }


  sroChanged():void
  {
    if(this.form.valid)
    {
      this.author.sROMembership = this.sroDataArray;
      //console.log(this.author);
      this.formChanged();
    }
  }


  sroTypeSelectChanged(sroType : SROType, index : number):void
  {
    this.sroDataArray[index].sROType = sroType.type;
    
    if(this.form.valid)
      {
        this.author.sROMembership = this.sroDataArray;
        //console.log(this.author);
        this.formChanged();
      }
  }


  organizationChanged(item : any):void
  {
    this.author.item = item;
    //console.log(this.author);
    this.formChanged();
  }



  

  


}
