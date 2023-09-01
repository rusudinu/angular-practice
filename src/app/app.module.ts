import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { ServiceForDataSharing } from './shared/service-for-data-sharing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ComponentsModule
  ],
  providers: [ServiceForDataSharing],
  bootstrap: [AppComponent]
})
export class AppModule {
}
