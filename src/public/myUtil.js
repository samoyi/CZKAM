

/**
 * 因为数据库出问题，这里模拟从数据库读取数据
 * 读取/data目录下的JSON文件
 * 调用该方法是需要使用call方法把this值设为vue实例
 * @param {String}  sJSONName    JSON文件文件名，不含“.json”
 * @param {String}  sReceptor    接收数据的data属性名
 *
 * Examples:
 *   // 读取/data/stores.json，解析后传给vue实例中名为 store_list 的属性
 *   fetchJSON.call(this, 'stores', 'store_list');
 *
 */
function fetchJSON(sJSONName, sReceptor){
    this.$http.get('/data/' +sJSONName+ '.json').then(res => {
        this[sReceptor] = res.body;
    }, err => {
        throw new Error(err);
    });
}


function stripHTMLTag(str){
    let tmpDiv = document.createElement("DIV");
    tmpDiv.innerHTML = str;
    return tmpDiv.innerText;
}

export {fetchJSON, stripHTMLTag};
