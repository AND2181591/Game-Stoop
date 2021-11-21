import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Order {
  order: number;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  order: number = 0;
  name: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data: Order
  ) {
    this.order = data.order;
    this.name = data.name;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
