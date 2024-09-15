import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommondataserviceService } from '../../commondataservice.service';
import { ENDPOINTS } from '../../endpoints';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.css'],
})
export class AboutUsComponent implements OnInit {
  data: any;

  constructor(
    private apiService: CommondataserviceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData(ENDPOINTS.GET.GET_COFFEE).then((respData) => {
      if (respData) {
        this.data = respData;
        this.cdr.detectChanges();
      }
    });
  }
}
