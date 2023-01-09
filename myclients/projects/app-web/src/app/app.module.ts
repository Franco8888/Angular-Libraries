import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LibSharedModule } from 'lib-shared';   // you only need to reference the direct library in import
import { LibSharedUiModule } from 'lib-shared-ui';  // you only need to reference the direct library in import

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
        LibSharedUiModule,  // Need to include MAIN MODULE OF LIBRARY TO USE IT IN THIS PROJECT
        LibSharedModule     // Allows this project to use the Lib-Shared library
    ]
})
export class AppModule { }
