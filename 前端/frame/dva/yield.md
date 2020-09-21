如果yield call的是一个Promise对象，那只有在Promise返回的是resolve方法的情况下，下面跟着的yield put及后面的代码才会执行，若返回了rejector则后面的代码则全部停止执行

```js
effects: {
    * getInitInfo({ payload, callback }, { call, put }) {
        const response = yield call(provSystemJump, payload);
        if (callback && typeof callback === 'function') {
            callback(response);
        }
        yield put({
            type: 'init',
            payload: response,
        });
    },
}
```

