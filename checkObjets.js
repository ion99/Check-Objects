function checkObjs(collection, source) {
  let keys = Object.keys(source);
  
  return collection.filter(obj => 
    keys.every(k => 
      obj.hasOwnProperty(k) && obj[k] === source[k])
  );
}

//checkObjs([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });