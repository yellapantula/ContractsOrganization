import { Component, OnInit } from '@angular/core';
import {ContractsService} from '../shared/contracts.service';
import {Contracts} from '../shared/contracts.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
  positionList:Position[];
  showAllChecked:boolean;
  contractsCount:number;

  constructor(private contractsService: ContractsService,private toastr: ToastrService) { }

  ngOnInit() {
    this.contractsCount = 0;
    var x = this.contractsService.getData();
    x.snapshotChanges().subscribe(item => {
      this.positionList=[];
      item.forEach(element =>{
        var y= element.payload.toJSON();
        y["$key"] = element.key;
        var sdt = new Date(y["date"]);
        var edt = new Date(y["edate"]);

        // console.log(y["name"] + "...sdt..." + sdt);
        // console.log(y["name"] + "...edt..." + edt);
        if (this.showAllChecked) {
          this.positionList.push(y as Position);
          this.contractsCount = this.contractsCount + 1;
        }
        else {
          if (y["edate"] == "") {
            this.positionList.push(y as Position);
            this.contractsCount = this.contractsCount + 1;
          }
        }            
      });
    });
  }
 onEdit(con: Contracts){
  this.contractsService.selectedContracts= Object.assign({},con);

 }
 onDelete(key: string){
   if(confirm('Are you sure you want to delete this record?')==true){
    this.contractsService.deleteContracts(key);
    this.toastr.warning("Deleted Successfully", "Contracts Organization");
     }
  }
  onShowAll(){
    this.contractsCount = 0;
    this.positionList.length = 0;
    var x = this.contractsService.getData();
    x.snapshotChanges().subscribe(item => {
      this.positionList=[];
      item.forEach(element =>{
        var y= element.payload.toJSON();
        y["$key"] = element.key;
        var sdt = new Date(y["date"]);
        var edt = new Date(y["edate"]);

        if (this.showAllChecked) {
          this.positionList.push(y as Position);
          this.contractsCount = this.contractsCount + 1;
        }
        else {
          if (y["edate"] == "") {
            this.positionList.push(y as Position);
            this.contractsCount = this.contractsCount + 1;
          }
        }            
      });
    });
   }
 }