import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpurpose',
  templateUrl: './testpurpose.component.html',
  styleUrls: ['./testpurpose.component.css']
})
export class TestpurposeComponent implements OnInit {
  title = 'angulartoastr';
  showModal: boolean;
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
