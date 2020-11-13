import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

titre:string="1.Opérations sur un tableau";
titre1:string="2.Affichage des boutons des éléments pairs du tableau";
tab=[15,46,0,89,80];


onPosition (i:number, j:number)
{ 
console.log("position "+i+ " nb element "+j);


}

  constructor() { }

  ngOnInit(): void {
  }

}
