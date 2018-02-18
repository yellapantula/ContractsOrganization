import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import {Contracts} from './contracts.model';

@Injectable()
export class ContractsService {
  positionList:AngularFireList<any>;
  selectedContracts: Contracts= new Contracts();
  constructor(private firebase:AngularFireDatabase) { }

  getData(){
    this.positionList= this.firebase.list('fields');
    return this.positionList;
  }

  insertContracts(contracts:Contracts)
  {
    this.positionList.push({
      name:contracts.name,
      position: contracts.position,
      salary: contracts.salary,
      date: contracts.date,
      edate:contracts.edate,
      hours:contracts.hours
    });

  }
  updateContracts(contracts: Contracts){
    this.positionList.update(contracts.$key,
    {
      name: contracts.name,
      position: contracts.position,
      salary: contracts.salary,
      date: contracts.date,
      edate: contracts.edate,
      hours:contracts.hours      
    });
  }

  deleteContracts($key:string){
    this.positionList.remove($key);
  }
}
