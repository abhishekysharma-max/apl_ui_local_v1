import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidemenu } from './sidemenu/sidemenu';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, Header, Sidemenu],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {

}
