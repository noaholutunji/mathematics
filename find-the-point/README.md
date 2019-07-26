# Find the Point

Consider two points, p = (px,py) and q = (qx,qy). We consider the inversion or point reflection, r = (rx,ry), of point p across point q to be a 180 degress rotation of point p around q.

Given n sets of points p and q, find r for each pair of points and print two space-separated integers denoting the respective values of rx and ry on a new line.

Input Format
The first line contains an integer, n, denoting the number of sets of points. 
Each of the n subsequent lines contains four space-separated integers describing the respective values of px, py, qx, and qy defining points p = (px,py) and q = (qx, qy).

Constraints
1 <= n <= 15
-100 <= px,py,qx,qy <= 100

Output Format
For each pair of points p and q, print the corresponding respective values of rx and ry as two space-separated integers on a new line.

Sample Input
2
0 0 1 1
1 1 2 2

Sample Output
2 2
3 3

