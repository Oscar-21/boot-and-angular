import { Injectable } from '@angular/core'
import { IUser, IAuth } from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { finalize } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable()
export class AuthService {

  authenticated = true


  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(
      credentials ? {
        authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {})

    this.http.get('user', { headers: headers }).subscribe(response => {
      if (response['name']) {
        this.authenticated = true
      } else {
        this.authenticated = false
      }
      return callback && callback()
    })
  }


  loginUser(user: IAuth): void {
  }

  updateCurrentUser(user: IUser) {
  }

  logout(): void {
    this.http.post('logout', {}).pipe(
      finalize(() => {
        this.authenticated = false
        this.router.navigateByUrl('/login')
      })
    ).subscribe()
  }

  isAuthenticated(): Observable<IUser> {
    return this.http.get<IUser>('api/v1/user')
  }

}
