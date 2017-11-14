import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Angular';
  fruits = ['Apple', 'Banana', 'Orange']
  cars = [
    { brand: 'Toyota', model: 'Revo' },
    { brand: 'Honda', model: 'Civic' }
  ]

  showTitle() {
    alert(this.title);
  }

  showKey(event: any) {
    if (event.keyCode === 13) {
      alert(this.title)
    }
  }
}
