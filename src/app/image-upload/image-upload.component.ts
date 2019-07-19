import { Component, OnInit } from '@angular/core';
import {ImageService} from "./service/ImageService";

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init' ;
  constructor(public src:string,public file:File) {}
}
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {


  ngOnInit() {
  }

  private onSuccess() {
    this.selectedFile.pending = false ;
    this.selectedFile.status = 'oke';
  }

  private onError() {
    this.selectedFile.pending=false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src='';
  }

  selectedFile: ImageSnippet ;
  constructor(private imageService: ImageService){}

  processFile(imageInput:any) {
    const file:File = imageInput.files[0];
    const reader = new FileReader() ;

    reader.addEventListener('load', (event:any) => {
      this.selectedFile = new ImageSnippet(event.target.value,file);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
            this.onSuccess();
        },
        (err) => {
            this.onError();
        }
      )
    })
    reader.readAsDataURL(file);
}

}
