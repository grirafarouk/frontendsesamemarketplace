import { ProduitsService } from './../services/produits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {
  newliste=[];
  searchText:string
  constructor(private produitservice: ProduitsService) { }

  ngOnInit() {
    this.produitservice.getall().subscribe(data=>{
    
    this.newliste=data
    
    })
    
    
}
public getliste(){

  this.produitservice.getall().subscribe(data=>{
    
    this.newliste=data
    
    })
}
public searchingproduct(event){
  if(event.target.value!=""){
this.produitservice.searchproduct(event.target.value).subscribe(data=>{
console.log(data)
this.newliste=data

})}
else {
this.getliste()

}

}



public resetall(){
this.searchText=""
this.getliste()

}
}
