import { Component, ViewChild, ElementRef  } from '@angular/core';
import { ChildComponent } from '../../child/child/child.component';
import { ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ExplanatoryNote, NumberAndYear, tAuthor, tModification } from '../../../Models/models';
import { provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [provideNativeDateAdapter()],
  animations: [
    trigger('bodyExpansion', [
      state('+, void', style({ height: '0px', visibility: 'hidden' })),
      state('-', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
      animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class MainComponent{
  title = 'AngularChildComponent';

  public name : string = "Tom";
  public age : number = 24;
  public age2 : number = 0;
  public twoWayBindingText : string = "Max";
  public state : string = "+";

  public explanatoryNote : ExplanatoryNote = new ExplanatoryNote();



  constructor(private cdr: ChangeDetectorRef)
  {
    

  }


  onChangedAge(e : any): void
  {
    console.log(e);
    this.age2 = e;
    if(e === 25 ) this.age = e;
    this.cdr.detectChanges();

  }



  @ViewChild(ChildComponent, {static: false})
  private childComponent: ChildComponent | undefined;
    
  increment() { this.childComponent?.increment(); }
  decrement() { this.childComponent?.decrement(); }


  public someText : string = "Some text";
  @ViewChild("someText_template_var", {static: false})
  someTextElementRef : ElementRef | undefined; 
      
  change(): void
  {
    if(this.someTextElementRef !== undefined)
    {
      console.log(this.someTextElementRef.nativeElement.textContent); 
      this.someTextElementRef.nativeElement.textContent += "Some new value";            
    }        
  }


  formSubmited(e : any):void
  {
    console.log("Форма получена в главной форме.");
    console.log(e);

  }


  toggle():void
  {
    if(this.state == "+")
    {
      this.state = "-";
    }
    else
    {
      this.state = "+";
    }
  }


  numberAndYearChanged(e : NumberAndYear):void
  {
    if(e != null)
    {
      this.explanatoryNote.explanatoryNoteNumber = e.explanatoryNoteNumber;
      this.explanatoryNote.explanatoryNoteYear = e.explanatoryNoteYear;
    }

    console.log(this.explanatoryNote);
  }


  modifocationsChanged(e : tModification[]):void
  {
    if(e != null)
    {
      this.explanatoryNote.explanatoryNoteModifications = e; 
    }

    console.log(this.explanatoryNote);
  }


  authorChanged(e : tAuthor):void
  {
    if(e != null)
      {
        this.explanatoryNote.issueAuthor = e; 
      }
  
      console.log(this.explanatoryNote);

  }


  submit()
  {
 

  }



}

