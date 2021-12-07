import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  @ViewChild('input') input!: ElementRef;
  @ViewChild('button') button!: MatButton;

  @Input() text: string;

  @Input() accept: string | undefined;
  @Input() capture: 'user' | 'environment' | undefined;
  @Input() files: FileList | undefined;
  @Input() multiple: boolean | undefined;

  @Output() change = new EventEmitter<FileList>();

  constructor() {
    this.text = 'Choose';
  }

  ngOnInit(): void {
  }

  onChangeFiles(event: Event): void {
    this.change.emit(this.input.nativeElement.files);
  }

  onClickButton(event: Event): void {
    if (this.input) {
      this.input.nativeElement.click();
    }
  }

}
