import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { persistState } from '@datorama/akita';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export const displayModePersistStorage = persistState({
  include: ['display-mode'],
  storage: sessionStorage,
  key: 'displayModeStore',
});

export const introDisplayPersistStorage = persistState({
  include: ['intro-display'],
  key: 'introDisplayStore',
});

const providers = [
  {
    provide: 'persistStorage',
    useValue: displayModePersistStorage,
    multi: true,
  },
  {
    provide: 'persistStorage',
    useValue: introDisplayPersistStorage,
    multi: true,
  },
];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
