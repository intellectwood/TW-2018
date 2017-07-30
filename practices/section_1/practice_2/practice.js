function collect_same_elements(collection_a, collection_b) {
    let result = collection_a.filter(function(element){
        return collection_b[0].includes(element);
        });
    return result;
  //在这里写入代码
}

module.exports = collect_same_elements;
