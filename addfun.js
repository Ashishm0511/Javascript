const calculator ={
    add: function(x, y){
        return x + y;
    },
    subtract: function(x, y){
        return x - y;
    }
}
const sum =calculator.add(13,5);
const diff = calculator.subtract(12,3);
console.log("Sum:", sum);
console.log("Difference:", diff);