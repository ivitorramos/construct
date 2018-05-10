import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  public produtos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produtos=[
      {nome:"Cimento", preco:80},
      {nome:"Tinta", preco:70},
      {nome:"Rejunte", preco:35},
      {nome:"Rachina", preco:20},
      {nome:"Brita", preco:30},
      {nome:"Areia", preco:25},
      {nome:"Manta", preco:10},
      {nome:"Prego", preco:5},
      {nome:"Tubo galvanizado", preco:19}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

}
