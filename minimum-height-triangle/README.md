# Minimum Height Triangle

Given integers b and a, find the smallest integer h, such that there exists a triangle of height h, base b, having an area of at least a.

![Fig](https://s3.amazonaws.com/hr-assets/0/1496306792-f2c37eea44-triangle.jpg)

Input Format

In the first and only line, there are two space-separated integers b and a, denoting respectively the base of a triangle and the desired minimum area.

Constraints
1 =< b =< 10^6
1 =< a =< 10^6

Output Format

In a single line, print a single integer h, denoting the minimum height of a triangle with base b and area at least a.

Sample Input 0
2 2

Sample Output 0
2

Explanation 0

The task is to find the smallest integer height of the triangle with base 2 and area at least 2. It turns out, that there are triangles with height 2, base 2 and area 2, for example a triangle with corners in the following points: (1,1), (3,1), (1,3):

![Fig](https://s3.amazonaws.com/hr-assets/0/1496129560-08d4c76295-1495593239-31007b94ae-ScreenShot2017-05-24at4.33.32AM.png)

It can be proved that there is no triangle with integer height smaller than , base  and area at least .

Sample Input 1
17 100

Sample Output 1
12

Explanation 1

The task is to find the smallest integer height of the triangle with base 17 and area at least 100. It turns out, that there are triangles with height 12, base 17 and area 102, for example a triangle with corners in the following points: (2,2), (19,2), (16,14).

![Fig](https://s3.amazonaws.com/hr-assets/0/1496129487-f3d8717a4b-1495594014-3ba1b914c6-ScreenShot2017-05-24at4.46.19AM.png)