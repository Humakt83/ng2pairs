import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExampleModule } from './example.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ExampleModule);