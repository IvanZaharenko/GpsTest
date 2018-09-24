import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAigi2BZ99WS9xls-Fyo-u5i5C30RA2IAY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
