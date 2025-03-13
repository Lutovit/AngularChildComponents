import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})


export class ChildComponent
{
  @Input() userName: string = "";
  public _userAge: number = 0;

  @Input() 
  set userAge(age : number)
  {
    if(age > 20 && age < 30)
    {
      this._userAge = age;
      this.changeAge(this._userAge);
    }
    else
    {
      alert("The age is not in the required limits!");
      this._userAge = 25;
      this.changeAge(this._userAge);
    }
  }

  get userAge()
  {
    return this._userAge;
  }


  @Output()
  onChangedAge = new EventEmitter<number>();
  changeAge(age : number) : void
  {
      this.onChangedAge.emit(age);
  }


  @Input() twoWayBinding : string = "";
  @Output() twoWayBindingChange = new EventEmitter<string>();
  onTwoWayBindingChange(model: any)
  {         
    this.twoWayBinding = model;
    this.twoWayBindingChange.emit(model);
  }


  public counter : number  = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }



}
