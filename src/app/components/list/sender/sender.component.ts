import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderService } from '../../../services/sender/sender.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [SenderService],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  senderList:any[] = [];
  
  constructor(private senderService: SenderService, private router:Router){}

  ngOnInit(): void {
    this.loadSenders();
  }

  loadSenders(){
    this.senderService.retrieveSenders().subscribe(res => {
      console.log(res);
  
      this.senderList = res;
    });
  }

  editSender(SenderId: number) {
    console.log("editou");
  }

  removeSender(SenderId: number) {
    console.log("removeu");
  }

  createNewSender(){
    this.router.navigate(['sender/new']);
  }
}
