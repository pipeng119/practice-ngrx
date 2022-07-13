import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from '../mode/permissions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  permission: Partial<Record<Permission, boolean>> = {
    Full_Access1: true,
    Read_Only1: false,
  };

  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      console.log(data);
    });
  }
}
