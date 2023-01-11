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
  public order: number = 0;
  public name: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data: Order
  ) {
    this.order = data.order;
    this.name = data.name;
  }

  public ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }
}
