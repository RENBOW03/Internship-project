import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LoginCardComponent } from './login-card/login-card.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MemberComponent } from './member/member.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { Member2Component } from './member2/member2.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'login', component: LoginCardComponent},
  { path: 'member1', component: MemberComponent},
  { path: 'member2', component: Member2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    MemberComponent,
    HeaderComponent,
    FooterComponent,
    Member2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzLayoutModule,
    RouterModule.forRoot(appRoutes)


    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
