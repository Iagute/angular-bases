import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroModule } from './heroes/hero.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    DbzModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
