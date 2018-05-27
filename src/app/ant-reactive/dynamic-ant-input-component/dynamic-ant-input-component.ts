import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {
  DynamicFormControlComponent,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
  DynamicInputModel
} from '@ng-dynamic-forms/core';

@Component({
  selector: 'dynamic-ant-input',
  templateUrl: './dynamic-ant-input-component.html',
  styleUrls: ['./dynamic-ant-input-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicAntInputComponent extends DynamicFormControlComponent
  implements OnInit {
  @Input() bindId: boolean = true;
  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: DynamicInputModel;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();
  constructor(
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService
  ) {
    super(layoutService, validationService);
  }

  ngOnInit() {
  }
}
