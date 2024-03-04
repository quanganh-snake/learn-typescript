/**
 # Type System

1. Type System Overview

    - Kiểu nguyên thuỷ: **number, boolean, string, null, undefined, symbol**

    - Kiểu dữ liệu tham chiếu: **array, object, function**

    - Kiểu khác trong TypeScript: **any, unknown, void, never, ...**

    - Literal types: Chỉ định một giá trị cụ thể làm kiểu dữ liệu

            EX: + let count: 1
                + let name: 'Mary'
                + let isActive: true

2. Type Alias vs Interface

3. Function

4. Enum

5. Generics

6. Utility types

7. And more
 */

// Literal types

let count_Total: 1
let nameMain: 'Mary'

const stt = 1 // stt sẽ được sét có kiểu dữ liệu là 1

// Muốn object chỉ có thể đọc, không thể update
// Áp dụng với object và array
const student = {
    id: 1,
    name: 'Quang Anh'
} as const;

// Type casting: Ép kiểu !== Type Assertions
// Type Assertions: Chỉ định tường minh
function getStatusName(state: 'active') {
    console.log(state);
}

let s = 'active'; // let s: string
// Cách chỉ định tường minh 1: let s: 'active' = 'active'
// Cách chỉ định tường minh 2: const s = 'active'
// Cách chỉ định tường minh 3: s as 'active'
getStatusName(s as 'active') // chỉ định tường minh s là kiểu 'active'

