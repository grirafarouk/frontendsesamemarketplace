import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourService { 
 
  private behave = new BehaviorSubject<Object>({user: 'Hello'});
    
  constructor( ) { } 
   
  setBehaviorView(behave: Object) { 
      this.behave.next(behave); 
  } 
  getBehaviorView(): Observable<any> { 
      return this.behave.asObservable(); 
  }}  