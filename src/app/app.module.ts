import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from 'src/app/material.module';
import { ApprovalPanelComponent } from './approval-panel/approval-panel.component';
import { ApplicantHomeComponent } from './applicant-home/applicant-home.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalPanelComponent,
    ApplicantHomeComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
