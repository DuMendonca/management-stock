import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { AddressService } from '../../../services/address/address.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  providers: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  modalTitle: string = 'New Address';
  modalOpen: boolean = false;
  address: any = {};

  constructor(private addressService: AddressService){}

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    if (this.address !== undefined)
    {
      this.modalOpen = false;
    } 
  }

  saveAddress() {
    this.addressService.saveAddress(this.address).subscribe(
      () => {
        alert('User created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a user', error);
      }
    );
  }

  resetForm() {
    this.address = {};
  }
}
