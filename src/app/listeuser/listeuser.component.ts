import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {

  newliste=[];
  
  searchText:string
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getAll().subscribe(data=>{
    
    this.newliste=data
    
    })
    
    
}
public getliste(){

  this.userservice.getAll().subscribe(data=>{
    
    this.newliste=data
    
    })
}
public searchinguser(event){
  if(event.target.value!=""){
this.userservice.searchuser(event.target.value).subscribe(data=>{
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
