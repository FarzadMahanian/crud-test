import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    title = 'Add New Element';
    angForm: FormGroup;

    @Output() save = new EventEmitter();

    @Input() editIndex = -1;

    @Input() editElement = {
        title: '',
        description: ''
    };

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            elementTitle: ['', Validators.required ],
            elementDescription: ['', Validators.required ]
        });
    }

    ngOnInit() {

    }

    onSubmitForm(data) {
        this.save.emit({
            title: data.elementTitle,
            description: data.elementDescription
        });
    }

}
