import { Component ,signal} from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {

   role = signal< 'admin' | 'user' >('user');

  features = signal<string[]>([
    "Dashboard",
    "Profile",
    "Settings"
  ]);

  makeAdmin() {
    this.role.set('admin');
    this.features.set([
      "Dashboard",
      "Profile",
      "Settings",
      "Admin Panel",
      "User Management"
    ]);
  }

  makeUser() {
    this.role.set('user');
    this.features.set([
      "Dashboard",
      "Profile",
      "Settings"
    ]);
  }
}
