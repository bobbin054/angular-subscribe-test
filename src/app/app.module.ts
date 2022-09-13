import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SubComponent } from './sub/sub.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SubComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
