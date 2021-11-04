import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment';

@Pipe({
  name: 'whenDatePipe',
})
export class WhenDatePipe implements PipeTransform {
  transform(value: number) {
    const date = new Date(value);
    if (this.datesAreEqual(date, new Date())) {
      return 'today';
    }
    let dateToCompare: Date = new Date();
    if (this.datesAreEqual(date, new Date(dateToCompare.setDate(dateToCompare.getDate() - 1)))) {
      return 'yesterday';
    }
    dateToCompare = new Date();
    if (this.datesAreEqual(date, new Date(dateToCompare.setDate(dateToCompare.getDate() + 1)))) {
      return 'tomorrow';
    }
    return moment(date).format('DD/MM');
  }


  private datesAreEqual(date1: Date, date2: Date): boolean {
    const newDate1 = new Date(date1);
    const newDate2 = new Date(date2);
    return newDate1.getDay() === newDate2.getDay() &&
      newDate1.getMonth() === newDate2.getMonth() &&
      newDate1.getDate() === newDate2.getDate();
  }
}
