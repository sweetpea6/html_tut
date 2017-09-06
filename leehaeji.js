/**
 * Created by Administrator on 2017-08-29.
 */

//배열변수로 5개의 수를 저장하고, 계산 종류가 +이면 모든 수의 합, *이면 모든 수의 곱, -이면 모든 수의 차 계산을 하는 코딩을 하시오.

var score = [1,2,3,4,5],
    sum = 0;

for (var i = 0; i < score.length; i++) {
  sum += score[i];
}
console.log(sum);


