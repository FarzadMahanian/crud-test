import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    title = 'Element\'s details';

    @Input() element: any[];

    @Output() editElement =  new EventEmitter();

    @Output() deleteElement = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onEdit(element) {
        this.editElement.emit(element);
    }

    onDelete(element) {
        this.deleteElement.emit(element);
    }

}
