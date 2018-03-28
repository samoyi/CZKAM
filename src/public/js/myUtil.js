
/**
 * 因为数据库出问题，这里模拟从数据库读取数据
 * 读取/data目录下的JSON文件
 * 因为vue-resource需要使用vue实例的$http属性，所以调用该方法是需要使用call方法把
 * this值设为vue实例
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

/**
 * 模拟获取详情文章HTML
 * 因为vue-resource需要使用vue实例的$http属性，所以调用该方法是需要使用call方法把
 * this值设为vue实例
 * @param {String}  sID       详情文章ID
 * @param {String}  sReceptor  接收数据的data属性名
 */
function fetchArticle(sID, sReceptor){
    this.$http.get('/data/detail/' +sID+ '.html').then(res => {
        this[sReceptor] = res.body;
    }, err => {
        throw new Error(err);
    });
}

/**
 *  删除字符串中的HTML标签
 */
function stripHTMLTag(str){
    let tmpDiv = document.createElement("DIV");
    tmpDiv.innerHTML = str;
    return tmpDiv.innerText;
}

export {fetchJSON, fetchArticle, stripHTMLTag};
