import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.page.html',
  styleUrls: ['./start-panel.page.scss'],
})
export class StartPanelPage implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit() {
  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }
}
