import {Component, OnInit} from "@angular/core";
import {ItemsService} from "../services/item.service";

@Component({
    selector: 'app',
    template: `
        <h2>Simple component</h2>
        <ul>
            <li *ngFor='let item of items'>
                {{item}}
            </li>    
        </ul>
    `,
    providers: [ItemsService]
})
export class AppComponent implements OnInit {
    private items: String[];

    constructor(private _itemSerivce: ItemsService) {

    }

    ngOnInit() {
        this._itemSerivce.getItems().subscribe(items => {
            this.items = items;
        });
    }

}