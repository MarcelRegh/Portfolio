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
  }

  showAngular() {
    this.angular = true;
    this.javaScript = false;
  }

  showJavaScript() {
    this.angular = false;
    this.javaScript = true;
  }
}
