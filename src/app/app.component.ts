import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'images-chooser';

  @ViewChild('list') list!: ElementRef;

  // filelist: FileList | undefined;
  filelist: Array<File>;

  constructor() {
    this.filelist = [];
  }

  onChange(event: FileList): void {
    console.log(event);
    // this.filelist = Array.from(event);
    for (let index = 0; index < event.length; index++) {
      const file = event.item(index);
      if (file) {
        this.filelist.push(file);
      }
    }
    if (event.length) {
      // this.list.nativeElement.innerHTML = "";
      // const list = document.createElement("ul");
      // this.list.nativeElement.appendChild(list);
      // for (let i = 0; i < event.length; i++) {
      //   const li = document.createElement("li");
      //   list.appendChild(li);
      //   const img = document.createElement("img");
      //   img.src = URL.createObjectURL(event[i]);
      //   img.height = 60;
      //   img.onload = function (event: Event) {
      //     URL.revokeObjectURL((event.target as HTMLImageElement).src);
      //   }
      //   li.appendChild(img);
      //   const info = document.createElement("span");
      //   info.innerHTML = event[i].name + ": " + event[i].size + " bytes";
      //   li.appendChild(info);
      // }
    }
  }

}
