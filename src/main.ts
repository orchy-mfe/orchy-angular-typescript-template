import 'zone.js/dist/zone';
import { NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import OrchyMicroFrontend from '@orchy-mfe/spa-adapter';
import {MicroFrontendProperties} from '@orchy-mfe/models';

import { AppModule } from './app/app.module';
import { OrchyPropertiesService } from './app/orchy-properties';

export class AngularMfe extends OrchyMicroFrontend {
  private app?: NgModuleRef<AppModule>

  async mount(orchyProperties?: MicroFrontendProperties): Promise<void> {
    OrchyPropertiesService.microfrontendProperties = orchyProperties
    this.app = await platformBrowserDynamic().bootstrapModule(AppModule)
  }

  async unmount(): Promise<void> {
    this.app?.destroy()
  }
}

customElements.define('angular-mfe', AngularMfe)
