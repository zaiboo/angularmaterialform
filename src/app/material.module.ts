import { NgModule } from '@angular/core';
import { MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    exports: [MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})

export class MaterialModule{}