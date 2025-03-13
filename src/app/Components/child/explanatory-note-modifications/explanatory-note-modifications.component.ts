import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { tModification } from '../../../Models/models';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-explanatory-note-modifications',
  templateUrl: './explanatory-note-modifications.component.html',
  styleUrl: './explanatory-note-modifications.component.css',
  animations: [
    trigger('bodyExpansion', [
      state('+, void', style({ height: '0px', visibility: 'hidden' })),
      state('-', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
      animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})


export class ExplanatoryNoteModificationsComponent implements OnInit
{
  public _rootState : string = "";
  public state : string = "-";
  public state_2 : string = "-";
  public explanatoryNoteModifications : tModification[] = [];
  public form : FormGroup = new FormGroup({});
  

  @Input() 
  set rootState(state : string)
  {
    console.log("RootState = " + state); 
    
    if(state == "+")
    {
      this.state = "+";
      this.state_2 = "+";
    }
    else
    {
      //this.state = "-";
      //this.state_2 = "-";
    }
   
    //console.log("State = " + this.state);
    //console.log("State_2 = " + this.state_2);      
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

    console.log(this.getFormsControls().controls);

   
  }


  removeModification()
  {
    if((<FormArray>this.form.controls["explanatoryNoteModifications"]).length >1)
    {
      (<FormArray>this.form.controls["explanatoryNoteModifications"]).removeAt((<FormArray>this.form.controls["explanatoryNoteModifications"]).length - 1);
    }  


    console.log(this.getFormsControls().controls);
  }
  

  toggle():void
  {
    if(this.state == "+")
    {
      this.state = "-";
      this.state_2 = "-";
    }
    else
    {
      this.state = "+";
      this.state_2 = "+";
    } 
  }

  toggle_2():void
  {
    if(this.state_2 == "+")
    {
      this.state_2 = "-";
    }
    else
    {
      this.state_2 = "+";
    } 
  }

}
