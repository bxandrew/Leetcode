// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.

// Input: Number of courses represented by an integer (courses will be 0 -> numCourses - 1), and a 2d array representing prereqs
// Output: semesters required to complete all courses

// Strategy:
// This problem looks to be a variation of longestPath in a graph traversal
// Look for all terminal nodes first and take all of those first
// Then iterate through all nodes and find out how far it is from that terminal node.
// Return back the longest path to that terminal node = how many semesters it will take.
// Also since the semesters will be how long each path will take 0 -> 1 -> 2 will mean it will take 3 semesters to complete a path that is 2 distance
// Also remember to generate an adjacency list to represent our graph

// Time Complexity: O(e) because we have to travel through all edges of the graph
// Space Complexity: O(n) because we have to store # of semesters it takes to complete each course

const semestersRequired = (numCourses, prereqs) => {
  const graph = {};
  // Generate our adjacency list to represent our graph
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  // Now fill our neighbors array with our corresponding prereqs
  // Prereq is A before B
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    // For node b, we need to push a into our node's neighbors
    graph[b].push(a);
  }

  // Now that we have our adjacency list, iterate through to find number of semesters required, starting with terminal nodes
  const semesters = {};

  for (let node in graph) {
    if (graph[node].length === 0) {
      semesters[node] = 1; // If no neighbors, it only takes 1 semester to do this course
    }
  }

  // Now traverse through all courses and find out how many semesters it takes to complete each one
  for (let course = 0; course < numCourses; course++) {
    completeCourse(graph, course, semesters);
  }

  return Math.max(...Object.values(semesters));
};

// return back how many semesters it'll take to complete the course
const completeCourse = (graph, course, semesters) => {
  if (course in semesters) return semesters[course]; // If a course is already in semesters, we have already completed it (return # semesters it took)

  let courses = 0; // Max distance from current course
  for (let neighbor of graph[course]) {
    const result = completeCourse(graph, neighbor, semesters);
    if (result > courses) {
      courses = result;
    }
  }

  semesters[course] = 1 + courses;
  return semesters[course];
};

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses, prereqs)); // -> 3
