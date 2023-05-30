import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  {path: "mouvie-project" , loadChildren:()=>import('./Projects/zero-to-Hero-film-project/mouvie-project.module')
  .then((m)=>m.MouvieProjectModule) },

  { path:'charts' ,loadChildren:()=>import('./mini-projects/charts/charts.module').then(m=>m.ChartsModule)},

  {path:'basic-concept',loadChildren:()=>import('./mini-projects/basic-concepts/basic-concepts.module').then(m=>m.BasicConceptsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
