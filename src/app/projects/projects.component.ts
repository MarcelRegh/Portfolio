import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  angular: boolean = true;
  javaScript: boolean = true;
  constructor() { }

  ngOnInit(): void { }

  showAll() {
    this.angular = true;
    this.javaScript = true;
    document.getElementById('all').classList.add('focus');
    document.getElementById('angular').classList.remove('focus');
    document.getElementById('javaScript').classList.remove('focus');
  }

  showAngular() {
    this.angular = true;
    this.javaScript = false;
    document.getElementById('all').classList.remove('focus');
    document.getElementById('angular').classList.add('focus');
    document.getElementById('javaScript').classList.remove('focus');
  }

  showJavaScript() {
    this.angular = false;
    this.javaScript = true;
    document.getElementById('all').classList.remove('focus');
    document.getElementById('angular').classList.remove('focus');
    document.getElementById('javaScript').classList.add('focus');
  }
}
