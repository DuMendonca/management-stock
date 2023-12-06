import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderService } from '../../../services/sender/sender.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavigationComponent],
  providers: [SenderService],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  senderList:any[] = [];

  constructor(
    private senderService: SenderService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.loadSenders();
  }

  loadSenders(){
    this.senderService.retrieveSenders().subscribe(res => {
      console.log(res);
  
      this.senderList = res;
    });
  }

  editSender(senderId: number) {
    console.log("editou");
  }

  removeAllSenders() {
    this.senderService.deleteAllSenders().subscribe(() => {
      alert("All Senders deleted successfullys!")
      this.softReload();
    });
  }

  removeSender(senderId: number) {
    this.senderService.deleteSenderById(senderId).subscribe(() => {
      alert("Sender deleted successfullys!")
      this.softReload();
    });
  }

  softReload() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  createNewSender(){
    this.router.navigate(['sender/new']);
  }
}
