import { Component } from '@angular/core';
import { DataService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tabela_cobertura: any[] = [];

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.DataService.getData().subscribe(data => {
      this.tabela_cobertura = data;
      console.log(data.values)
      //can't read arrays inside obj fill the table
      }
    );
  }
}

// Solution
//https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
//https://cursos.alura.com.br/forum/topico-error-trying-to-diff-object-object-only-arrays-and-iterables-are-allowed-79462
export interface Data {
  header1: string,
  header2: string,
  unidades: string,
  total: string,
  q1:number,
  q2:number,
  q3:number,
  q4:number
}