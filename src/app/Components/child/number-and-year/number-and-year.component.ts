import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import { NumberAndYear } from '../../../Models/models';


@Component({
  selector: 'app-number-and-year',
  templateUrl: './number-and-year.component.html',
  styleUrl: './number-and-year.component.css'
})


export class NumberAndYearComponent implements OnInit
{
  public explanatoryNoteNumber: string = ""
  public explanatoryNoteYear: string = "";


  public form : FormGroup = new FormGroup({});

  @Output()
  onFormChanged = new EventEmitter<NumberAndYear>();
  formChanged() : void
  {
    let data : NumberAndYear = new NumberAndYear();
    data.explanatoryNoteNumber = this.explanatoryNoteNumber;
    data.explanatoryNoteYear = this.explanatoryNoteYear;

    if(this.form.valid)
    {
      this.onFormChanged.emit(data);
    }
    
    //console.log(data);
  }

  constructor(){}


  ngOnInit(): void
  {
    this.initForm();      
  }


  initForm():void
  {
    this.form = new FormGroup({                    
        "explanatoryNoteNumber": new FormControl("", [Validators.required]),
        "explanatoryNoteYear": new FormControl("", [ Validators.required ])
    });
  }






}
