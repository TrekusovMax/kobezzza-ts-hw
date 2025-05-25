// #### Брендированные типы
function setDistance(km) {
    console.log(km);
}
function km(distance) {
    if (distance < 0) {
        throw new TypeError('Invalid distance');
    }
    return distance;
}
setDistance(km(100));
