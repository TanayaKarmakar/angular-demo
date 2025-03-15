import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private routeConfigToken: RouteConfig) {
    console.log('ConfigService initialized');
    console.log(this.routeConfigToken);
  }
}
