# Scope

[![Join the chat at https://gitter.im/dolphin4ik/scope](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dolphin4ik/scope?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
javascript micro, nano, atomic template engine

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
