import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { CvService } from './Platform/cv-service.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    CvService
  ]
})
export class AppModule { }
