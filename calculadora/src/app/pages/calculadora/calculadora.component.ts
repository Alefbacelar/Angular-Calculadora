import { CalculadoraService } from './services/calculadora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor(
    private calculadoraService : CalculadoraService
  ) { }

  ngOnInit(): void {
  }

}
