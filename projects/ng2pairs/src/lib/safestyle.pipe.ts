import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeCSS', standalone: false})
export class SafeStylePipe implements PipeTransform {

    constructor(public sanitizer: DomSanitizer){}

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}