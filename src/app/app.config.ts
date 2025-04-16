import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

export const appConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
  ],
  withComponents: [
    PadreComponent,
    HijoComponent
  ]
};
