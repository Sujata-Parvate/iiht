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
import { CheckapprovalComponent } from './checkapproval/checkapproval.component';
import { TrainStatusComponent } from './train-status/train-status.component';
import { GetReportComponent } from './get-report/get-report.component';
import { ReportScoreComponent } from './report-score/report-score.component';
import { WheeboxComponent } from './wheebox/wheebox.component';

import { APP_BASE_HREF } from '@angular/common';

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
          path: 'checkapproval',
          component: CheckapprovalComponent,
         },
         {
          path: 'train-status',
          component:TrainStatusComponent,
         },
         {
          path: 'get-report',
          component:GetReportComponent,
         },
         {
          path: 'report-score',
          component:ReportScoreComponent,
         },
         {
          path: 'wheebox',
          component:WheeboxComponent,
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
    GeneratePageComponent,
    CheckapprovalComponent,
    TrainStatusComponent,
    GetReportComponent,
    ReportScoreComponent,
    WheeboxComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthserviceService,{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
