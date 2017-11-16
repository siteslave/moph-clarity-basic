import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  options: any;
  options2: any;

  constructor(private userService: UserService) {

  }

  async ngOnInit() {
    let rs: any = await this.userService.getUserTypesList();
    let data = []; // pie

    let colData = []; // column
    let colCategories = []; // column

    rs.rows.forEach(v => {
      colData.push(+v.total);
      colCategories.push(v.user_type_name);

      let obj = {
        name: v.user_type_name,
        y: +v.total
      };

      data.push(obj);
    });

    this.setPieChart(data);
    this.setColumnChart(colData, colCategories);
  }

  setPieChart(data: any) {
    this.options2 = {
      credits: {
        enabled: false
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'User types'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data
      }]
    }

  }

  setColumnChart(data: any[], categories: any[]) {
    this.options = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'
    },
    title: {
        text: 'จำนวนผู้ใช้งานแยกตามประเภท'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: categories,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'จำนวน (คน)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} คน</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'จำนวน',
        data: data

    }]
    }
  }

}
