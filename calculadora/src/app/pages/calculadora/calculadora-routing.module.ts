import { CalculadoraComponent } from './calculadora.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes =[
{
  path:'', redirectTo: 'calculador', pathMatch: 'full'
},
{
  path:'', component: CalculadoraComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule {}
