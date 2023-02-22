import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor( private apiCall :ApiServiceService){}
 
  min:number=0;
  count:number=10;
  max:number=this.count;
  dataList:any=[];
  url='https://jsonplaceholder.typicode.com/users'

ngOnInit(){
  console.log(this.dataList,'data');
  this.dataList= this.apiCall.getAll(this.min,this.max ,this.url);

}

}
