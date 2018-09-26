import { Component,OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  constructor(private toastr: ToastrService) {}
  showSuccess(param) {
    this.toastr.info(param, 'Toastr fun!');
  }
}
