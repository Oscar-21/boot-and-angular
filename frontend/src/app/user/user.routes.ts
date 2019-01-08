import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { Route } from "@angular/router";

export const userRoutes: Route[] = [{
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'login',
  component: LoginComponent
}]
