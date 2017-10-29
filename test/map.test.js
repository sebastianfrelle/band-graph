import { Map, Node, Vertex } from '../src/map';

describe('Node class', () => {
  const nodeNames = [
    'Converge',
    'Nails',
    'Trap Them',
    'Gorguts',
    'Death',
    'Metallica'
  ];
  
  var nodes = [];
  
  beforeEach(() => {
    nodes = Node.create(...nodeNames);
  });

  test('Node gets its neighbors correctly', () => {
    let v0 = new Vertex(nodes[nodeNames[0]], nodes[nodeNames[1]]);
    let v1 = new Vertex(nodes[nodeNames[1]], nodes[nodeNames[2]]);
    let v2 = new Vertex(nodes[nodeNames[3]], nodes[nodeNames[0]]);
  });
})
