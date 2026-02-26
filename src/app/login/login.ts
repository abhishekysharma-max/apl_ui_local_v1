import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, ButtonModule, CheckboxModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
