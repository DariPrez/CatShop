import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemListService {


    constructor(private http: Http) {}

    getItemList(): Observable<Item[]> {
        return this.http.get('http://localhost:3000/item-list')
            .map( (res: Response) => res.json())
            .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
    // getItemList(): Item[] {
    //     return CATS;
    // }
    addItem(item: Item): Observable<Item[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // .. Set content type to JSON
        let options = new RequestOptions({ headers: headers}); // create a request option

        return this.http.put(`http://localhost:3000/item-list/${item['id']}`, item, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
