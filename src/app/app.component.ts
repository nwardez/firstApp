import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Définition de la classe
export class AppComponent {
  title = 'Mon application';
  description='Ca va bien';
  couleur='blue';
  visible='visible';
  affichage="";

  
    users = [{
      id: '0',
      name: 'Aisha Eichmann',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
      jobTitle: "Customer Division Assistant"
    },
    {
      id:'1',
      name: "Calista Skiles",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg",
      jobTitle: "Dynamic Solutions Orchestrator"
    },
    {
      id: 2,
      name: "Kristofer Hermiston",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg",
      jobTitle: "Dynamic Markets Planner"
    }];
  
  

  user = {
    name:'Patrick',
    age:'42',
    birthday: new Date('1976/01/02')
  };

  // Méthodes
  getDescription() : string {
      return this.description.toUpperCase();
  }

  // Change le titre à chaque click
  changeTitle($event) {
    if (this.title == 'Mon application') {
      this.title = 'Nouveau titre';
    } else {
      this.title = 'Mon application';
    }
  }

  //Change la couleur du titre à chaque click
  changeColorText($event) {
    if ( this.couleur === 'blue') {
       this.couleur = 'red';
    } else {
      this.couleur = 'blue';
    }
  }

  afficherContenu($event) {
    this.affichage=$event.target.value
  }

  changeCouleur($event) {
    this.couleur=$event.target.value;
  }

  rendreTitreInvisible($event) {
    if (this.visible=='visible') {
      this.visible='hidden';
    } else {
      this.visible='visible';
    }
  }

}
