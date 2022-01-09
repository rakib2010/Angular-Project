import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';




@Component({
  selector: 'app-navbar',
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productCount: any = [];
  
  
  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {

    let strItems = this.storage.getItem('fav_items');
    if(strItems != null){
      this.productCount = JSON.parse(strItems);
    }
   

    
    
  }

}
