import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
import { tModification } from '../../../Models/models';


@Component({
  selector: 'app-explanatory-note-modifications-v2',
  templateUrl: './explanatory-note-modifications-v2.component.html',
  styleUrl: './explanatory-note-modifications-v2.component.css'
})


export class ExplanatoryNoteModificationsV2Component implements OnInit
{
  public form : FormGroup = new FormGroup({});
  public modifications : tModification[] = [];

  @Output()
  onFormChanged = new EventEmitter<tModification[]>();
  formChanged() : void
  {
    if(this.form.valid)
    {
      this.onFormChanged.emit(this.modifications);
      //console.log(this.modifications);
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
        "explanatoryNoteModifications": new FormArray([
            new FormGroup({                    
              "modificationNumber": new FormControl("", [Validators.required]),
              "modificationDate": new FormControl("", [ Validators.required ]),
              "modificationNote": new FormControl("", [ Validators.required ])
          })
        ])
    });

    this.modifications.push(new tModification());
  }

  
  getFormsControls() : FormArray
  {
    return this.form.controls["explanatoryNoteModifications"] as FormArray;
  }


  addModification()
  {
    (<FormArray>this.form.controls["explanatoryNoteModifications"]).push(
        new FormGroup({                    
          "modificationNumber": new FormControl("", [Validators.required]),
          "modificationDate": new FormControl("", [ Validators.required ]),
          "modificationNote": new FormControl("", [ Validators.required ])
      })
    );

    this.modifications.push(new tModification());

    //console.log(this.getFormsControls().controls);
    //console.log(this.modifications);   
  }


  removeModification()
  {
    if((<FormArray>this.form.controls["explanatoryNoteModifications"]).length >1)
    {
      (<FormArray>this.form.controls["explanatoryNoteModifications"]).removeAt((<FormArray>this.form.controls["explanatoryNoteModifications"]).length - 1);

      this.modifications.pop();    
    }  


    //console.log(this.getFormsControls().controls);
    //console.log(this.modifications);    
  }




}
