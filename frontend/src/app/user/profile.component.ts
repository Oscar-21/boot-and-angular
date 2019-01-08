import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { Toastr, TOASTR_TOKEN } from '../shared/toastr.service'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
  templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    let firstName = new FormControl(
      '',
      Validators.required
    )
    let lastName = new FormControl(
      '',
      Validators.required
    )
    let email = new FormControl(
      '',
      [Validators.required, Validators.email]
    )
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
      email: email
    })
  }

  saveProfile(user: IUser): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(user)
      this.toastr.success('Profile Saved')
    }
  }

  validateFirstName(): boolean {
    return this.profileForm.controls.firstName.valid
  }

  validateLastName(): boolean {
    return this.profileForm.controls.lastName.valid
  }

  validateEmail(): boolean {
    return this.profileForm.controls.email.valid
  }


  cancel(): void {
    this.router.navigate(['/events'])
  }

}
