import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageService } from './image.service';
import {NgxPaginationModule} from 'ngx-pagination';

import {HttpClientModule , HttpHeaders} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
