import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  name: string = 'Ironman';
  age : number = 45;

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 21;
  }

  resetValues():void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
