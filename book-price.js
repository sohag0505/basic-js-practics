// while loop

var bookPrice = [255, 280, 250, 357, 142, 170, 222, 539, 100];
var i = 0;
while (i < bookPrice.length) {
    if (bookPrice[i] > 200) {
        i++;
        continue;
    }
    var element = bookPrice[i];
    console.log(element);
    i++;

}