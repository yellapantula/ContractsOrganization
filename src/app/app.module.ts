import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { FieldsComponent } from './fields/fields.component';
import { ContractsComponent } from './fields/contracts/contracts.component';
import { PositionListComponent } from './fields/position-list/position-list.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    ContractsComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
