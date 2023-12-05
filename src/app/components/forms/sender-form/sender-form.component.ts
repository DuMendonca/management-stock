import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderService } from '../../../services/sender/sender.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [SenderService],
  templateUrl: './sender-form.component.html',
  styleUrl: './sender-form.component.css'
})
export class SenderFormComponent {
  sender: any = {};

  constructor(private senderService: SenderService) { }

  saveSender() {
    this.senderService.saveSender(this.sender).subscribe(
      () => {
        alert('Sender created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a sender', error);
      }
    );
  }

  resetForm() {
    this.sender = {};
  }
}
