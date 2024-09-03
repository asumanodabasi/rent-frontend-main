import { Component,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {

  filterText: string = '';

  // Arama terimini car bileşenine iletmek için EventEmitter kullanıyoruz
  @Output() filterTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    // Arama butonuna basıldığında veya input değiştiğinde filterTextChanged olayını tetikleyin
    this.filterTextChanged.emit(this.filterText);
  }
 



}
