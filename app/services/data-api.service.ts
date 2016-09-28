import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataApiService {

    apiUrl: string;
    apiKey: string;
    secret: string;

    constructor(private http: Http) {
        this.apiUrl    = 'http://uifaces.com/api/v1/random';
    }

    getData(): Observable<any> {
        return this.http.get(`${this.apiUrl}`).map(response => response.json());
    }
}
