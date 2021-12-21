import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  productDetails = [
    {
      id:1,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 2790 TK",
      img:"../../../assets/image/j1.jpg"
    },
    {
      id:2,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice: "BDT. 4500 TK",
      img:"../../../assets/image/j2.jpg"
    },
    {
      id:3,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 2400 TK",
      img:"../../../assets/image/j3.jpg"
    },
    {
      id:4,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 1450 TK",
      img:"../../../assets/image/j4.jpg"
    },
    {
      id:5,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 5600 TK",
      img:"../../../assets/image/j5.jpg"
    },
    {
      id:6,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 1100 TK",
      img:"../../../assets/image/j6.jpg"
    },

    {
      id:7,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 4800 TK",
      img:"../../../assets/image/j7.jpg"
    },

    {
      id:8,
      productName:"Winter Jacket for Man",
      productDetails:"Men's Fashion - Stylish Full Sleeve Casual Winter Jacket For Men",
      productPrice:"BDT. 8200 TK",
      img:"../../../assets/image/j8.jpg"
    }
  ]
}
