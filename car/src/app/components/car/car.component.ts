import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  cars: Car[];
  carImages:CarImage[];
  cuurentCars: Car;
  dataLoaded = false;
  filterText: string = "";
  constructor(private carService: CarService, private activatedRoutes: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      }

      else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"])
      }
      else if(params["carImageId"]) {
        this.getCarsByImageId(params["carImageId"]);
      }
      else{
        this.getCars();
      }
    })
  }
  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrandId(brandId: number) {
    this.dataLoaded = true;
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;

    })
  }

  getCarsByColorId(colorId: number) {
    this.dataLoaded = true;
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;

    })
  }


  getCarsByImageId(carImage: CarImage) {
    this.dataLoaded = true;
    this.carService.getCarsDetail(carImage.id).subscribe(response => {
      this.carImages = response.data;
    })
  }
  setCurrentCar(car: Car) {
    this.cuurentCars = car;
  }

  getCurrentCar(car: Car) {
    if (this.cuurentCars == car) {
      return "list-group-item active"
    }

    else {
      return "list-group-item"
    }
  }


}
