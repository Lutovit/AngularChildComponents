import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from "@angular/forms";


@Component({
  selector: 'app-reactiv-child',
  templateUrl: './reactiv-child.component.html',
  styleUrl: './reactiv-child.component.css'
})


export class ReactivChildComponent implements OnInit 
{

  public form : FormGroup = new FormGroup({});
  @Output()
  onFormSubmited = new EventEmitter<FormGroup>();
  formSubmited() : void
  {
      this.onFormSubmited.emit(this.form);
  }

  constructor()
  {

  }


  ngOnInit(): void
  {
    this.initForm();
      
  }


  initForm():void
  {
    this.form = new FormGroup({                    
        "userName": new FormControl("Tom", [Validators.required]),
        "userEmail": new FormControl("", [
                            Validators.required, 
                            Validators.email 
                        ]),
        "phones": new FormArray([
            new FormControl("+7", Validators.required)
        ])
    });
  }


  getFormsControls() : FormArray{
    return this.form.controls["phones"] as FormArray;
  }


  addPhone(){
    (<FormArray>this.form.controls["phones"]).push(new FormControl("+7", Validators.required));
  }


  removePhone()
  {
    if((<FormArray>this.form.controls["phones"]).length >1)
    {
      (<FormArray>this.form.controls["phones"]).removeAt((<FormArray>this.form.controls["phones"]).length - 1);
    }   
  }


  submit(){
    //console.log(this.form);
    console.log("Отработал submit в дочерней формею");
    this.formSubmited();
  }

}
