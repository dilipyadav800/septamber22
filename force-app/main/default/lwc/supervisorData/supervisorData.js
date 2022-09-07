import { LightningElement,api,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';

import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';
const bearField=[SUPERVISOR_FIELD];

export default class SupervisorData extends LightningElement {

    @api recordId;
    @wire(getRecord,{recordId:"$recordId",fields:bearField})
    bear;
    get supervisorid(){
        return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
    }
}