function tinyFriend (names){
    var smallest = names[0];
    for(var i =0; i<names.length;i++)
    var currentNames = names [i];
    if(currentNames<smallest)
    { smallest=currentNames;
    }

    return smallest;

}
var smallestName = tinyFriend(["rahim","jabbar","karima","shofiqe"]);
console.log(smallestName);