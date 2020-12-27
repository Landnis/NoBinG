import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }
  async getValues(form):Promise<void>{

    console.log("Hello "+form.value.name+" "+form.value.surname+" Ta sxolia sou einai: "+form.value.comment) 
  }
}
