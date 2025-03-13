
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { ChildModule } from '../child/child.module';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule} from '@angular/material/button'; 
import { MatCardModule} from '@angular/material/card'; 
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule, 
 
    ChildModule,
    
    MatSlideToggleModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatAccordion, MatDatepickerModule,
    MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, 
  
  ],
  exports: [
    MainComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})


export class MainModule { }
