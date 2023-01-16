let firstName = ['Mike', 'Jon', 'John', 'Mark'];
let lastName = ['Blue', 'Black', 'White', 'Red'];
let numericValueArray = ['1.','2.','3.','4.'];

function fullName (array1, array2, array3) {

       let fullNameArray = [(array3[0] + array1[0] + ' ' + array2[0]), (array3[1] + array1[1] + ' ' + array2[1]), (array3[2] + array1[2] + ' ' + array2[2]), (array3[3] + array1[3] + ' ' + array2[3])];
       console.log(fullNameArray);
                 }

fullName(firstName, lastName, numericValueArray);

