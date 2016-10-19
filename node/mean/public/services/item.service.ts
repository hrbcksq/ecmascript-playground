import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class ItemsService {
    constructor (private _http: Http) {

    }
    
    getItems() : Observable<String[]> {
        return this._http.get('/api')
            .map((res) => res.json());        
    }

}