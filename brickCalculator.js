function brickCalculator (building){
    var FloorCount1 = 15*1000;
    var  FloorCount2= 12*1000;
    var FloorCount3 = 10*1000;
    var totallBricks = (FloorCount1+FloorCount2+FloorCount3);
    return totallBricks;
}
var result = brickCalculator(30);
console.log(result);