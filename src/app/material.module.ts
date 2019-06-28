import { NgModule } from '@angular/core'

import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule,
    MatDialogRef,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatExpansionModule,
        MatSliderModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatExpansionModule,
        MatSliderModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    providers: [{
        provide: MatDialogRef,
        useValue: {
            close: () => {}
        }
    }]
})
export class MaterialModule { }