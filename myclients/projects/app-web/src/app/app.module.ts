import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LibSharedUiModule } from "../../../lib-shared-ui/src/lib/lib-shared-ui.module";

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        DashboardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LibSharedUiModule   // Need to include MAIN MODULE OF LIBRARY TO USE IT IN THIS PROJECT
    ]
})
export class AppModule { }
