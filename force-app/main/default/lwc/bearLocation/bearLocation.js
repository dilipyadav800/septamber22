



import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Set Bear object fields
const NAME = 'Bear__c.Name';
const LOCATION_LATITUDE= 'Bear__c.Location__Latitude__s';
const LOCATION_LONGITUDE = 'Bear__c.Location__Longitude__s';
const bearFields = [
  NAME,
  LOCATION_LATITUDE,
  LOCATION_LONGITUDE
];
export default class bearLocation extends LightningElement {
    @api recordId;
  name;
  mapMarkers = [];
  @wire(getRecord, { recordId: '$recordId', fields: bearFields })
  loadBearMap3({ error, data }) {
    if (error) {
      // TODO: handle error
    } else if (data) {
      // Get Bear data
      this.name =  getFieldValue(data, NAME);
      const Latitude = getFieldValue(data, LOCATION_LATITUDE);
      const Longitude = getFieldValue(data, LOCATION_LONGITUDE);
      // Transform bear data into map markers
      this.mapMarkers = [{
        location: { Latitude, Longitude },
        title: this.name,
        description: `Coords67: ${Latitude}, ${Longitude}`
      }];
    }
  }
  get cardTitle() {
    return (this.name) ? `${this.name}'s location `: 'Bear location1';
  }
}







