import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FileDatabase, FileNode } from '../file-database.service';

import { faPlus, faMinus, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree-display',
  templateUrl: './tree-display.component.html',
  styleUrls: ['./tree-display.component.css']
})
export class TreeDisplayComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  expandIcon = faPlus;
  collapseIcon = faMinus;
  nodeIcon = faCircle;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  ngOnInit() {
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;
}
