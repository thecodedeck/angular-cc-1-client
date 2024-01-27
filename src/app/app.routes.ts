import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Your routing file should look like this
export const routes: Routes = [
  // A route to the home page (component)
  {
    path: '',
    component: HomeComponent,
  },
  // A route to the about us page (module)
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
];
