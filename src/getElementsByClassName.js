// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { 
  var result = [];
  
  var recursion = function(className, node) {
    node = node || document.body;
    // if node has className in classList, then push node into result
    // if node has children, then cycle through children
    
    if (node.classList !== undefined && node.classList.contains(className)) {
      result.push(node);
    }
    if (node.hasChildNodes()) {
      var childNodes = node.childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        recursion(className, childNodes[i]);
      }
    }
  };
  recursion(className);
  return result;
};

/*
  // declare result variable will be array
  var result = [];
  // loop through all child nodes
    // if desired class => push it to result
    // if node has child nodes, 
        // result.concat(getElementsByClassName(childNode))
  // return result

  
  var node = arguments[1] || document.body;
  var nodeList = node.childNodes;
  //console.log('here is nodelist: ', nodeList);
  
  
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].classList !== undefined && nodeList[i].classList.contains(className)) {
      // console.log('in if loop: ', nodeList[i]);
      // console.log('has childNodes: ', nodeList[i].hasChildNodes());
      result.push(nodeList[i]);
    }
    // if (nodeList[i].hasChildNodes()) {
    //   // console.log('in second if loop: ', result);
    //   result = result.concat(getElementsByClassName(className, nodeList[i]));
    //   // console.log('after concat: ', result);
    // }
  }
  console.log(result);
  return result;
  
  */