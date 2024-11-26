import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { ManuServiceService } from '../service/manu-service.service';
import { Router, RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterModule,
    CommonModule,
    MatMenuModule
  ]
})
export class MainNavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  user:any;
  constructor(private menuservice: ManuServiceService, private router: Router, private userservice: UserServiceService) {
     this.menuItems = this.menuservice.getMenuItems();
      console.log(this.menuItems)
  }

  menuItems:any= [];
  public isCollapsed: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


     ngOnInit(): void {
      setTimeout(()=>{
        const data = this.userservice.getdata();
        this.user  = data?.username.charAt(0) ?? 'N';
      },1000)

     }

     toggleMenu(): void {
       this.isCollapsed = !this.isCollapsed;
     }

     logOut(){
      this.router.navigate(['/login']);
      localStorage.clear();
     }
}
