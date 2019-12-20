import { Location } from '@angular/common';
import { CommandeService } from './../commande.service';
import { Commande } from './../models/Commande';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  @ViewChild('commandeModal', { static: false })
  public commandeModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  listcommande: any[];

  commande: Commande;
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private router:Router,  private cokie:CookieService,private location:Location,

    private commandeservice: CommandeService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.commande = new Commande();
    this.commandeservice.getAll().subscribe(data => {
      this.listcommande = data;
    })
  }


  showDeleteModal(commande: any): any {
    this.commande = Object.assign({}, commande);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.commande.id_commande != null) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.commandeModal.show();
  }

  createcommande() {
    console.log(this.commande)
    this.commandeservice.save(this.commande).toPromise().then((data: Commande) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "commande ajouté avec succés !")
      }
    })
    this.commandeModal.hide();
  }

  showEditModal(commande: any) {
    this.commande = Object.assign({}, commande);
  
    if (this.commande.id_commande != null) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.commandeModal.show();

  }
  

  updatecommande() {
    this.commandeservice.update(this.commande).toPromise().then((data: Commande) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "commande modifié avec succés !")
      }
    })
    this.commandeModal.hide();
  }

public retoure(){

this.location.back();

}
savecommande() {
    let error = false;

    if (!error) {
      if (this.commande.id_commande != null)
        this.updatecommande();
      else this.createcommande();
    }
  }
  delete() {
    this.commandeservice.delete(this.commande).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "commande Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.commande = new Commande();
  }
  
  
}
