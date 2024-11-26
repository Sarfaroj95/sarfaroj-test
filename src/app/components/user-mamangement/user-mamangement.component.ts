import { Component } from '@angular/core';
import { TableDataComponent } from './table-data/table-data.component';

@Component({
  selector: 'app-user-mamangement',
  standalone: true,
  imports: [TableDataComponent],
  templateUrl: './user-mamangement.component.html',
  styleUrl: './user-mamangement.component.scss'
})
export class UserMamangementComponent {

}
