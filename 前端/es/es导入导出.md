script中无法使用import导入，如下所示

```html
<script type="text/javascript">
    import xx from './xx';
</script>
```

解决方法：（type属性值改为<font color="red">module</font>即可识别import）

```html
<script type="module">
    import xx from './xx';
</script>
```

