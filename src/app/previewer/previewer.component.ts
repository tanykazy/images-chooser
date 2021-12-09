import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css']
})
export class PreviewerComponent implements OnInit {

  // @Input() filelist: FileList | undefined;
  @Input() filelist: Array<File>;

  constructor() {
    this.filelist = [];
  }

  ngOnInit(): void {
  }

  createObjectURL(object: File | Blob | MediaSource): String {
    return URL.createObjectURL(object);
  }

}