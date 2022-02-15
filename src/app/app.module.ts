import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule ,Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import{ FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';

import { AuthserviceService } from './services/authservice.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneratePageComponent } from './generate-page/generate-page.component';
const routes: Routes = [
  {
  path: 'user',
  component: UserComponent,
  },
  {
    path: 'user-reg',
    component: UserRegComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      },
      {
        path: 'page',
        component: GeneratePageComponent,
        },
    {
      path: '',
      redirectTo: '/user',
      pathMatch:'full',
    }
  ];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserRegComponent,
    DashboardComponent,
    GeneratePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
