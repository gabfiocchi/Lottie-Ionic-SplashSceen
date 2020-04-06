import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

// import { LottieModule } from 'ngx-lottie';
// // import player from 'lottie-web';

// // Note we need a separate function as it's required
// // by the AOT compiler.
// export function playerFactory() {
//   return import('lottie-web');
// }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
    StatusBar,
    SplashScreen, LottieSplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
