import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { persistState } from '@datorama/akita';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 表示モード session storage
export const displayModePersistStorage = persistState({
  include: ['display-mode'],
  storage: sessionStorage,
  key: 'displayModeStore',
});

// 初回表示制御 local storage
export const introDisplayPersistStorage = persistState({
  include: ['intro-display'],
  key: 'introDisplayStore',
});

// Playing管理 local storage
export const playingManagerPersistStorage = persistState({
  include: ['playing-manager'],
  key: 'playingManagerStore',
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
  {
    provide: 'persistStorage',
    useValue: playingManagerPersistStorage,
    multi: true,
  },
];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
