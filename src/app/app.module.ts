import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Import other necessary Angular Material modules if you use them.

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, // Add other necessary Angular Material modules to the 'imports' array.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
