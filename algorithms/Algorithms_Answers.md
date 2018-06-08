Add your answers to the Algorithms exercises here.

1.a :  (n^3 / n^2) =  n

b. log n

c. sqrt(n) 

d. n log n  outer loop is log n,  inner loop is n

e.  10n ^ 3,  because most inner loop is constant

f. n 

g. n


2.a : function maxDiff(arr) {
  let min = arr[0];
  let maxDiff = 0;

  arr.forEach(val => {
    min = Math.min(min, val);
    maxDiff = Math.max(maxDiff, val - min);
  });

  return maxDiff;
}



2.b :  
we don't know which floor the egg won't break when dropped
you are searching for the floor where the egg won't break

so use binary search.  each search, you experiment by dropping an egg.


3.a :  n ^ 2

b. n log n
 
