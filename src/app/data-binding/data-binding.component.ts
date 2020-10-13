import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
user={
  name:"serhat",
  surname:"aydın",
  job:"software",
  favorite_place:"bahcelievler",
  favorite_place_image:"https://www.gezi-yorum.net/wp-content/uploads/2019/10/bah%C3%A7elievler.1.jpg",
  isEditable:false
}
 

  constructor() { }

  ngOnInit(): void {
  }

}
