class Message {
    constructor(text = '', created = Date.now())
    {
        this.text = text;
        this.created = created;
    }

    get created(){
        return this._created;
    }
    set created(created){
        this._created = created;
    }
    toString() {
        return `Mesage created at: ${this.created} - Text: ${this.text}`;
    }
}

var enmptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);

console.log(String(enmptyMessage));
console.log(String(textMessage));
