import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: AnimationOptions = {
    // https://lottiefiles.com/
    path: '/assets/lottie/pacman.json',
  };

  constructor() {}
 
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
