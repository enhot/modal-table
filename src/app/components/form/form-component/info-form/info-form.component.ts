import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInform } from '../../../radio-btn';

@Component({
  selector: 'app-info-form',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './info-form.component.html',
  styleUrl: './info-form.component.scss',
})
export class InfoFormComponent {
  @Input() myFormData: FormInform[] = [];
  isOpen: boolean = false;
  @Output() closeTableEvent = new EventEmitter<void>();

  @ViewChild('table') table!: ElementRef;
  constructor() {}

  closeTable(): void {
    this.closeTableEvent.emit();
  }

  deletItem(id: number) {
    this.myFormData.splice(id, 1);
  }
}
