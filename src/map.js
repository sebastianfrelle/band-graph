/**
 * UI module.
 * 
 * I fucking hate having a class for Vertices. Consider removing it.
 * @module map
 */

/**
 * A Map holds multiple Nodes and Vertices.
 */
export class Map {
  constructor(nodes, vertices) {
    this.nodes = nodes;
    this.vertices = vertices;
  }
}

/**
 * A Node is a unit of information. It is contained within a map and is
 * connected to other Nodes via Vertices.
 */
export class Node {
  static create(...titles) {
    let nodes = {};
    for (let t of titles) {
      nodes[t] = new Node(t);
    }

    return nodes;
  }

  constructor(title) {
    this.title = title;
  }

  get neighbors() {
    if (!this.neighbors) {
      this.neighbors = [];
      for (v of this.vertices) {
        this.neighbors.push(...v.nodes.filter(e => e !== this));
      }
    }

    return this.neighbors;
  }
}

/**
 * Represents a vertex between two nodes. Vertices are directed for now-- 
 * otherwise, we probably wouldn't need a vertex class.
 */
export class Vertex {
  constructor(origin, destination) {
    this.origin = origin;
    this.destination = destination;
  }

  get nodes() {
    if (!this.nodes) {
      this.nodes = [this.origin, this.destination];
    }

    return this.nodes;
  }
}