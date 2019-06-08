import {Component, OnInit, ViewChild} from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showForm = false;
    showDetails = false;
    selectedElement = {};
    editElement = {};
    editIndex = -1;

    items: any[] = [
        {
            title: 'Element Title',
            description: 'Element Description'
        }
    ];

    @ViewChild('details', {static: false}) detailsComponent: DetailsComponent;

    @ViewChild('form', {static: false}) formsComponent: FormComponent;

    @ViewChild('details', {static: false}) tableComponent: TableComponent;

    ngOnInit() {

    }

    onShowForm() {
        this.showForm = true;
        this.showDetails = false;
        this.editElement = {};
        this.editIndex = -1;
    }

    onSelectElement(val) {
        this.selectedElement = val;
        this.showDetails = true;
        this.showForm = false;
    }

    onDetailEdit(val) {
        this.editElement = val;
        this.editIndex = this.items.findIndex( item => item.title === val.title && item.description === val.description );
        this.showDetails = false;
        this.showForm = true;
    }

    onDetailDelete(val) {

        if (confirm('Are you sure you want to delete this element?')) {
            const elementIndex = this.items.findIndex( item => item.title === val.title && item.description === val.description );
            this.items.splice(elementIndex, 1);
            this.showForm = false;
            this.showDetails = false;
        }

    }

    onFormSave(val) {
        if (this.editIndex > -1) {
            this.items[this.editIndex].title = val.title;
            this.items[this.editIndex].description = val.description;
            this.editElement = {};
            this.editIndex = -1;
            this.showForm = false;
            this.showDetails = false;
        } else {
            this.items.push(val);
            this.editElement = {};
            this.editIndex = -1;
            this.showForm = false;
            this.showDetails = false;
        }
    }
}
