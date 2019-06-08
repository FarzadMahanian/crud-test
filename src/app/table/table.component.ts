import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    title = 'List of Elements';

    @Input() elements: any[];

    @Output() public addElementEvent = new EventEmitter();

    @Output() selectedElement = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    fireEvent() {
        this.addElementEvent.emit();
    }

    selectElementEvent(el) {
        this.selectedElement.emit({
            title: el.title,
            description: el.description
        });
    }

    addElement(element) {
        //TODO: Add element here
    }

    updateElement(element) {
        //TODO: Update element here
    }

    deleteElement(element) {
        //TODO: Delete element here
    }
}
