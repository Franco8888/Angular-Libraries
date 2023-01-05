import { Component } from '@angular/core';

@Component({
  selector: 'web-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    buttonPressed = false;

    myFunc() {
        this.buttonPressed = !this.buttonPressed;
    }
}
