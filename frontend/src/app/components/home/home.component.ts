import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormPrestadoresComponent } from '../form-prestadores/form-prestadores.component';


@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FormPrestadoresComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
