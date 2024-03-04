# Khai báo trong TS

1. **Explicit type**: Khai báo tường minh
ex:
```ts
const count: number = 12
```

2. **Infered type**: Khai báo suy diễn - TS tự nhận kiểu dữ liệu
ex:
```ts
const count = 12
```
 ==> Mặc định xem **count** là **number**

3. **Eraised type**: Sau khi compile từ TS sang JS => Tất cả type annotation sẽ bị loại bỏ
ex: 
```ts
    const count: number = 12
```

```js
    var count = 12
```

4. **Downleveling**:
==> Tuỳ vào **target** mà code sau khi được **compile** ra JavaScript sẽ khác nhau để đảm bảo **target enviroment** có thể hiểu và thực thi được code mình viết bên TypeScript
