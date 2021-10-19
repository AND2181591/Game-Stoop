import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    imports: [
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatProgressSpinnerModule
    ], 
    exports: [
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {}