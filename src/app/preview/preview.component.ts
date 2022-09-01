import { Component, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

import { Puzzle } from '../puzzle';
import { PuzzleDetailComponent } from '../puzzle-detail/puzzle-detail.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() puzzle: Puzzle;
  @Input() hovering: number;

  lineStyle: string[] = [];

  polygonIndices: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  scale = Math.floor(window.innerWidth/12);

  polygonStrings: string[] = [];
  points = generatePoints(this.scale);
  indices = getIndices(27);
  styleStringLetters: string = `font: ${Math.round(this.scale/5)}px sans-serif; text-anchor: middle;`;
  letterDisplacement = [
    {x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}
  ];
  transformStringLetters: string[] = generateTransformationStringsLetters(this);
  
  //styleStringText: string = `font: ${Math.round(this.scale/5)}px sans-serif; text-anchor: middle;`;

  textDisplacement = [
    {x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}
  ];
  transformStringText: string[] = generateTransformationStringsText(this);
  Math = Math;
  
  constructor() {
    for (let i = 0; i < 27; i+=3) {
      this.lineStyle.push("fill:white;stroke:black;stroke-width:1");
      this.polygonStrings.push(`${this.points.x[i]},${this.points.y[i]} ${this.points.x[i+1]},${this.points.y[i+1]} ${this.points.x[i+2]},${this.points.y[i+2]}`);
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes["hovering"];
    // Whenever the data in the parent changes, this method gets triggered
    this.lineStyle[change.currentValue] = "fill:yellow;stroke:red;stroke-width:3";
    this.lineStyle[change.previousValue] = "fill:white;stroke:black;stroke-width:1";
  }

  getStyleStringText = function(text: string) {
    if (text.length < 12) return `font: ${Math.round(this.scale/5)}px sans-serif; text-anchor: middle;`;
    if (text.length < 24) return `font: ${Math.round(this.scale/7)}px sans-serif; text-anchor: middle;`;
    if (text.length < 36) return `font: ${Math.round(this.scale/10)}px sans-serif; text-anchor: middle;`;
    else return `font: ${Math.round(3.6*this.scale/text.length)}px sans-serif; text-anchor: middle;`;
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

function generateTransformationStringsLetters(obj: any): string[] {
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
    180, -60, 60
  ];
  for (let i = 0; i < 27; i++) {
    obj.letterDisplacement[i].x = Math.ceil(Math.sin(degrees[i]*Math.PI/180)*scale/12);
    obj.letterDisplacement[i].y = -Math.ceil(Math.cos(degrees[i]*Math.PI/180)*scale/12);
    output.push(`rotate(${degrees[i]}, ${points.x[i]+obj.letterDisplacement[i].x}, ${points.y[i]+obj.letterDisplacement[i].y})`);
  }
  return output;
}

function generateTransformationStringsText(obj: any): string[] {
  let points = obj.points;
  let scale = obj.scale;
  let output = [];
  let degrees = [
    60, 180, -60,
    60, 180, -60,
    0, 120, -120,
    60, 180, -60,
    60, 180, -60,
    0, 120, -120,
    60, 180, -60,
    0, 120, -120,
    60, 180, -60
  ];
  for (let i = 0; i < 27; i++) {
    if (i % 3 != 2) {
      obj.textDisplacement[i].x = Math.floor((points.x[i+1] - points.x[i]) / 2);
      obj.textDisplacement[i].y = Math.floor((points.y[i+1] - points.y[i]) / 2);
    }
    else {
      obj.textDisplacement[i].x = Math.floor((points.x[i-2] - points.x[i]) / 2);
      obj.textDisplacement[i].y = Math.floor((points.y[i-2] - points.y[i]) / 2);
    }
    
    obj.textDisplacement[i].x -= Math.ceil(Math.sin(degrees[i]*Math.PI/180)*scale/6);
    obj.textDisplacement[i].y += Math.ceil(Math.cos(degrees[i]*Math.PI/180)*scale/6);
    
    output.push(`rotate(${degrees[i]}, ${points.x[i]+obj.textDisplacement[i].x}, ${points.y[i]+obj.textDisplacement[i].y})`);
  }
  return output;
}
