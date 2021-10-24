import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
OnInit {
  name = 'Pinkman';

constructor(
    private title: Title,
    private meta: Meta
) {}

ngOnInit() {
    this.title.setTitle('Pinkman');
    this.meta.updateTag({ name: 'description', content: 'Pinkman' });
}
}
