import {
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DynamicFormArrayGroupModel,
  DynamicFormControl,
  DynamicFormControlContainerComponent,
  DynamicFormControlEvent,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
  DynamicTemplateDirective,

  DYNAMIC_FORM_CONTROL_TYPE_INPUT,

} from '@ng-dynamic-forms/core';

import { DynamicAntInputComponent } from './';


@Component({
  selector: 'dynamic-ant-form-control',
  templateUrl: './dynamic-ant-form-control-container.component.html'
})
export class DynamicAntFormControlContainerComponent extends DynamicFormControlContainerComponent {
  @ContentChildren(DynamicTemplateDirective)
  contentTemplateList: QueryList<DynamicTemplateDirective> | undefined;
  @Input('templates') inputTemplateList: QueryList<DynamicTemplateDirective> | undefined;

  @Input() asBootstrapFormGroup: boolean = true;
  @Input() bindId: boolean = true;
  @Input() context: DynamicFormArrayGroupModel | null = null;
  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: DynamicFormControlModel;

  @Output()
  blur: EventEmitter<DynamicFormControlEvent> = new EventEmitter<
    DynamicFormControlEvent
  >();
  @Output()
  change: EventEmitter<DynamicFormControlEvent> = new EventEmitter<
    DynamicFormControlEvent
  >();
  @Output()
  focus: EventEmitter<DynamicFormControlEvent> = new EventEmitter<
    DynamicFormControlEvent
  >();
  @Output('bsEvent')
  customEvent: EventEmitter<DynamicFormControlEvent> = new EventEmitter<
    DynamicFormControlEvent
  >();

  @ViewChild('componentViewContainer', { read: ViewContainerRef })
  componentViewContainerRef: ViewContainerRef;

  get componentType(): Type<DynamicFormControl> | null {
    return (
      this.layoutService.getCustomComponentType(this.model) ||
      AntUIFormControlMapFn(this.model)
    );
  }

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService
  ) {
    super(componentFactoryResolver, layoutService, validationService);
  }
}

export function AntUIFormControlMapFn(
  model: DynamicFormControlModel
): Type<DynamicFormControl> | null {
  switch (model.type) {
    case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
      return DynamicAntInputComponent;
    default:
      return null;
  }
}
