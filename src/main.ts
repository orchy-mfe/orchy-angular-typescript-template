import '@angular/compiler';
import { NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MicroFrontendProperties } from '@orchy-mfe/models';
import OrchyMicroFrontend from '@orchy-mfe/spa-adapter';
import 'zone.js';

import { AppModule } from './app/app.module';
import { MicroFrontendPropertiesProvider } from './providers/micro-frontend-properties-provider';

export class AngularMfe extends OrchyMicroFrontend {
  private app?: NgModuleRef<AppModule>

  async mount(microFrontendProperties?: MicroFrontendProperties): Promise<void> {
    this.app = await platformBrowserDynamic(
      [{ provide: MicroFrontendPropertiesProvider, useValue: microFrontendProperties}]
    ).bootstrapModule(AppModule)
  }

  async unmount(): Promise<void> {
    this.app?.destroy()
  }
}

customElements.define('angular-mfe', AngularMfe)
