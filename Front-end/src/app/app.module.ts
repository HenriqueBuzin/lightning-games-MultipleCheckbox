// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MdDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Essentials
import { DialogComponent } from './_directives/dialog/dialog.component';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';

// Services
import { FooterService } from './_services/footer.service';
import { AuthService } from './_services/auth.service';

// Component
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// Guards
import { AuthChildGuard } from './_guards/auth-child-guard';
import { AuthGuard } from './_guards/auth-guard';

// External
import 'hammerjs';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        DialogComponent,
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MdDialogModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        },
        AuthChildGuard,
        FooterService,
        AuthService,
        AuthGuard
    ],
    entryComponents: [ DialogComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
