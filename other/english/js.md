prevent����ֹ

default��Ĭ��

```js
function stopDefault(e){
    e.preventDefault();//��ֹĬ���¼�
}
```

propagation����������չ������������

bubble��ð�ݣ�����

```js
function stopBubble(e){
	e.stopPropagation();//��ֹ�¼�ð��
}
```

parse������

```js
JSON.parse();//���ַ���ת��Ϊjson����
JSON.toStringify();//��json����ת��Ϊ�ַ���
```

instance��ʵ�������ӣ�ʵ������...Ϊ��

```js
let str = "�ַ���";
console.log(str instanceof String);//true
```

plugin����������