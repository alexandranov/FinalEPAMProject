import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


    private _url: string[] = ["image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.jpg", "image/5.jpg"];
    private _idmain = 0;
    private _idfirst = 1;
    private _idsecond = 2;
    private _idthird = 3;


    private nextPicture() {
        if (this._idmain === (this._url.length - 1) ){
            this._idmain = -1;           
        }
         if (this._idfirst === (this._url.length - 1) ){
            this._idfirst = -1;           
        }
         if (this._idsecond === (this._url.length - 1) ){
            this._idsecond = -1;           
        }
         if (this._idthird === (this._url.length - 1) ){
            this._idthird = -1;           
        }

        this._idmain++;
        this._idfirst++;
        this._idsecond++;
        this._idthird++;
    }

    private prevPicture() {
        if (this._idmain === 0 ) {
            this._idmain = this._url.length;           
        }
         if (this._idfirst === 0 ) {
            this._idfirst = this._url.length;           
        }
         if (this._idsecond === 0 ) {
            this._idsecond = this._url.length;           
        }
         if (this._idthird === 0 ) {
            this._idthird = this._url.length;           
        }
        this._idmain--;
        this._idfirst--;
        this._idsecond--;
        this._idthird--;
    }
    private getCurrentPictureLinkMain() {
        return this._url[this._idmain];
    }
     private getCurrentPictureLinkFirst() {
        return this._url[this._idfirst];
    }
     private getCurrentPictureLinkSecond() {
        return this._url[this._idsecond];
    }
     private getCurrentPictureLinkThird() {
        return this._url[this._idthird];
    }

    constructor() {

    }

    ngOnInit() {
    }

}
