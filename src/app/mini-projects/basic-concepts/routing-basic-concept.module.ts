import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputComponent } from "./cva/input/input.component";
import { DirectiveTestComponent } from "./directive-test/directive-test.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { WorkingRjxsComponent } from "./rxjs/working-rjxs/working-rjxs.component";

const routes:Routes=[
  {path:'custom-directive' , component:DirectiveTestComponent},
  {path:'cva/input',component:InputComponent},
  {path:'rxjs',component:WorkingRjxsComponent},
  {path:'reactiveForm',component:ReactiveFormComponent,pathMatch:'full'},
  
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})

export class routingBasicConcept {}
