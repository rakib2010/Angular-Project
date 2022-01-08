import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-navbar',
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  constructor(private s :ProductService) { }

  ngOnInit(): void {
   

    
    
  }

}
