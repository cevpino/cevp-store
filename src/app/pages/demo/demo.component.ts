import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'cevp-store';

  items = ['Carlos', 'Jose', 'Miguel'];

  constructor() { }

  ngOnInit(): void {
    // code
  }

  addItem(): void {
    this.items.push('Nuevo item');
  }

  deleteItem(index: number): void  {
    this.items.splice(index, 1);
  }
}
