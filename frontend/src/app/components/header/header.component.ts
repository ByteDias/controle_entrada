import { Component } from '@angular/core';
import { FormPrestadoresComponent } from '../form-prestadores/form-prestadores.component';

@Component({
  selector: 'app-header',
  imports: [
    FormPrestadoresComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
