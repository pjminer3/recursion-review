// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // if (json.length === 0) {
  //   return ''; 
  // }
  
  console.log('properly triggered: ', json);
  if (json[0] === '"') {
    
  }
  if (json[0] === '[') {
    // manipulate array contents
    if (json[1] === ']') {
      return [];
    } else {
      var result = parseJSON(json.slice(1,json.lastIndexOf(']')));
      console.log([result]);
      return [result];
    }
  } else if (json[0] === '{') {
    // manipulate object contents
    if (json[1] === '}') {
      return {};
    } else {
      var result = parseJSON(json.slice(1,json.lastIndexOf('}')));
      console.log('we r on second test');  
    }    
  } 
};


// var parseJSON = function(json) {
//   // your code goes here
//   // if (json.length === 0) {
//   //   return ''; 
//   // }
  
//   console.log('properly triggered: ', json);
  
//   if (json[0] === '[') {
//     // manipulate array contents
//     if (json[1] === ']') {
//       return [];
//     } else {
//       var result = parseJSON(json.slice(1,json.lastIndexOf(']')));
//       console.log([result]);
//       return [result];
//     }
//   } else if (json[0] === '{') {
//     // manipulate object contents
//     if (json[1] === '}') {
//       return {};
//     } else {
//       var result = parseJSON(json.slice(1,json.lastIndexOf('}')));
//       console.log('we r on second test');  
//     }    
//   } 
// };


// var parseJSON = function(json) {
//   // your code goes here
//   if (json.length === 0) {
//     return ''; 
//   }
  
//   console.log('properly triggered: ', json);
  
//   if (json.slice(0,1) === '[') {
//     // manipulate array contents
//     var result = parseJSON(json.slice(1,json.lastIndexOf(']')));
//     console.log([result]);
//     return [result];
//   } else if (json.slice(0,1) === '{') {
//     // manipulate object contents
//     console.log('we r on second test');
//   } 
// };