import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

import {MatTableDataSource} from '@angular/material/table';
export interface DataElement {
  name: string;
  position: string;
  date: string;
 
}

const ELEMENT_DATA: DataElement[] = [
  {position: "new email recieved", name: 'We would love to hear about', date: '12-April-2020'},
  {position:"new email recieved" , name: 'We would love to hear about', date: "12-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: "12-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: "13-April-2020" },
  {position: "new email recieved", name: 'We would love to hear about', date: "14-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: "15-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: '12-April-2020'},
  {position:"new email recieved" , name: 'We would love to hear about', date: "12-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: "12-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: "13-April-2020" },
  {position: "new email recieved", name: 'We would love to hear about', date: "14-April-2020"},
  {position: "new email recieved", name: 'We would love to hear about', date: "15-April-2020"}
]
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<DataElement>(ELEMENT_DATA);
  selection = new SelectionModel<DataElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DataElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

