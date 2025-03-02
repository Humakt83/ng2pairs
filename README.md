# ng2pairs
Angular 2 module for pairs game

View live example here: https://humakt83.github.io/ng2pairs/example/

### Installation

Run `npm install --save ng2pairs`

### Usage

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

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
