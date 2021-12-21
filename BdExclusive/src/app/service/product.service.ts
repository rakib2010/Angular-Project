import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../backend/dashboard/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  



  constructor(private http: HttpClient) { }
 
  saveProduct(data: any, file: any) {
    const formData: FormData = new FormData();
    formData.append('productName', data.productName);
    formData.append('quantity', data.quantity);
    formData.append('price', data.price);
    formData.append('remarks', data.remarks);
    formData.append('file', file);

    return this.http.post('http://localhost:8080/product/save2', formData);

  }

  getAll() {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/product/getAll', { headers: header });

  }

  


  
}