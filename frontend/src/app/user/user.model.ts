export interface IUser {
  authorities: authorities,
  details: details
  authenticated: boolean,
  principal: principal
  credentials: any,
  name: string
}

type authorities = { [key: string]: string }[]
type details = {
  remoteAddress: string,
  sessionId: any
}
type principal = {
  password: any
  username: string
  authorities: authorities
  accountNonExpired: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  enabled: boolean
}

export interface IAuth {
  email: string
  password: string
}
