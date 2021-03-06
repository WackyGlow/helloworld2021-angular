import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PetsComponent } from './pets/pets.component';
import { PetdetailsComponent } from './petdetails/petdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
