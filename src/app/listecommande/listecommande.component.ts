import { CommandeService } from './../commande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listecommande',
  templateUrl: './listecommande.component.html',
  styleUrls: ['./listecommande.component.css']
})
export class ListecommandeComponent implements OnInit {
  newliste=[];
  searchText:string
  constructor(private commandeservice: CommandeService) { }

  ngOnInit() {
    this.commandeservice.getAll().subscribe(data=>{
    
    this.newliste=data
    
    })
    
    
}
public getliste(){

  this.commandeservice.getAll().subscribe(data=>{
    
    this.newliste=data
    
    })
}
public searchingcommande(event){
  if(event.target.value!=""){
this.commandeservice.searchcommande(event.target.value).subscribe(data=>{
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
