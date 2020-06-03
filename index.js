// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  let newDriver = Object.assign({}, obj);
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  let newDriver = Object.assign(obj);
  newDriver[key] = value;
  return newDriver;
}