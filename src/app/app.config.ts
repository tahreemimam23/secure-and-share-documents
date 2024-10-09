import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './constants/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // imports for firebase setup
    importProvidersFrom([
      AngularFireModule.initializeApp(firebaseConfig), 
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule
    ])
  ]
};