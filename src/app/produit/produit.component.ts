import { ProduitsService } from './../services/produits.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';
import { Location } from '@angular/common';
import { produit } from '../models/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @ViewChild('produitModal', { static: false })
  public produitModal;

  @ViewChild("deleteModal", { static: false })
  public deleteModal;

  listproduit: any[];
  listproduit2: any[];

  produite: produit;
  produit: produit = new produit();
  pt: number;
  verif: boolean;
  searchingverification: boolean;
  searchText;

  constructor(private router:Router,  private cokie:CookieService,private location:Location,

    private produitservice: ProduitsService,
    private notifierService: NotifierService,
  ) { }

  ngOnInit(): void {
    this.produite = new produit();
    this.produitservice.getall().subscribe(data => {
      this.listproduit = data;
    })
  }


  showDeleteModal(produit: any): any {
    this.produite = Object.assign({}, produit);
    this.deleteModal.show();
  }
  showAddModal() {
    if (this.produite.id != null) {
      this.verif = false;

    }
    else {

      this.verif = true;
    }
    this.reset();
    this.produitModal.show();
  }

  createproduit() {
    console.log(this.produite)
    this.produitservice.saveressource(this.produite).toPromise().then((data: produit) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "produit ajouté avec succés !")
      }
    })
    this.produitModal.hide();
  }

  showEditModal(produit: any) {
    this.produite = Object.assign({}, produit);
  
    if (this.produite.id != null) {
      this.verif = false;
    }
    else {
      this.verif = true;
    }
    this.produitModal.show();

  }
  

  updateproduit() {
    this.produitservice.editressource(this.produite).toPromise().then((data: produit) => {
      this.ngOnInit();
      if (data != null) {
        this.notifierService.notify("success", "produit  modifié avec succés !")
      }
    })
    this.produitModal.hide();
  }

public retoure(){

this.location.back();

}
saveproduit() {
    let error = false;

    if (!error) {
      if (this.produite.id != null)
        this.updateproduit();
      else this.createproduit();
    }
  }
  delete() {
    this.produitservice.deleteressource(this.produite).toPromise().then((data) => {
      this.ngOnInit();
      this.notifierService.notify("success", "produit Supprimer avec succés !")

    })
    this.deleteModal.hide();
  }
  reset() {
    this.produite = new produit();
  }
  
  
}
