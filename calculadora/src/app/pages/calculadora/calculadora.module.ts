import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';




@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraModule { }
