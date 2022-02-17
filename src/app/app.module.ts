import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { WheeboxuiComponent } from './proctor/wheeboxui/wheeboxui.component';
import { CheckapprovalComponent } from './checkapproval/checkapproval.component';
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
        path: 'generate-page',
        component: GeneratePageComponent,
        },
        {
          path: 'wheebox',
          component: WheeboxuiComponent,
          },
          { path: 'checkapproval',
          component: CheckapprovalComponent},
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
    GeneratePageComponent,
    WheeboxuiComponent,
    CheckapprovalComponent
  ],
  imports: [
    CommonModule,
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
