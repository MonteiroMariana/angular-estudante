import { Component } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent {

  formGroupEstudante : FormGroup;
  estudantes: Estudante[] = [];

  constructor (private service: EstudanteService, formBuilder: FormBuilder){
    this.formGroupEstudante = formBuilder.group({
      id : [''],
      nome : [''],
      idade : [''],
      media : [''],
      materias : ['']
    });
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.estudantes().subscribe(
      {
          next:  data =>  this.estudantes = data,
          error: msg  => console.log("Erro ao chamar o endpoint " + msg)
      }
    )
}

  criar() {
    this.service.adicionar(this.formGroupEstudante.value).subscribe({
      next: data => {
        this.estudantes.push(data);
        this.formGroupEstudante.reset();
      }
    });
  }
}
