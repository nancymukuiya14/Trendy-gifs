import { GifsService } from './../gifs-service/gifs.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
trendingGifs: any;

  constructor(private giftservice:GifsService) { }

  ngOnInit():void {
    this.getAllGifs();
  }
  getAllGifs() {
      this.giftservice.getTrendingGifs().subscribe(
      (response) => {
        console.log(response);
      this.trendingGifs = response['data'];
      console.log(this.trendingGifs);
      },
      (error) => {
        console.log(error);
      }
    );
  };
};