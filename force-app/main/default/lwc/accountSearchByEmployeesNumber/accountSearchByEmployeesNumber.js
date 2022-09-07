import { LightningElement,wire } from 'lwc';
import queryAccountByEmployeNumber from '@salesforce/apex/AccountListLWC1.queryAccountByEmployeNumber';

export default class AccountSearchByEmployeesNumber extends LightningElement {
    a=null;
    handleChange(event){
       a=event.detail.value;
    }
    reset(){
       a=null;

    }
    @wire(queryAccountByEmployeNumber,{numberOfEmployees:'$a'}) accounts;
}d