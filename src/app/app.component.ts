import { Component,OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit {
  title = 'Mercator';

  sites=[];

  constructor(private gith:GithubService) {


    this.gith.getSites().subscribe((res: any) => {

      console.log(res);

      this.sites=res;

    });
  }

  ngOnInit() {}
}
