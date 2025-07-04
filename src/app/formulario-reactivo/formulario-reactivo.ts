import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

interface FormReactivo {
  id: number;
  email: string;
}

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrls: ['./formulario-reactivo.css']
})
export class FormularioReactivo {

  emailsForm: FormReactivo[] = [];

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  enviar() {
    if (this.profileForm.invalid) return;
    const nuevaForm: FormReactivo = {
      id: this.emailsForm.length + 1,
      email: this.profileForm.value.email!.trim()
    };

    this.emailsForm = [...this.emailsForm, nuevaForm];

  }


}
