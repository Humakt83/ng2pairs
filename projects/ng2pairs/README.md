# Ng2pairs

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Usage

To use this module in your @angular application simply import the module

```
import { PairsModule } from 'ng2pairs';

@NgModule({
    declarations: [],
    imports: [PairsModule.forRoot()],
})
export class ExampleModule {}
```
If you want to use custom pictures then utilize PairsService as follows:

```
import { Component, OnInit } from '@angular/core';
import { PairsService } from 'ng2pairs';

@Component({
...
})
export class MyComponent implements OnInit {

    constructor(private pairsService: PairsService) {        
    }

    ngOnInit() {
        this.pairsService.setImages(['path-to-image1/image1.png', 'path-to-image2/image2.png']);
    }
}
```

`
Above can be applied for custom cssClasses for pairs, just call `this.pairsService.setCssClasses(['classRed', 'classBlue'])`

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build ng2pairs
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/ng2pairs
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
