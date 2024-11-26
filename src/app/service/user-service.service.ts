import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userDetails:any  = [
    { username: 'Sarfaroj', email: 'sarfaroj95@gmail.com', password: '1234', userRole: 'admin'},
    { username: 'john_doe', email: 'john.doe@example.com', userRole: 'admin', password: '1234', },
    { username: 'jane_smith', email: 'jane.smith@example.com', userRole: 'user', password: '1234', },
    { username: 'mike_ross', email: 'mike.ross@example.com', userRole: 'support', password: '1234', },
    { username: 'natasha_romanoff', email: 'natasha.romanoff@example.com', userRole: 'support', password: '1234', },
    { username: 'bruce_wayne', email: 'bruce.wayne@example.com', userRole: 'user', password: '1234', }
  ]
  userProfile:any;
  private currentUserRole: any;
  constructor() {}

   loginService(payload:any){
    for (const user of this.userDetails) {
      if (user.email === payload.email && user.password === payload.password) {
        this.userProfile = user;
          return user; // Return the matching user object
      }
  }
  return null;
}

setUserId(){
    this.currentUserRole = localStorage.getItem('userRole');
}


registerservice(payload:any){
  this.userDetails.push(payload);
}


getdata(){
  return this.userProfile;
}


getUserRole(): string {
  return this.currentUserRole;
}

 hasRole(role: string): boolean {
  return this.currentUserRole === role;
}

hasAnyRole(roles: string[]): boolean {
  return roles.includes(this.currentUserRole);
}



}
