// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// sr is starting row
// sc is starting column
// color is what to color to (change 4-directional elements to color if same color)
// at the very least, the starting pixel will change its color

// Strategy:
// I am definitely thinking that this will be a recursive problem to solve
// 4-Directional check is like a giant plus (+) sign on top of the pixel we currently are at represented by image[sr][sc]
// Check same row elements (left, right) first since it seems easier, then do a recursive check for that pixel (sr, sc)
// Then check the same column elements (up, down) and do the same thing, throw it back into the recursive check

// How do I check that the next elements are same as original element?
// Recursive check will be if the elements are the same as the original color? (I will probably need to have an original color parameter)
// Maybe only change the color at the end of recursive bubbling

// Return the newly colored image

// var floodFill = function(image, sr, sc, color) {
//   let start = image[sr][sc];
//   if (start === color) return image; //if the starting point is equal to the color, return out our image (dont need to recurse through, it is already visited)

//   //make sure each direction is a valid index
//   let left = sc > 0 ? image[sr][sc-1] : null;
//   let right = sc < image[0].length ? image[sr][sc+1] : null;
//   let top = sr > 0 ? image[sr-1][sc] : null;
//   let bottom = sr < image.length-1 ? image[sr+1][sc] : null;

//   // change our starting point before recursing through any direction so when dont recurse backwards into an infinite loop (left to right to left to right)
//   image[sr][sc] = color;
//   //check both left and right of start is equal to start, if so recurse in
//   if (left === start) floodFill(image, sr, sc-1, color);
//   if (right === start) floodFill(image, sr, sc+1, color);
//   if (top === start) floodFill(image, sr-1, sc, color);
//   if (bottom === start) floodFill(image, sr+1, sc, color);

//   //return our image at the end (should be fully colored at this point)
//   return image;
// };

//---- Attempt iterative with a queue ----//
// Use a queue to keep track of which points to visit

// const floodFill = (image, sr, sc, color) => {
//   if (image[sr][sc] === color) return image;
//   debugger;
//   let queue = [ [sr, sc] ]; //with the starting point as the first point to check
//   let start = image[sr][sc];
//   let rowLength = image[0].length
//   let colLength = image.length
//   while (queue.length) { //while there are still things in the queue
//     let currCoords = queue.shift() // [sr, sc]
//     let row = currCoords[0];
//     let col = currCoords[1];
//     if (image[row][col] === start) {
//       image[row][col] = color;
//     }

//     //then add on the elements to left right, top, bottom
//     if (col - 1 >= 0 && image[row][col-1] === start) queue.push([row, col-1]);
//     if (col + 1 < rowLength && image[row][col+1] === start) queue.push([row, col+1]);
//     if (row - 1 >= 0 && image[row-1][col] === start) queue.push([row-1, col]);
//     if (row + 1 < colLength && image[row+1][col] === start) queue.push([row+1, col]);
//   }

//   return image
// }

//Combining all the statements into the top and checking, before we move down the recursive calls

const floodFill = ( image, sr, sc, color, startColor = image[sr][sc] ) => {
  // Check if indexes are in range

  // image[sr][sc] !== startColor this check is to check if our current point is not equal to the original color (then just return out)
  // We only care about the points that are next to the points where they have the same original color

  // image[sr][sc] === color means that if the current point is equal to the color (it means that it already changed to the new color, we can just return out);
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== startColor || image[sr][sc] === color) {
    return image;
  }

  //remember to change our color here, or else recursion fails
  image[sr][sc] = color;

  //recursively call to all 4 directions
  floodFill(image, sr-1, sc, color, startColor); // top
  floodFill(image, sr+1, sc, color, startColor); // bottom
  floodFill(image, sr, sc-1, color, startColor); // left
  floodFill(image, sr, sc+1, color, startColor); // right

  //return our final colored image;
  return image;
}

let image = [[1,1,1],[1,1,0],[1,0,1]]
let sr = 1
let sc = 1
let color = 2

// let output = [[2,2,2],[2,2,0],[2,0,1]]

console.log(floodFill(image, sr, sc, color)); //   [[2,2,2],[2,2,0],[2,0,1]]