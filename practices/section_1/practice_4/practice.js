function collect_same_elements(collection_a, object_b) {
    let result = [];
    for (let [index, elem] of collection_a.entries()) {
      if(object_b.value.includes(elem.key)) result.push(elem.key);
    }
    return result;
  //在这里写入代码
}

module.exports = collect_same_elements;
