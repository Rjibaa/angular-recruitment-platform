import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './Platform/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './Platform/detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { ObservableComponent } from './observable/observable.component';

export const routes: Routes = [
    {path:'cv', redirectTo:'/' , pathMatch:'full'},
    {path:'', component: CvComponent},
    {path:'cv/:id', component: DetailComponent },
    {path:'color', component: ColorComponent},
    {path:'login', component: AuthComponent},
    {path:'observable', component: ObservableComponent}
];

