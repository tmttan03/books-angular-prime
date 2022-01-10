import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private state: StateService,
    private nav: NavigationService,
  ) { }

  ngOnInit() {
  }

}
