import { LightningElement,wire } from 'lwc';
import ursusResources from '@asalesforce/resoucrceUrl/ursus_park';
import searchBears from '@salesforce/apex/BearController.searchBears'
export default class BearList extends LightningElement {

    searchTerm='';
    bears;
    @wire(searchBears,{searchTerm:'$searchTerm'}) bears;

appResources={
  bearimg : ` ${ursusResources}/img/standing-bear-silhouette.png`}

  handlechange(event){
    window.clearTimeout(this.dealyTimeout);
    searchTerm=event.targer.value;
    this.dealyTimeout=setTimeout(()=> {
        this.searchTerm=searchTerm;},300);
    }
  }
