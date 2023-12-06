import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientService } from '../../../services/recipient/recipient.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-recipient',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavigationComponent],
  providers : [RecipientService],
  templateUrl: './recipient.component.html',
  styleUrl: './recipient.component.css'
})
export class RecipientComponent {

  recipientList:any[] = [];
  
  constructor(private recipientService: RecipientService, private router:Router){}

  ngOnInit(): void {
    this.loadRecipients();
  }

  loadRecipients(){
    this.recipientService.retrieveRecipients().subscribe(res => {
      console.log(res);
  
      this.recipientList = res;
    });
  }

  editRecipient(recipientId: number) {
    console.log("editou");
  }

  removeAllRecipients() {
    this.recipientService.deleteAllRecipients().subscribe(() => {
      alert("All Recipients deleted successfullys!")
      this.softReload();
    });
  }

  removeRecipient(recipientId: number) {
    this.recipientService.deleteRecipientById(recipientId).subscribe(() => {
      alert("Recipient deleted successfullys!")
      this.softReload();
    });
  }
  
  createNewRecipient(){
    this.router.navigate(['recipient/new']);
  }

  softReload() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}

