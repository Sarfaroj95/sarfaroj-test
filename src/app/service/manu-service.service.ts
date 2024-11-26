import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ManuServiceService {
  constructor(private userService: UserServiceService) {}
  // Full menu structure with roles assigned to each item
  private menuItems = [
    {
      label: 'Management',
      route: '/dashboard/user-management',
      icon: 'fa fa-id-card-o',
      roles: ['admin']
    },
    {
      label: 'Document',
      route: '/dashboard/document-upload',
      icon: 'fa fa-cloud-upload',
      roles: ['support', 'admin'],
    },
    {
      label: 'Ingestion',
      icon: 'fa fa-cogs',
      route: '/dashboard/ingestion-management',
      roles: ['admin', 'support', 'user']
    },
    {
      label:'QA Interface',
      route: '/dashboard/qa-interface',
      icon: 'fa fa-ravelry',
      roles: ['user', 'support', 'admin'],
    }
  ];

  getMenuItems() {
    const userRole = this.userService.getUserRole();
    return this.menuItems.filter(item => item.roles.includes(userRole));
  }

}


