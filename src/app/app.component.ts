import { Component } from '@angular/core';
import { LoggerService } from 'projects/core/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-san';
  loading = true;

  constructor(private logger: LoggerService) {
    setTimeout(() => {
      this.loading = false;
    });
  }
}
