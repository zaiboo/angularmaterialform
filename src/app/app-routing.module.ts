import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantHomeComponent } from './applicant-home/applicant-home.component';
import { ApprovalPanelComponent } from './approval-panel/approval-panel.component';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
    { path: '', component: Test1Component },
    { path: 'returningapplicant', component: ApprovalPanelComponent},
    { path: 'approvalpanel', component: ApprovalPanelComponent},
    { path: 'test2', component: Test2Component },
    { path: 'test1', component: Test1Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}