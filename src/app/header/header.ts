import { Component, Input } from '@angular/core';
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-header',
  imports: [ButtonDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
@Input() breadCrumb: string = "Home >";
@Input() title: string= "Title";
@Input() submitDisabled: boolean = true;
}
