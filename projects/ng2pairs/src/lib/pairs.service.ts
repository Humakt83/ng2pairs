import { Injectable } from '@angular/core';
import { Piece, ImagePiece, CssClassPiece, ColorPiece } from './game/pieces/piece';

const COLOR_PREFIX: string = 'rgb';
const COLORS: string[] = ['(0,0,0)', '(50, 50, 50)', '(100, 100, 100)', '(150, 150, 150)', '(200, 200, 200)', '(250, 250, 250)',
                        '(0, 50, 50)', '(0, 100, 100)', '(0, 150, 150)', '(0, 200, 200)', '(0, 250, 250)',
                        '(50, 50, 0)', '(100, 100, 0)', '(150, 150, 0)', '(200, 200, 0)', '(250, 250, 0)',
                        '(50, 0, 50)', '(100, 0, 100)', '(150, 0, 150)', '(200, 0, 200)', '(250, 0, 250)',
                        '(0, 0, 50)', '(0, 0, 100)', '(0, 0, 150)', '(0, 0, 200)', '(0, 0, 250)',
                        '(0, 50, 0)', '(0, 100, 0)', '(0, 150, 0)', '(0, 200, 0)', '(0, 250, 0)',
                        '(50, 0, 0)', '(100, 0, 0)', '(150, 0, 0)', '(200, 0, 0)', '(250, 0, 0)']

@Injectable()
export class PairsService {

    private pairImages: string[] = [];
    private cssClasses: string[] = [];

    setImages(images: string[]) {
        this.pairImages = images;
    }

    setCssClasses(classes: string[]) {
        this.cssClasses = classes;
    }

    generatePieces(piecesAmount: number): Piece[] {
        let pieces: Piece[] = this.generateImagePieces(piecesAmount);
        let amountLeft = pieces.length > 0 ? piecesAmount - (pieces.length / 2) : piecesAmount;
        pieces = pieces.concat(this.generateCssClassPieces(amountLeft));
        amountLeft = pieces.length > 0 ? piecesAmount - (pieces.length / 2) : piecesAmount;
        pieces = pieces.concat(this.generateColorPieces(amountLeft));
        return this.shufflePieces(pieces);
    }

    private generateImagePieces(piecesAmount: number): Piece[] {
        let pieces: Piece[] = [];
        for (let i = 0; i < piecesAmount && this.pairImages.length > i; i++) {
            let piece = new ImagePiece(this.pairImages[i]);
            let pair = new ImagePiece(this.pairImages[i], piece);
            pieces.push(piece);
            pieces.push(pair);
        }
        return pieces;
    }

    private generateCssClassPieces(amountLeft: number): Piece[] {
        let pieces: Piece[] = [];
        for (let i = 0; i < amountLeft && this.cssClasses.length > i; i++) {
            let piece = new CssClassPiece(this.cssClasses[i]);
            let pair = new CssClassPiece(this.cssClasses[i], piece);
            pieces.push(piece);
            pieces.push(pair);
        }
        return pieces;
    }

    private generateColorPieces(amountLeft: number): Piece[] {
        let pieces: ColorPiece[] = [];
        for (let i = 0; i < amountLeft; i++) {
            let piece: ColorPiece;
            do {                
                piece = new ColorPiece(this.generateColor(), this.generateColor());                
            } while (pieces.filter(p => p.color1 === piece.color1 && p.color2 === piece.color2).length > 0);
            let pair = new ColorPiece(piece.color1, piece.color2, piece);
            pieces.push(piece);
            pieces.push(pair);
        }
        return pieces;
    }

    private generateColor(): string {
        return COLOR_PREFIX + COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    private shufflePieces(array: Piece[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

}
