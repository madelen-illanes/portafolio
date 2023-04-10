import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from 'src/app/models/tracks.model';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: Array<any>,
    args: string | null = null,
    sort: string = 'asc'
  ): TrackModel[] {
    try {
      if (args === null) {
        return value;
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return 1;
          } else if (a[args] < b[args]) {
            return -1;
          } else if (a[args] === b[args]) {
            return 0;
          }
          // a must be equal to b
          return 1;
        });
        return sort === 'asc' ? tmpList : tmpList.reverse();
      }
    } catch (e) {
      console.log('algo paso');
      return value;
    }
  }
}
