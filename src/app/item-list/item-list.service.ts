import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemListService {

    catsURL = 'http://localhost:3000/item-list';

    constructor(private http: Http) {}

    getItemList(): Observable<Item[]> {
        return this.http.get(this.catsURL)
            .map( (res: Response) => res.json())
            .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
    // getItemList(): Item[] {
    //     return CATS;
    // }
    updateItem(item: Item): Observable<Item[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // .. Set content type to JSON
        const options = new RequestOptions({ headers: headers}); // create a request option

        return this.http.put(`${this.catsURL}/${item['id']}`, item, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
