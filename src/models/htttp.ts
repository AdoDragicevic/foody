export enum RequestStatus { NONE, LOADING, SUCCESS, ERROR };

export interface AuthResponseData {
  idToken:	string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

export enum FetchAuthType { LOG_IN, SIGN_UP };