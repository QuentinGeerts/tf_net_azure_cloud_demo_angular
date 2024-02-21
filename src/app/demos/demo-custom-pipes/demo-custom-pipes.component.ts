import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-custom-pipes',
  templateUrl: './demo-custom-pipes.component.html',
  styleUrl: './demo-custom-pipes.component.scss'
})
export class DemoCustomPipesComponent {

  formateurs: any[] = [
    { id: 1, nom: 'Geerts', prenom: 'Quentin' },
    { id: 2, nom: 'Ly', prenom: 'Khun' },
    { id: 3, nom: 'Legrain', prenom: 'Samuel' },
    { id: 4, nom: 'Person', prenom: 'Michael' },
  ];

}
