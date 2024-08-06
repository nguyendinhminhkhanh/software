import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'software_thanhdatpc';
  rfContact: any;
  success: any;
  error: any;
  login =  true;
  infor = {
    username: "admin",
    password: "123456789",
  }
  constructor(private fb: FormBuilder, private router: Router){};
  ngOnInit():void{
    this.rfContact = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  onClick(){
    this.success = false;
    this.error = false;
    if(this.rfContact.value.username == this.infor.username && this.rfContact.value.password == this.infor.password){
      this.router.navigateByUrl('/software');
      this.success = true;
      this.login = false;
      console.log("Dang nhap thanh cong");
    }else{
      this.error = true;
      console.log("Thong tin dang nhap khong chinh xac");
    }
  }
}
