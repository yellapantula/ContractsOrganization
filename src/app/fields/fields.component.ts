import { Component, OnInit } from '@angular/core';
import{ContractsService} from './shared/contracts.service'

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  providers : [ContractsService]
})
export class FieldsComponent implements OnInit {

  constructor(private contractsService: ContractsService) { }

  ngOnInit() {
  }

}
