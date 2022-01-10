import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public headerTitle = 'Dashboard';
  public hasLoaded = false;
  public isLoading = false;

  constructor(
    private http: HttpClient,
  ) { }

  changeHeaderTitle(title) {
    this.headerTitle = title;
  }

}
