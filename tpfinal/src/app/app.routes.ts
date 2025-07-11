import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Detail } from './components/detail/detail';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
    {
    path: 'detail/:id',
    component: Detail,
  },
    {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    component: Home,
  },
];
