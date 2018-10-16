import { Component,OnInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-htmlexamples',
  templateUrl: './htmlexamples.component.html',
  styleUrls: ['./htmlexamples.component.css']
})
export class HtmlexamplesComponent implements OnInit {
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