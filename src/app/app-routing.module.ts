import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantHomeComponent } from './applicant-home/applicant-home.component';
import { ApprovalPanelComponent } from './approval-panel/approval-panel.component';

const routes: Routes = [
    { path: '', component: ApplicantHomeComponent },
    { path: 'returningapplicant', component: ApprovalPanelComponent},
    { path: 'approvalpanel', component: ApprovalPanelComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}