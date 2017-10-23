import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {contacts} from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService{
  constructor(private http:Http){}

getContacts(){
  return this.http.get('http://localhost:3000/app/contact').map(res=>res.json());
}


addContacts(newContact){
  var head= new Headers();
  head.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/app/contact',newContact,{headers:head}).map(res=>res.json());
}

deleteContact(id){
  return this.http.delete('http://localhost:3000/app/contact/'+id).map(res=>res.json());
}



}
