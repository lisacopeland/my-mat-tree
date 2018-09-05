import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TreeDisplayComponent } from './tree-display/tree-display.component';
import { FileDatabase } from './file-database.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [FileDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
