import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// This is the entry point for the application.
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
