import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './components/app/app.component';
import { ListComponent }    from './components/list/list.component';

// Services/Providers
import { DataApiService }   from './services/data-api.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ListComponent
    ],
    providers: [
        DataApiService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

    constructor () {
        console.log('AppModule Class');
    }
}
