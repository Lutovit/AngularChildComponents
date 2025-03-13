
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildModule } from './Components/child/child.module';
import { MainModule } from './Components/main/main.module';

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



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, 

    ChildModule, MainModule,
    
    MatSlideToggleModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatAccordion, MatDatepickerModule,
    MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, 
  
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
