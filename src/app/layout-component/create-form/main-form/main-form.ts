import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-form',
  imports: [ButtonModule],
  templateUrl: './main-form.html',
  styleUrl: './main-form.scss',
})
export class MainForm {

  selectedType = signal<string | null>(null);
  activeStep = signal(0);
  formTypes = [
    {label: 'BSC Data Input'},
    {label: 'KPI Data Input'},
    {label: 'Project Planning'},
    {label: 'Initiative'}
  ]

  cardTypes = [
    {
      src: 'assets/BSCdataInput.png',
      label: 'BSC Data Input'
    },
    {
      src: 'assets/KPIDataInput.png',
      label: 'KPI Data Input'
    },
    {
      src: 'assets/ProjectPlanning.png',
      label: 'Project Planning'
    },
    {
      src: 'assets/Initiative.png',
      label: 'Initiative'
    }
  ]

  steps = ['Form Type', 'Perspective & Strategic Objectives',
     'Key Performance Measure', 'Initiative Mapping']

  selectCard(card: string) {
    this.selectedType.set(this.selectedType() === card ? null : card);
  } 
  

  nextStep() {
    if(this.activeStep() < 3) {
      this.activeStep.update(v => v+1);
    }
  }

  prevStep() {
    if(this.activeStep() > 0) {
      this.activeStep.update(v => v-1);
    }
  }

}
