function myEach(collection, callback) {
  for (let acessor in collection) {
    callback(collection[acessor]);
  }
  return collection;
}

function myMap(collection, callback) {
  let newArray = [];
  for (let acessor in collection) {
    newArray.push(callback(collection[acessor]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let copy = [...collection];

  acc = acc || copy.shift();
  for (let accessor in copy) {
    acc = callback(acc, copy[accessor], copy);
  }
  return acc;
}

function myFind(collection, callback) {
  for (let acessor in collection) {
    let element = collection[acessor];
    if (callback(element)) {
      return element;
    }
  }
}

function myFilter(collection, callback) {
  let selectedArray = [];
  for (let acessor in collection) {
    let element = collection[acessor];
    if (callback(element)) {
      selectedArray.push(element);
    }
  }
  return selectedArray;
}

function mySize(collection) {
  return Object.keys(collection).length;
}

function myFirst(collection, n = 1) {
  let count = 1;
  let array = [];

  for (let acessor in collection) {
    if (count <= n) {
      array.push(collection[acessor]);
      count++;
    }
  }
  return array.length > 1 ? array : array[0];
}

function myLast(collection, n = 1) {
  let startingIndex = collection.length - n;

  return n > 1
    ? collection.slice(startingIndex, collection.length)
    : collection[startingIndex];
}

function myKeys(Obj) {
  let newObj = Obj;
  return Object.keys(newObj);
}

function myValues(Obj) {
  let newObj = Object.values(Obj);
  return newObj;
}
