const array = new Array(0, '2', 4, '6', 8);

const push = function(local_array, new_item){
  var tmp = new Array();
  for (var i = 0; i < local_array.length; i++){
    tmp[i + 1] = local_array[i]
  };
  tmp[0] = new_item;
  return tmp
};

const pull = function(local_array){
  var tmp = new Array();
  for (var i = 0; i < local_array.length -1; i++){
    tmp[i] = local_array[i]
  }
  return tmp[i]
}
