let input = parseInt(prompt('Enter birth year'));
if(((input - 4) % 12) === 0) {
    console.log("rat");
}
else if(((input - 4) % 12) === 1) {
    console.log("ox");
}
else if(((input - 4) % 12) === 2) {
    console.log("tiger");
}
else if(((input - 4) % 12) === 3) {
    console.log("rabbit");
}
else if(((input - 4) % 12) === 4) {
    console.log("dragon");
}
else if(((input - 4) % 12) === 5) {
    console.log("snake");
}
else if(((input - 4) % 12) === 6) {
    console.log("horse");
}
else if(((input - 4) % 12) === 7) {
    console.log("goat");
}
else if(((input - 4) % 12) === 8) {
    console.log("monkey");
}
else if(((input - 4) % 12) === 9) {
    console.log("rooster");
}
else if(((input - 4) % 12) === 10) {
    console.log("dog");
}
else if(((input - 4) % 12) === 11) {
    console.log("pig");
}
else {
    console.log('Not Avaliable');
}