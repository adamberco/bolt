import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { DiscoveryPageComponent } from './pages/discovery-page/discovery-page.component';
import { RestaurantDetailsPageComponent } from './pages/restaurant-details-page/restaurant-details-page.component';
import { RestaurantListComponent } from './cmps/restaurant-list/restaurant-list.component';
import { RestaurantPreviewComponent } from './cmps/restaurant-preview/restaurant-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';

@NgModule({
  declarations: [AppComponent, DiscoveryPageComponent, RestaurantDetailsPageComponent, RestaurantListComponent, RestaurantPreviewComponent, AppHeaderComponent, AppFooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
