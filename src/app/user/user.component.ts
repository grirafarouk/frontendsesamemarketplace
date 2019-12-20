import { CommandeService } from './../commande.service';
import { user } from './../models/user';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Commande } from '../models/Commande';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('utilisateurModal', { static: false })
  public utilisateurModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  ListUtilistaeur: any[];
  ListUtilisteur2: any[];
  commandelist:any[];
  selectedvalue:Commande[];
  utilisateur: user;
  user: user = new user();
  profil: any[];
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private commandeservice:CommandeService,private router:Router,  private cokie:CookieService,private location:Location,

    private utilisateurService: UserService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
   this.commandeservice.getAll().subscribe(data=>{

  this.commandelist=data

   })
    this.utilisateur = new user();
    this.utilisateurService.getAll().subscribe(data => {
      console.log(data)
      this.ListUtilistaeur = data;
    })
  }
  public verifier (){
    console.log(this.selectedvalue)
  }

  showDeleteModal(user: any): any {
    this.utilisateur = Object.assign({}, user);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.utilisateur.users_id != null) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.utilisateurModal.show();
  }

  createUtilisateur() {
   
    this.utilisateurService.save(this.utilisateur).toPromise().then((data: any) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "utilisateur ajouté avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

  showEditModal(utilisateur: any) {
    this.utilisateur = Object.assign({}, utilisateur);
  
    if (this.utilisateur.users_id.length>0) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.utilisateurModal.show();

  }
  public getuser():any{
    let user:any
return this.cokie.get('profil');
  }

  updateUtilisateur() {
    this.utilisateurService.update(this.utilisateur).toPromise().then((data: any) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "utilisateur  modifié avec succés !")
      }
    })
    this.utilisateurModal.hide();
  }

public retoure(){

this.location.back();

}
   saveUtilisateur() {
    let error = false;

    if (!error) {
      if (this.utilisateur.users_id != null)
        this.updateUtilisateur();
      else this.createUtilisateur();
    }
  }
  delete() {
    this.utilisateurService.delete(this.utilisateur).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "utilisateur Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.utilisateur = new user();
  }
}
