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
        this.pairsService.setImages(['path-to-image1/image1.png', 'path-to-image2/image2.png']));
    }
}
```

`
