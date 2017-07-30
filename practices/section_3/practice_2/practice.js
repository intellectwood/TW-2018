function create_updated_collection(collection_a, object_b) {
    collection_a.filter((element) => {
        if (object_b.value.includes(element.key)) element.count -= parseInt(element.count/3);
    })
    return collection_a;
  //在这里写入代码
}

module.exports = create_updated_collection;
