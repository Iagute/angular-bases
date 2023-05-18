import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public characterForm: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {
    if (this.characterForm.name.length === 0) return;

    this.onNewCharacter.emit({...this.characterForm});

    this.characterForm.name = '';
    this.characterForm.power = 0;
  }

}
