import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectiveTestComponent } from "./directive-test/directive-test.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";

const routes:Routes=[
  {path:'custom-directive' , component:DirectiveTestComponent},
  {path:'reactiveForm',component:ReactiveFormComponent,pathMatch:'full'},
  
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})

export class routingBasicConcept {}
