import {Component, Input} from '@angular/core';
import {DescriptionType} from "../../types/description.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {
  @Input() description: DescriptionType;
  @Input() index: number = 0;

  constructor() {
    this.description = {
      title: '',
      textInfo: ''
    }
  }

  ngOnInit(){}
}
