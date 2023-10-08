// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// treeLevels(a); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f']
// // ]
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// const i = new Node("i");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //         a
// //      /    \
// //     b      c
// //   /  \      \
// //  d    e      f
// //      / \    /
// //     g  h   i

// treeLevels(a); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f'],
// //   ['g', 'h', 'i']
// // ]
// test_02:
// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");
// const t = new Node("t");
// const u = new Node("u");
// const v = new Node("v");

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

// //      q
// //    /   \
// //   r     s
// //    \
// //     t
// //    /
// //   u
// //  /
// // v

// treeLevels(q); //->
// // [
// //   ['q'],
// //   ['r', 's'],
// //   ['t'],
// //   ['u'],
// //   ['v']
// // ]
// test_03:
// treeLevels(null); // -> []


// const treeLevels = (root) => {
//     if (root === null) return [];
//     let result = [];
    
//     let queue = [{node: root, levelNum: 0}];
//     while(queue.length > 0) {
      const{node, levelNum} = queue.shift();
      if (result.length === levelNum) {
        result[levelNum] = [node.val];
      } else {
        result[levelNum].push(node.val);
      }
      
      if(node.left !== null)  queue.push({node: node.left, levelNum: levelNum + 1})
      if(node.right !== null) queue.push({node: node.right, levelNum: levelNum + 1})
    }
    return result;
};