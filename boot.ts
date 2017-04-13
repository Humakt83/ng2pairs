import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PairsModule } from './src/pairs.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(PairsModule);