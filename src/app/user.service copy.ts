import { user } from './models/user';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) 
  
  { 

  }
   httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  baseurl="http://localhost:8584/user";
  public getAll(): Observable<any> {
  return this.httpClient.get(this.baseurl+"/all");
  }


  public save(utilisateur): Observable<any> {
      return this.httpClient.post(this.baseurl+"/add", utilisateur, this.httpOptions);
  }

  public update(utilisateur): Observable<any> {
      return this.httpClient.put(this.baseurl+"/edit", utilisateur, this.httpOptions);
  }



  delete(user): Observable<any> {

    return this.httpClient.delete(this.baseurl+"/delete/"+user.users_id );
  }

}
