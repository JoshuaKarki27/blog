import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { OurStoryComponent } from './component/our-story/our-story.component';
import { HelpPageComponent } from './component/help-page/help-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'our-story', component: OurStoryComponent},
    {path: 'help-page', component: HelpPageComponent}
];
