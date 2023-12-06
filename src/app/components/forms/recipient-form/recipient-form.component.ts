import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipientService } from '../../../services/recipient/recipient.service';
import { AddressService } from '../../../services/address/address.service';
import { AddressComponent } from '../../modal/address/address.component';

@Component({
  selector: 'app-recipient-form',
  standalone: true,
  imports: [CommonModule, FormsModule, AddressComponent],
  providers: [RecipientService, AddressService],
  templateUrl: './recipient-form.component.html',
  styleUrl: './recipient-form.component.css'
})
export class RecipientFormComponent {
  recipient: any = {};

  constructor(private recipientService: RecipientService){}

  saveRecipient() {
    this.recipientService.saveRecipient(this.recipient).subscribe(
      () => {
        alert('Recipient created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a recipient', error);
      }
    );
  }

  resetForm() {
    this.recipient = {};
  }
}
