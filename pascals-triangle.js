// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

class Solution {
    generate(numRows) {
        if (numRows === 1) {
            return [[1]];
        }

        const triangle = this.generate(numRows - 1);

        const prevRow = triangle[triangle.length - 1];
        const newRow = [1];

        for (let i = 1; i < prevRow.length; i++) {
            newRow.push(prevRow[i - 1] + prevRow[i]);
        }

        newRow.push(1);
        triangle.push(newRow);

        return triangle;
    }
}

// Example usage:
const solution = new Solution();
const result = solution.generate(5);
console.log(result);
