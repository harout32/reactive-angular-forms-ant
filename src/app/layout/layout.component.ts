import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {
  DynamicFormControlModel,
  DynamicInputModel,
  DynamicFormService
} from '@ng-dynamic-forms/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

export const MY_FORM_MODEL: DynamicFormControlModel[] = [
  new DynamicInputModel({
    id: 'sampleInput',
    label: 'Sample Input',
    maxLength: 5,
    minLength: 2,
    placeholder: 'Sample input',
    required: true
  })
];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  formModel: DynamicFormControlModel[] = MY_FORM_MODEL;
  formGroup: FormGroup;
  constructor(private formService: DynamicFormService) {
    // this.validateForm = this.fb.group({
    //   userName: ['', [Validators.required]]
    // });
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  ngOnInit() {
    console.log(this.formGroup);
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  onChange($event){
    console.log(this.formGroup.controls.sampleInput);
  }
}
