import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = 'E-Ticaret';
   currentBrand:string;
  currentColor:string;
  // getChildData(data:string){
  //   this.currentBrand = data;
  //   this.currentColor=data;
  // }
}
