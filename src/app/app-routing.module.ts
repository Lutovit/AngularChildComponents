import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidePanelComponent } from './Components/child/side-panel/side-panel.component';
import { MainComponent } from './Components/main/main/main.component';
import { HomeComponent } from './Components/main/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: MainComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
