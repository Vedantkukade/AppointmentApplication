import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http:HttpClient) { }


  private imageUrlSubject = new BehaviorSubject<string>('');
  imageUrl$ = this.imageUrlSubject.asObservable();

  setImageUrl(imageUrl: string) {
    this.imageUrlSubject.next(imageUrl);
  }





  id=new EventEmitter<any>()

  apiUrl="http://localhost:3000/docdata";

  postData(data:any){

    return this.http.post("http://localhost:3000/docdata/",data)


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };

    // const body = {
    //   variable1: data,
    //   variable2: img
    // };

    // return this.http.post<any>(`${this.apiUrl}/`, body, httpOptions);
  
  }


  getData(){

    return this.http.get("http://localhost:3000/docdata")
  }

  
  docid2:any;

  getId2(id:any){
    this.docid2=id
  }
  getById2(){

    return this.http.get(`http://localhost:3000/docdata/${this.docid2}`)
  }

  delete(data:any){

    return this.http.delete(`http://localhost:3000/docdata/${data}`)
  }

  update(data:any){
    return this.http.put('http://localhost:3000/docdata/'+data.id,data)
  }
}
