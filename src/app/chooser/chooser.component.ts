import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  @ViewChild('files') files!: ElementRef;
  @ViewChild('button') button!: MatButton;
  @ViewChild('list') list!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeFiles(event: Event): void {
    if (this.files.nativeElement.files.length) {
      this.list.nativeElement.innerHTML = "";
      const list = document.createElement("ul");
      this.list.nativeElement.appendChild(list);
      for (let i = 0; i < this.files.nativeElement.files.length; i++) {
        const li = document.createElement("li");
        list.appendChild(li);

        const img = document.createElement("img");
        img.src = URL.createObjectURL(this.files.nativeElement.files[i]);
        img.height = 60;
        img.onload = function (event: Event) {
          URL.revokeObjectURL((this as HTMLImageElement).src);
        }
        li.appendChild(img);
        const info = document.createElement("span");
        info.innerHTML = this.files.nativeElement.files[i].name + ": " + this.files.nativeElement.files[i].size + " bytes";
        li.appendChild(info);
      }
    }
  }

  onClickButton(event: Event): void {
    if (this.files) {
      this.files.nativeElement.click();
    }
  }

}
