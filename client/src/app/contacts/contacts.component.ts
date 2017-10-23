import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {contacts} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: contacts[];
  contact :contacts;
  first_name:String;
  last_name:String;
  phonenumber:String;

  constructor(private contactservice : ContactService) { }

  ngOnInit() {
  this.contactservice.getContacts().subscribe(contacts=>this.contacts=contacts);
  }
addContacts(){
  const newc={first_name:this.first_name,last_name:this.last_name,phonenumber:this.phonenumber};
  this.contactservice.addContacts(newc).subscribe(contact=>{
  this.contactservice.getContacts().subscribe(contacts=>this.contacts=contacts);
    this.contacts.push(contact);

  });
}
  deleteContact(id:any){
    var contacts=this.contacts;
    this.contactservice.deleteContact(id).subscribe(data=>{
      if(data.n==1){
        for (var i=0;i<contacts.length;i++){
          if(contacts[i]._id==id){
            contacts.splice(i,1);
          }
        }
      }
    });
  }

}
