import { Pipe, PipeTransform, Injectable, NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return 'Half Hour'
      case 2: return 'One Hour'
      case 3: return 'Half Day'
      case 4: return 'Full Day'
      default: return value.toString()
    }
  }

}

// @NgModule({
//   declarations:[DurationPipe], // <---
//   imports:[CommonModule],
//   exports:[DurationPipe] // <---
// })

// export class MainPipe{}
