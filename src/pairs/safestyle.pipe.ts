import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeCSS'})
export class SafeStylePipe {

    constructor(public sanitizer: DomSanitizer){}

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}