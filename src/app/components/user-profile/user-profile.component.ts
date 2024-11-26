import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  userDetails:any;

  constructor(private userservice: UserServiceService) { }
  ngOnInit(): void {
    this.userservice.setUserId();
    setTimeout(()=>{
      this.userDetails = this.userservice.getdata();
    },1000)

 }

}
