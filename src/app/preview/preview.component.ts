import { Component, Input, OnInit, Output } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

import { Puzzle } from '../puzzle';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  
  scale = Math.floor(window.innerWidth/12);

  polygonStrings: string[] = [];
  points = generatePoints(this.scale);
  indices = getIndices(27);
  styleStringLetters: string = `font: ${Math.round(this.scale/5)}px sans-serif; text-anchor: middle;`;
  letterDisplacement = [
    {x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},
  ];
  transformStringLetters: string[] = generateTransformationStrings(this);

  Math = Math;
  
  @Input() puzzle: Puzzle;

  constructor() {
    for (let i = 0; i < 27; i+=3) {
      this.polygonStrings.push(`${this.points.x[i]},${this.points.y[i]} ${this.points.x[i+1]},${this.points.y[i+1]} ${this.points.x[i+2]},${this.points.y[i+2]}`);
    }
  }

  ngOnInit(): void {
  }

}

function generatePoints(scale: number) {
  let output = {x: [], y: []};
  let midpoint = scale*3;
  let trigon = Math.sqrt(3);
  // triangle1
  output.x.push(Math.floor(midpoint));
  output.x.push(Math.floor(midpoint + scale));
  output.x.push(Math.floor(midpoint - scale));
  output.y.push(0);
  output.y.push(Math.floor(trigon*scale));
  output.y.push(Math.floor(trigon*scale));
  // triangle2
  output.x.push(Math.floor(midpoint - scale));
  output.x.push(Math.floor(midpoint));
  output.x.push(Math.floor(midpoint - 2*scale));
  output.y.push(Math.floor(trigon*scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*2*scale));
  // triangle3
  output.x.push(Math.floor(midpoint - scale));
  output.x.push(Math.floor(midpoint + scale));
  output.x.push(Math.floor(midpoint));
  output.y.push(Math.floor(trigon*scale));
  output.y.push(Math.floor(trigon*scale));
  output.y.push(Math.floor(trigon*2*scale));
  // triangle4
  output.x.push(Math.floor(midpoint + scale));
  output.x.push(Math.floor(midpoint + 2*scale));
  output.x.push(Math.floor(midpoint));
  output.y.push(Math.floor(trigon*scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*2*scale));
  // triangle5
  output.x.push(Math.floor(midpoint - 2*scale));
  output.x.push(Math.floor(midpoint - scale));
  output.x.push(Math.floor(midpoint - 3*scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*3*scale));
  output.y.push(Math.floor(trigon*3*scale));
  // triangle6
  output.x.push(Math.floor(midpoint - 2*scale));
  output.x.push(Math.floor(midpoint));
  output.x.push(Math.floor(midpoint - scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*3*scale));
  // triangle7
  output.x.push(Math.floor(midpoint));
  output.x.push(Math.floor(midpoint + scale));
  output.x.push(Math.floor(midpoint - scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*3*scale));
  output.y.push(Math.floor(trigon*3*scale));
  // triangle8
  output.x.push(Math.floor(midpoint));
  output.x.push(Math.floor(midpoint + 2*scale));
  output.x.push(Math.floor(midpoint + scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*3*scale));
  // triangle9
  output.x.push(Math.floor(midpoint + 2*scale));
  output.x.push(Math.floor(midpoint + 3*scale));
  output.x.push(Math.floor(midpoint + scale));
  output.y.push(Math.floor(trigon*2*scale));
  output.y.push(Math.floor(trigon*3*scale));
  output.y.push(Math.floor(trigon*3*scale));
  // return
  return output;
}

function getIndices(qty: number) {
  let output = [];
  for (let i = 0; i < qty; i++) {
    output.push(i);
  }
  return output;
}

function generateTransformationStrings(obj: any): string[] {
  let points = obj.points;
  let scale = obj.scale;
  let output = [];
  let degrees = [
    180, -60, 60,
    180, -60, 60,
    120, -120, 0,
    180, -60, 60,
    180, -60, 60,
    120, -120, 0,
    180, -60, 60,
    120, -120, 0,
    180, -60, 60,
  ];
  for (let i = 0; i < 27; i++) {
    obj.letterDisplacement[i].x = Math.ceil(Math.sin(degrees[i]*Math.PI/180)*scale/12);
    obj.letterDisplacement[i].y = -Math.ceil(Math.cos(degrees[i]*Math.PI/180)*scale/12);
    output.push(`rotate(${degrees[i]}, ${points.x[i]+obj.letterDisplacement[i].x}, ${points.y[i]+obj.letterDisplacement[i].y})`);
  }
  return output;
}

