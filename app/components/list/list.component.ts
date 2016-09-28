import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
    selector: 'list',
    template: `
        <ul class="list">
            <li class="list-item" *ngFor="let item of listItems">
                <div class="list-item-inner">{{item.username}}</div>
                <img src="{{item.image_urls.epic}}"/>
            </li>
        </ul>
    `
})
export class ListComponent implements OnInit {

    listItems:any = [];

    constructor(private api: DataApiService) {}

    ngOnInit () {

        // on initialization run method to get data with service
        // we are naming api in the constructor
        //
        this.api.getData().subscribe((res) => {
            console.log('api res: ', res);
            this.listItems.push(res);
        }, error => {
            console.log('Error');
        });
    }
}
