// select the maximum number of activities that can be performed by a single person
let A = [5, 1, 3, 0, 5, 8] //start time
let B = [9, 2, 4, 6, 7, 9] //end time

class GreedyAlgo {
    solve(A, B) {
      const task = [];
      for (let i = 0; i < A.length; i++) {
        task.push([A[i], B[i]]);
      }
      task.sort((a, b) => a[1] - b[1]);
      let ans = 1;
      let curef = task[0];
      for (let i = 1; i < A.length; i++) {
        if (task[i][0] >= curef[1]) {
          ans++;
          curef = task[i];
        }
      }
      return ans;
    }
  }
  

var obj = new GreedyAlgo();
console.log(obj.solve(A,B));