import {Component, OnChanges, Input} from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarChartComponent implements OnChanges {

  @Input() site;
  @Input() exp;
  @Input() src_mac;
  @Input() dst_mac_list;

  ngOnChanges(){
    this.load_graph();
  };

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  barChartData = [
    {data: [], label: ''},
  ];

  constructor(private gith: GithubService) {}

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

  load_graph() {
    let url = "https://raw.githubusercontent.com/openwsn-berkeley/mercator/develop/datasets/processed/";
    this.barChartData = [{data: [], label: ''}];
    if (this.dst_mac_list.length > 0) {
      for (let i=0; i<this.dst_mac_list.length; i++) {
        this.gith.download_url(url + this.site + "/" + this.exp + "/one_to_one/" + this.src_mac + "/" + this.dst_mac_list[i] + ".json").subscribe((res: any) => {
          this.barChartLabels = res.x;
          this.barChartData.push({data: res.y, label: res.ytitle});
          console.log(this.barChartData)
        });
      };
    }
  }
}


