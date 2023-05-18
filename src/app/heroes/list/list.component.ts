import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroNames  :string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Capitan América']
  deletedHero?:string;

  deleteHero():void {
    this.deletedHero = this.heroNames.pop();
  }

}
