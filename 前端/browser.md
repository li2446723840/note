```js
// 监听浏览器tab切换，tab显示时判断vuex里的用户id与接口获取的用户id是否相等，不相等刷新当前页面。
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
      // 调接口获取用户id
        getUserId().then(({ code, data, msg }) => {
          if (code === 0) {
            if (data.id !== this.$store.state.UserInfo.id) {
              location.reload();
            }
          } else {
            this.$message.error(msg);
          }
        });
      }
    });
```
