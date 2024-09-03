import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44356/api/cars/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"getAll"
   return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"getByBrand?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
    }

    getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"getByColor?colorId="+colorId
      return this.httpClient.get<ListResponseModel<Car>>(newPath);

    }

    //resme tiklayinca araba getirir.
    getCarsDetail(carImageId:number):Observable<ListResponseModel<CarImage>>{
      let newPath=this.apiUrl+"getDetail?carImageId="+carImageId;
      return this.httpClient.get<ListResponseModel<CarImage>> (newPath);
    }
}
