import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() private star: number;
  @Input() private template: string = 'default';

  constructor() { }

  ngOnInit() {
  }

}
