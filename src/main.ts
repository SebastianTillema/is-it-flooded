import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
  ]
}).catch(err => console.error(err));
