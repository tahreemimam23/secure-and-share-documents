import { importProvidersFrom, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HomeModule } from "./home/home.module";
import { appConfig } from "./app.config";
import { AngularFireModule } from "@angular/fire/compat";
import { firebaseConfig } from "./constants/constants";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

@NgModule({
    declarations: [
        AppComponent,
        // HomeComponent   
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        HomeModule,
    ],
    providers: [
        importProvidersFrom([
            AngularFireModule.initializeApp(firebaseConfig), 
            AngularFireAuthModule,
            AngularFireDatabaseModule,
            AngularFirestoreModule
          ])
    ]
})
export class AppModule {
    static forRoot: any;

}