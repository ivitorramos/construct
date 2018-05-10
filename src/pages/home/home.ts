import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { InstitucionalPage } from '../institucional/institucional';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openProdutos(){
    this.navCtrl.push(ProdutosPage);
  }
  openInstitucional(){
    this.navCtrl.push(InstitucionalPage);
  }
  openContato(){
    this.navCtrl.push(ContatoPage);
  }
}
