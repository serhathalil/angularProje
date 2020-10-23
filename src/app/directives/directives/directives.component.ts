import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  title = false;
  name = "";
  username = "";
  cities = [{
    id: 1,
    name: "ankara",
    region: "içanadolu"
  },
  {
    id: 3,
    name: "kırşehir",
    region: "içanadolu"
  },
  {
    id: 6,
    name: "bursa",
    region: "marmara"
  },
  {
    id: 9,
    name: "izmir",
    region: "ege"
  }
  ];

  color="";
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = !this.title;
  }
}
