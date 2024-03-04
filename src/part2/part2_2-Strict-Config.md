# Strictness

==> Cấu hình trong **tsconfig.json**
```json
{
    "compilerOptions": {
        "strict": true,
        // "noImplicitAny": true,          
        // "strictNullChecks": true,
        // "strictFunctionTypes": true,
        // "strictBindCallApply": true,
        // "strictPropertyInitialization": true,
        // "noImplicitThis": true,
        // "useUnknownInCatchVariables": true,
        // "alwaysStrict": true,   
    }
}
```

1. Strict flag là gì?

2. Option: noImplicitAny

- Khi **TypeScript không thể xác định được kiểu dữ liệu** của một biến nào đó, thì biến đó được mang kiểu dữ liệu **any**

- Khi bật lên **true**, nó sẽ báo lỗi nếu có trường hợp kiểu là **any**, ngược lại bỏ qua lỗi này. 

3. Option: strictNullChecks

- Khi bật lên **true** ==> sẽ báo lỗi khi **null/undefined** được sử dụng không đúng. EX: Khi gọi các method của Number, Array, String, ...

- Khi config **false** thì sẽ bỏ qua, nhưng có rủi ro xảy ra lỗi lúc runtime.

4. Option: alwaysStrict

- Khi bật len **true** ==> TypeScript sẽ **luôn parse files** ở chế độ **strict mode** và sẽ có "use strict" ở đầu file JavaScript được tạo ra. 

5. Other options

- **strictBindCallApply**: đảm bảo bind, call và apply được gọi đúng args(tham số) hàm được định nghĩa trước đấy.

- **strictFunctionTypes**: đảm bảo đúng dữ liệu cho **parameters** của function (không áp dụng cho method).

- **strictPropertyInitializer**: đảm bảo thuộc tính của class phải được khởi tạo

- **noImplicitThis**: đảm bảo là **this** không mang kiểu dữ liệu **any**

- **useUnknownInCatchVariables**: đảm bảo là biến trong **catch** là kiểu **unknown**

6. Summary