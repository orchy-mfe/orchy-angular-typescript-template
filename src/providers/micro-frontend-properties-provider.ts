import { Injectable } from "@angular/core";
import {MicroFrontendProperties} from '@orchy-mfe/models';
import {ReplaySubject} from 'rxjs'

@Injectable({providedIn: 'root'})
export class MicroFrontendPropertiesProvider implements MicroFrontendProperties {
  basePath: string = '/';
  eventBus = new ReplaySubject<unknown>();
  [x: string]: unknown;

  private constructor() {}
}
