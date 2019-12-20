import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private behave = new BehaviorSubject<Object>({ user: '0' });
  authenticated: boolean = false
  constructor(private httpclient: HttpClient) { }
  setBehaviorView(behave: Object) {
    this.behave.next(behave);
  }

  getBehaviorView(): Observable<any> {
    return this.behave.asObservable();

  } 
  getauthenticated() {

    return this.authenticated;
  }
  setauthenticated(o: boolean) {

    this.authenticated = o
  }
  authenticate(credential, callback) {

    if (credential != "") {
      this.authenticated = true
      return callback && callback();

    }
    else {
    this.authenticated = false
    }
    return ''
  }
}
