import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
        <h1>{{name}}</h1>
        <button (click)="setAppName(name)">Set App Name</button>
        <button (click)="setTitle(name)">Update Page Title to application name</button>
        <list></list>
    `
})
export class AppComponent {

    title : string;
    name  : string;

    constructor (private titleService: Title) {
        console.log(titleService)
    }

    setAppName () {
        if (this.name != null) return alert('AppName is already set.');
        this.name = 'Angular 2 Base Application';
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
