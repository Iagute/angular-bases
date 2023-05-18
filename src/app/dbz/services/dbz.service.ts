import { Injectable } from '@angular/core';
import { v4 as uuid  } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7600
  }];

  onNewCharacter( character: Character ):void {
    const newCharacter: Character = {
      id: uuid(), ...character
    }

    this.characters.push(newCharacter);
  }

  // onDelete( index: number ):void {
  //   this.characters.splice(index,1);
  // }
  deleteCharacterByiD( id: string ):void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
