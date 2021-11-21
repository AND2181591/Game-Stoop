import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatProgressSpinnerModule, 
        MatBadgeModule, 
        MatAutocompleteModule, 
        MatDialogModule
    ], 
    exports: [
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatProgressSpinnerModule, 
        MatBadgeModule, 
        MatAutocompleteModule, 
        MatDialogModule
    ]
})
export class MaterialModule {}