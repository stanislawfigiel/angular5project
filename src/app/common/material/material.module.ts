import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSelectModule,
  MatOptionModule,
  // ErrorStateMatcher,
  // MatError,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    // ErrorStateMatcher,
    // MatError,

  ],
  exports:[
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    // ErrorStateMatcher,
    // MatError,
  ],
  declarations: []
})
export class MaterialModule { }
