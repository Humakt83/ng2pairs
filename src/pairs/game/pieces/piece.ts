export abstract class Piece {

  turned: boolean = false;
  found: boolean = false;
  pair: Piece | undefined;
  display: string = '';
  
  constructor(pair: Piece | undefined = undefined) {
      if (pair) {
          this.pair = pair;
          pair.pair = this;
      }
  }

}

export class ImagePiece extends Piece {

  constructor(public image: string, pair: Piece | undefined = undefined) {
      super(pair);
      this.display = `<div>
                        <img [src]="${this.image}">
                      </div>`;
  }

}

export class CssClassPiece extends Piece {
  constructor(public cssClass: string, pair: Piece | undefined = undefined) {
      super(pair);
      this.display = `<div [class]="${this.cssClass}"></div>`;
  }
}

export class ColorPiece extends Piece {
  
  constructor(public color1: string, public color2: string, pair: Piece | undefined = undefined) {
      super(pair);
      this.display = `<div class="piece" style="background: linear-gradient(to left, ${this.color1}, ${this.color2});">
                      </div>`;
  }
}

