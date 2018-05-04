import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProofComponent } from './proof/proof.component';
import { UserComponent } from './user/user.component';
import { ProofListComponent } from './proof-list/proof-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/proofs', pathMatch: 'full'},
  { path: 'proofs', component: ProofListComponent },
  { path: 'users', component: UserListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProofComponent,
    UserComponent,
    ProofListComponent,
    UserListComponent
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
