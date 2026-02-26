import { Component } from '@angular/core';
import { MainForm } from './main-form/main-form';
import { SideCard } from "./side-card/side-card";

@Component({
  selector: 'app-create-form',
  imports: [MainForm, SideCard],
  templateUrl: './create-form.html',
  styleUrl: './create-form.scss',
})
export class CreateForm {

}
