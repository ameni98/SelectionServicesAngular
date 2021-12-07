import { Component } from '@angular/core';
import { Services } from 'src/Services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice2';
  services=Services;
  nbreEemeSelected=1;
  //selected=false;
  unselected=true;
  somme=300;
  select(service){
   if(service.selected==true)
   { service.selected=false;
    this.somme=this.somme-service.price;
    this.nbreEemeSelected--;

   }else{

      service.selected=true;
      this.nbreEemeSelected++;
    this.somme+=service.price;
   }

    console.log(this.somme);}
/*if(service.selected==false)
{
  this.selected=true;
  this.somme=this.somme+price;
}
else{
  this.selected=false;
  this.somme=this.somme-price;
}
console.log(this.somme);
    
  }*/
}
