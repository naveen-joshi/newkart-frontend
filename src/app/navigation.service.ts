import { Injectable } from '@angular/core';
import {
  Router,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  RoutesRecognized,
  RouterEvent,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _lastNavigationStartUrl = '';

  constructor(private readonly _router: Router) { }

  public startMonitoringNavigationChange(): void {
    this._router.events.subscribe((event) => {
      let url = '';

      if (event instanceof RouterEvent) {
        url = event.url;
      }

      if (event instanceof NavigationStart) {
        console.log('NavigationStart');
        this.saveUrl(url);
      }
    });
  }

  public getLastNavigationStartUrl(): string {
    return this._lastNavigationStartUrl;
  }

  private saveUrl(url: string): void {
    if (url.includes('login')) {
      return;
    }

    this._lastNavigationStartUrl = url;
    console.log(url);
  }
}
