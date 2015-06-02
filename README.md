# Scope
javascript micro template engine

### Fast start

```js
var a = new Scope({
	template:'<div>{{a}}<p>{{b}}</p><img src="{{src}}"></div>',
	scope: [
		{
			a: 25,
			b: 'Some text',
			src: 'http://sh.uploads.ru/zKMix.jpg'
		},
		{
			a: 20,
			b: 'Second text',
			src: 'http://lionwebstudio.ru/img/js.png'
		},
		{
			a: 47,
			b: 'End text',
			src: 'http://www.ps-webforge.com/img/javascript.png'
		}
	]
});

document.body.innerHTML = a.render();
```
