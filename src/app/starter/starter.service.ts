import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarterService {

  constructor(private http: HttpClient) { }
  header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json', 
      'Authorization': `Bearer 2100|KxWgW8YYpLqC3257XQ7RUjGIRPEzksN9VAAiMc8T`})
    }

    addProduct(data: any): Observable<any>{
      return this.http.post<any>(environment.API_URL + `api/products`, data, this.header);
    }
  
    getProducts(): Observable<any>{
      return this.http.get(environment.API_URL + `api/products`, this.header);
    }
  
    getProduct(id: number): Observable<any>{
      return this.http.get(environment.API_URL + `api/products/${id}`, this.header);
    }
  
    deleteProduct(id: number){
      return this.http.delete(environment.API_URL + `api/products/${id}`, this.header)
    }
  
    updateProduct(data: any, id: number): Observable<any>{
      return this.http.put(environment.API_URL + `api/products/${id}`, data, this.header)
    }

}
