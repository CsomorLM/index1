var igen = prompt("Add meg a darabszámát");
var type = prompt("Add meg a típusát");

var prices = {
    "tanuló bérlet": 4950,
    "felnőtt bérlet": 9400,
    "kutya bérlet": 2700
};

var price = prices[type];
    
if (price === undefined) {
    alert("Érvénytelen típus");
} else {
    var discount = igen >= 10 ? 0.9 : 1;
    var total = price * igen * discount;
    alert("Teljes ár: " + total);
}