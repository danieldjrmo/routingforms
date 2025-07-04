import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FormNormal {
  id: number,
  name: string;
}

@Component({
  selector: 'app-formulario-normal',
  imports: [FormsModule],
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {
  name = ''
  textosForm: FormNormal[] = [];

  enviar() {
    const nuevaTarea: FormNormal = {
      id: this.textosForm.length + 1,
      name: this.name,

    };

    this.textosForm = [...this.textosForm, nuevaTarea];
  }
}
