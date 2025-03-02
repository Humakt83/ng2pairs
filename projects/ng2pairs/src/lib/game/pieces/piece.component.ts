import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ImagePiece, Piece } from './piece';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'piece',
    template: `
              <div *ngIf="!piece || !piece.turned" class="piece piece--default" ></div>
              <div class="piece" *ngIf="piece && piece.turned" [innerHtml]="displayHtml"></div>
    `,
    styles: [`
      .piece--default {
        background: linear-gradient(to top, black, gray, black);
      }

      .piece {
        width: 100%;
        height: 100%;
      }
    `],
    standalone: false,
    encapsulation: ViewEncapsulation.None,
})
export class PieceComponent implements OnInit {

    @Input("piece") piece!: Piece;
    displayHtml: SafeHtml = '';

    constructor(private sanitized: DomSanitizer) {
    }

    ngOnInit() {
      this.displayHtml = this.sanitized.bypassSecurityTrustHtml(this.piece ? this.piece.display : '');
    }

}

