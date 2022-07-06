module.exports = function reverse (n) {
    if(n>0){
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
return -( parseInt(n.toString().split('').reverse().join('')) * Math.sign(n))
}