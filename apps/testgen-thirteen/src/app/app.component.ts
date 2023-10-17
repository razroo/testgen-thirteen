import { Component } from '@angular/core';

@Component({
  selector: 'testgen-thirteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-thirteen';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
