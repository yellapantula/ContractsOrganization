import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContractsService} from '../shared/contracts.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private contractsService: ContractsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.contractsService.getData();
    this.resetForm();

  }
  onSubmit(contractsForm: NgForm){
    if(contractsForm.value.$key==null) 
      this.contractsService.insertContracts(contractsForm.value);
    else 
      this.contractsService.updateContracts(contractsForm.value);
    
    this.resetForm(contractsForm);
    this.toastr.success('Submitted Successfully', 'Contract Register');
  }
  resetForm(contractsForm?: NgForm){
    if(contractsForm != null)
     contractsForm.reset();
    this.contractsService.selectedContracts={
      $key: null,
      name : '',
      position : '',
      salary : 0,
      date : 0,
      hours:0,
      edate: 0,
      
    }
  }
}
