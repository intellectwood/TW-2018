function collect_same_elements(collection_a, object_b) {
    let result = collection_a.filter(function(element){
        return object_b['value'].includes(element);
        });
    return result;
  //在这里写入代码
}

module.exports = collect_same_elements;
