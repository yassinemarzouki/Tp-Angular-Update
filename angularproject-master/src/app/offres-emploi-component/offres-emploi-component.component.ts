import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listEmploi!:Emploi[];
  ref!:string;
  listEmploi1!:Emploi[];

  constructor() { }

  ngOnInit(): void {
    this.result="";
    this.listEmploi=[
      {reference:"1",titre:"f1",entreprise:"esprit1",etat:false},
      {reference:"2",titre:"f2",entreprise:"esprit2",etat:true},
      {reference:"3",titre:"f3",entreprise:"esprit3",etat:false},
    ]
  
  this.listEmploi1=[
    {reference:"1",titre:"f1",entreprise:"esprit1",etat:false},
    {reference:"2",titre:"f2",entreprise:"esprit2",etat:true},
    {reference:"3",titre:"f3",entreprise:"esprit3",etat:false},
  ]
}
  result!:string;
  calculate(){
    let a = 0;
    for(let e of this.listEmploi){
      if (e.etat==true)
      a++
    }
     this.result=a.toString();
  }
  searchEntr(){
    this.listEmploi = this.listEmploi1.filter((em)=>em.entreprise.includes(this.ref))

  }

}
