const AV = require('../utils/av-weapp-min.js');

class Todo extends AV.Object {
  get content() { return this.get("content") }
  set content(value) { return this.set("content", value) }
  get done() { return this.get("done") }
  set done(value) { return this.set("done", value) }

}

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function (object) {
//   alert('LeanCloud Rocks!');
// })


AV.Object.register(Todo);
module.exports = Todo;