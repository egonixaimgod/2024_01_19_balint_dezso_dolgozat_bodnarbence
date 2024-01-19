import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-csaladfa',
  templateUrl: './csaladfa.component.html',
  styleUrls: ['./csaladfa.component.css']
})
export class CsaladfaComponent implements OnInit {
  csaladfaElemek: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getCsaladfa();
  }
  getCsaladfa() {
    this.ApiService.getCsaladfa().subscribe(data => {
      this.csaladfaElemek = data;
    });
  }
}