import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newGame: string = '';

  user: User = {
    name: 'Juan',
    favorites: [
      {
        id: 1,
        name: 'Metal Gear'
      },
      {
        id: 2,
        name: 'Super Mario'
      },
    ]
  }

  // for local references
  @ViewChild('myForm') myForm!: NgForm;


  validName(): boolean {
    return this.myForm?.controls.name?.invalid && this.myForm?.controls.name?.touched;

  }

  save() {

  }

  delete(index: number) {
    this.user.favorites.splice(index, 1);
  }

  addGame() {
    const newFavorite: Favorite = {
      id: this.user.favorites.length + 1,
      name: this.newGame
    }

    this.user.favorites.push({...newFavorite});
    this.newGame = '';
  }

}
