import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProofListComponent } from './proof-list/proof-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProofComponent } from './proof/proof.component';
import { UserComponent } from './user/user.component';
import { NewProofComponent } from './newproof/newproof.component';
import { NewUserComponent } from './newuser/newuser.component';
import { UserDashboardComponent } from './userdashboard/userdashboard.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NewPresentationComponent } from './newpresentation/newpresentation.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'proofs', component: ProofListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProofComponent,
    UserComponent,
    ProofListComponent,
    UserListComponent,
    NewProofComponent,
    NewUserComponent,
    UserDashboardComponent,
    PresentationComponent,
    NewPresentationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
