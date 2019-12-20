import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient: HttpClient) 
  
  { 

  }
   httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  baseurl="http://localhost:8584/commande";
  public getAll(): Observable<any> {
  return this.httpClient.get(this.baseurl+"/all");
  }


  public save(commande): Observable<any> {
      return this.httpClient.post(this.baseurl+"/add", commande, this.httpOptions);
  }

  public update(commande): Observable<any> {
      return this.httpClient.put(this.baseurl+"/edit", commande, this.httpOptions);
  }



  delete(commande): Observable<any> {

    return this.httpClient.delete(this.baseurl+"/delete/"+commande.id_commande );
  }
  public searchcommande(name: any): Observable<any> {
    return this.httpClient.get(this.baseurl+"/search/" + name)


  }
}
