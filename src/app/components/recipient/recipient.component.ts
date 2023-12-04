import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientService } from '../../services/recipient/recipient.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipient',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers : [RecipientService],
  templateUrl: './recipient.component.html',
  styleUrl: './recipient.component.css'
})
export class RecipientComponent {

  recipientList:any[] = [];
  
  constructor(private recipientService: RecipientService){}

  ngOnInit(): void {
    this.loadRecipients();
  }

  loadRecipients(){
    this.recipientService.retrieveRecipients().subscribe(res => {
      console.log(res);
  
      this.recipientList = res;
    });
  }

  editRecipient(RecipientId: number) {
    console.log("editou");
  }

  removeRecipient(RecipientId: number) {
    console.log("removeu");
  }

  createNewRecipient(){
    console.log("Cadastrou");
  }
}

