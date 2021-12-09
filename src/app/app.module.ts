import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ChooserComponent } from './chooser/chooser.component';
import { PreviewerComponent } from './previewer/previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooserComponent,
    PreviewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
