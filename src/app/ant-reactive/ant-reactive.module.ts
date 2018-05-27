import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';

import {
  DynamicAntInputComponent,
  DynamicAntFormControlContainerComponent,
  DynamicAntFormComponent
} from './';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    DynamicAntInputComponent,
    DynamicAntFormControlContainerComponent,
    DynamicAntFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    DynamicFormsCoreModule.forRoot(),
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  exports: [
    DynamicFormsCoreModule,
    DynamicAntFormControlContainerComponent,
    DynamicAntFormComponent
  ],
  entryComponents: [DynamicAntInputComponent]
})
export class AntReactiveModule {}
