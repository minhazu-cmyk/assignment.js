function woodCalculator (chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed *5;
    var totallWood = tableCount+chairCount+bedCount;
    return totallWood;

}
var result = woodCalculator(14,5,12);
console.log (result);