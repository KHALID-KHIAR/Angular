import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomDirectiveDirective } from './directive-test/custom-directive.directive';
import { routingBasicConcept } from './routing-basic-concept.module';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    DirectiveTestComponent,
    CustomDirectiveDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routingBasicConcept
  ],
  exports:[
  ]
})
export class BasicConceptsModule { }
