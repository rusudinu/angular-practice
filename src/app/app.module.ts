import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { UserServiceService } from './components/users-component/user-service.service';
import { ServiceForDataSharing } from './shared/service-for-data-sharing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [ServiceForDataSharing, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
