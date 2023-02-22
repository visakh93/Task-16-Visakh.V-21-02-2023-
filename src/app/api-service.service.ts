import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient) { }
apiArray :any=[];
getArray:any=[];
 min:number=0;
 count=0;
  getAll(min:number,max:number,url:string){
   this.getArray=[];
    this.http.get(url).subscribe((res)=>{
    this.apiArray=res;
   
    console.log(min," after  / ",max);
    console.log('  getArray 1',this.getArray)
    
    if(min < this.apiArray.length){
      this.getArray.splice(0,this.getArray.length)
      if(max > this.apiArray.length){
      
         max=this.apiArray.length;
         this.count=this.apiArray.length-min;
         min= this.apiArray.length- this.count;
        console.log(min," after  / ",max);
      }
      console.log('  getArray 2 ',this.getArray)
      
    for (let index = min; index < max; index++) {
     this.getArray.push(this.apiArray[index]);
      
    }
   
   
    }
   
    })
    console.log('  getArray 3',this.getArray)
    return this.getArray;
  
  }

}
