import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';

@Component({
  selector: 'app-Website',
  templateUrl: './Website.component.html',
  styleUrls: ['./Website.component.scss'],
  providers: [
    MessageService,
    provideLottieOptions({
      player: () => player,
    }),
  ],
})
export class WebsiteComponent implements OnInit {
  x = 1;

  handleClick() {
    console.log(this.x);
    this.x = this.x === 1 ? 2 : 1; // Toggle between 1 and 2
    this.initializeChart()
  }

  private animationItem: AnimationItem | undefined;
  items: MegaMenuItem[] | undefined;
  options: AnimationOptions = {
    path: '/assets/lotti.json',
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log('here' + animationItem);
    this.animationItem = animationItem;
  }

  split_items: MenuItem[];

  constructor(
    private ref: ChangeDetectorRef,
    private messageService: MessageService
  ) {
    this.split_items = [
      {
        label: 'Update',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Delete',
        command: () => {
          this.delete();
        },
      },
      { label: 'Angular Website', url: 'http://angular.io' },
      { separator: true },
      { label: 'Upload', routerLink: ['/fileupload'] },

      this.ref.detectChanges,
    ];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                {
                  label: 'Features',
                  icon: 'pi pi-list',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Customers',
                  icon: 'pi pi-users',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Case Studies',
                  icon: 'pi pi-file',
                  subtext: 'Subtext of item',
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Resources',
        root: true,
      },
      {
        label: 'Contact',
        root: true,
      },
    ];
  }

  initializeChart() {
    this.pieChart_Balance = new Chart({
      chart: {
        type: 'pie',
        plotShadow: false,
        backgroundColor: 'rgba(0, 0, 4, 0.0)',
      },

      credits: {
        enabled: false,
      },

      plotOptions: {
        pie: {
          animation: false,
          innerSize: '99%',
          borderWidth: 15,
          borderColor: '',
          dataLabels: {
            connectorWidth: 0,
            enabled: false,
          },
        },
      },

      title: {
        verticalAlign: 'middle',
        floating: false,
        text: 'Balance',
        style: { color: '#fff' },
      },

      legend: {
        enabled: false,
      },

      series: [
        {
          type: 'pie',
          data: [
            { y: 1, color: '#eeeeee' },

            { y: 2, color: '#393e46' },

            { y: 3, color: '#00adb5' },
            { y: 4, color: '#eeeeee' },
            { y: 5, color: '#506ef9' },
          ],
        },
      ]
  })
}

  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Data Saved',
    });
  }

  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Deleted',
    });
  }

  lineChart = new Chart({
    chart: {
      backgroundColor: 'rgba(0, 0, 4, 0.4)',
      polar: false,
      type: 'line',
    },
    title: {
      text: 'Patients',
      style: { color: '#fff' },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16],
      } as any,
    ],
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,

      backgroundColor: 'rgba(0, 0, 4, 0.4)',
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
      style: { color: '#fff' },
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },

          { name: 'HIV/AIDS', y: 2, color: '#393e46' },

          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  });

  pieChart_Balance = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
      backgroundColor: 'rgba(0, 0, 4, 0.0)',
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        animation: false,
        innerSize: '80%',
        borderWidth: 20,
        borderColor: '',
        dataLabels: {
          connectorWidth: 0,
          enabled: false,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: false,
      text: 'Balance',
      style: { color: '#fff' },
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { y: 1, color: '#eeeeee' },

          { y: 2, color: '#393e46' },

          { y: 3, color: '#00adb5' },
          { y: 4, color: '#eeeeee' },
          { y: 5, color: '#506ef9' },
        ],
      },
    ],
  });
}
