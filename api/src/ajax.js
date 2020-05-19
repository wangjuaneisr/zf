// let xhr = new XMLHttpRequest;
// xhr.open();
// send;
// xhr.onreadystatechange();
function myAjax (options){
    this.method = options.method;
    this.url = options.url;
    this.data = options.data || '';
    this.flag = options.flag || false;
    this.callback = options.callback;
    var self = this;

    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    
    if(this.method == 'GET' || this.method == 'get'){
        xhr.open('GET', this.url + "?" + this.data, this.flag);
        xhr.send();
    }else{
        xhr.open('POST', this.url, this.flag);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(this.data);
    }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(self.method == 'GET' || self.method == 'get'){
                    self.callback(JSON.parse(xhr.responseText));

                }else{
                    self.callback(xhr.responseText);
                }
            }
        }
}