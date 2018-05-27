import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DynamicFormComponent,
  DynamicFormControlEvent,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormService,
  DynamicTemplateDirective
} from '@ng-dynamic-forms/core';
import { DynamicAntFormControlContainerComponent } from './dynamic-ant-form-control-container.component';

@Component({
  selector: 'dynamic-ant-form',
  templateUrl: './dynamic-ant-form.component.html'
})
export class DynamicAntFormComponent extends DynamicFormComponent {
  @Input('group') formGroup: FormGroup;
  @Input('model') formModel: DynamicFormControlModel[];
  @Input('layout') formLayout: DynamicFormLayout;

  @Output()
  blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
  @Output()
  change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
  @Output()
  focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();
  @Output('bsEvent')
  customEvent: EventEmitter<DynamicFormControlEvent> = new EventEmitter<DynamicFormControlEvent>();

  @ContentChildren(DynamicTemplateDirective)
  templates: QueryList<DynamicTemplateDirective>;

  @ViewChildren(DynamicAntFormControlContainerComponent)
  components: QueryList<DynamicAntFormControlContainerComponent>;

  constructor(
    protected formService: DynamicFormService,
    protected layoutService: DynamicFormLayoutService
  ) {
    super(formService, layoutService);
  }
}
