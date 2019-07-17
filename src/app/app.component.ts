import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  productList = [];
  productTmp = {
    id: 0,
    name: '',
    image: '',
    price: '',
    star: 0
  } ;
  idMax = 0 ;
  currentId = 0 ;
  addProduct = () => {
    let idArr = this.productList.map(item => item.id) ;
    if (this.productList[0] == null) {
      this.idMax = 0;
    }else this.idMax = Math.max(...idArr) ;

    let product = {
      id: this.idMax +1 ,
      name: this.productTmp.name ,
      image: this.productTmp.image ,
      price: this.productTmp.price ,
      star: this.productTmp.star
    }
    this.productList.push(product) ;
  }
  save = () => {
    if (this.productTmp.id == 0) {
      this.addProduct();
    } else {
      const product = {...this.productTmp} ;
      let index = this.productList.map(product => product.id).findIndex(elem => elem == this.productTmp.id);
      this.productList[index] = {...this.productTmp} ;
    }
  }
  update = (product) => {
    this.productTmp = {...product} ;
  }
  remove = (id) => {
    this.productList = this.productList.filter(item => item.id !== id) ;
    this.productTmp = {
      id: 0,
      name: '',
      image: '',
      price: '',
      star: 0
    }
  }
  clear = () => {
    this.productTmp = {
      id: 0,
      name: '',
      image: '',
      price: '',
      star: 0
    }
  }

}
