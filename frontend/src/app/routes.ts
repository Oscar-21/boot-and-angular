import { Route } from '@angular/router'
import { Error404Component } from './errors/404.component';
import { FooComponent } from './foo/foo.component';

export const appRoutes: Route[] = [{
  path: '',
  redirectTo: '/events',
  pathMatch: 'full'
}, {
  path: '404',
  component: Error404Component
}, {
  path: 'events',
  loadChildren: './events/event.module#EventModule'
}, {
  path: 'user',
  loadChildren: './user/user.module#UserModule'
}, {
  path: 'foo',
  component: FooComponent
}, {
  path: '**',
  component: Error404Component
}]
