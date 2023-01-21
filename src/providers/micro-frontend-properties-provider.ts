import { MicroFrontendProperties } from '@orchy-mfe/models';
import { ReplaySubject } from 'rxjs';

export class MicroFrontendPropertiesProvider implements MicroFrontendProperties {
  basePath: string = '/';
  eventBus = new ReplaySubject<unknown>();
  [x: string]: unknown;

  private constructor() {}
}
