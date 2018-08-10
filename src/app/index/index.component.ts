import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private tags = ['Html5', 'Javascript', 'CSS', 'Php', 'Ajax', 'Shell Script',
                  'Python', 'jQuery', 'MySQL', 'Sqlite', 'PostgreSQL', 'JSON',
                  'Xml', 'Angular',
    ];

  constructor() {
  }

  ngOnInit() {
    // Mezclar contenido del array
    this.tags = this.tags.sort(function() {
      return Math.random() - 0.5
    });
  }

  getTags() {
    return this.tags;
  }
}
