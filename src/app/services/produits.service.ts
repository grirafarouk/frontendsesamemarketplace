import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) {}

   public host:String="http://localhost:8584/produit"
  
   public getproduits (page:number,size:number){

    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }
  public getall ():Observable<any>{

    return this.httpClient.get(this.host+"/all");
  }
  public getproductbykey(mc:string,page:number,size:number)
  {

    return this.httpClient.get(this.host+"/produits/search/recherchepage?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteressource(data)

  {
    return this.httpClient.delete(this.host+"/delete/"+data.id);

  }
  public searchproduct(name: any): Observable<any> {
    return this.httpClient.get(this.host+"/search/" + name)


  }
  public saveressource(data):Observable<produit>{

    return this.httpClient.post<produit>(this.host+"/add",data,this.httpOptions);
  }
  public getressource(url):Observable<produit>{

    return this.httpClient.get<produit>(url);
  }

  public editressource(data):Observable<produit>{

    return this.httpClient.put<produit>(this.host+"/edit",data,this.httpOptions);
  }

}
