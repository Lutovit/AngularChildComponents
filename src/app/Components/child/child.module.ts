import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { ChildComponent } from './child/child.component';
import { ReactivChildComponent } from './reactiv-child/reactiv-child.component';
import { GroupNestedIntoArrayComponent } from './group-nested-into-array/group-nested-into-array.component';

import { NumberAndYearComponent } from './number-and-year/number-and-year.component';
import { ExplanatoryNoteModificationsComponent } from './explanatory-note-modifications/explanatory-note-modifications.component';
import { ExplanatoryNoteModificationsV2Component } from './explanatory-note-modifications-v2/explanatory-note-modifications-v2.component';
import { ExplanatoryNoteIssueAuthorComponent } from './explanatory-note-issue-author/explanatory-note-issue-author.component';
import { OrganizationComponent } from './organization/organization.component';
import { ForeignOrganizationComponent } from './foreign-organization/foreign-organization.component';
import { IpOrganizationComponent } from './ip-organization/ip-organization.component';
import { AddressComponent } from './address/address.component';
import { PostAddressComponent } from './post-address/post-address.component';
import { CustomComponentArrayComponent } from './custom-component-array/custom-component-array.component';
import { NumberAndYearV2Component } from './number-and-year-v2/number-and-year-v2.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'; 




import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkEditorComponent } from './ck-editor/ck-editor.component';
import { EditorJsComponent } from './editor-js/editor-js.component';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';
import { ModalComponent } from './modal/modal.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HtmlToPdf1Component } from './html-to-pdf-1/html-to-pdf-1.component';
import { TableComponent } from './table/table.component';













@NgModule({
  declarations: [
    ChildComponent, ReactivChildComponent, ExplanatoryNoteModificationsComponent, NumberAndYearComponent, GroupNestedIntoArrayComponent, 
    ExplanatoryNoteModificationsV2Component, ExplanatoryNoteIssueAuthorComponent, AddressComponent, OrganizationComponent, ForeignOrganizationComponent, 
    IpOrganizationComponent, PostAddressComponent, CustomComponentArrayComponent, NumberAndYearV2Component, CkEditorComponent, EditorJsComponent, 
    NgxBootstrapComponent, ModalComponent, SidePanelComponent, HtmlToPdf1Component, TableComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, RouterModule, HttpClientModule,

    MatSlideToggleModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatAccordion, MatRadioModule, 
    MatSelectModule, MatTableModule,  MatSortModule , MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, 
    
    CKEditorModule, TooltipModule, 


  ],
  exports:[
    ChildComponent, ReactivChildComponent, ExplanatoryNoteModificationsComponent, NumberAndYearComponent, GroupNestedIntoArrayComponent, 
    ExplanatoryNoteModificationsV2Component, ExplanatoryNoteIssueAuthorComponent, AddressComponent, OrganizationComponent, ForeignOrganizationComponent, 
    IpOrganizationComponent, PostAddressComponent, CustomComponentArrayComponent, NumberAndYearV2Component, CkEditorComponent, EditorJsComponent, 
    NgxBootstrapComponent, ModalComponent, SidePanelComponent, HtmlToPdf1Component, TableComponent
  ],
  providers: [BsModalService]


})
export class ChildModule { }
