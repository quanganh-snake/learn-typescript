// LINK: https://www.typescriptlang.org/docs/handbook/type-compatibility.html

// 1. Default function return type
// TypeScript sẽ tự suy diễn kiểu dữ liệu cho function

// ts: function getName(): void
function getName() {
    console.log('Hi Name');
}

// ts: function getTotal(a: number, b: number): number
function getTotal(a: number, b: number) {
    return a + b;
}


// ts: function getTotal(a: number, b: number): number
function getTotal2(a: number, b: number): number {
    // return a + b.toString(); //-> ts error: Type 'string' is not assignable to type 'number
    return a + b;
}

// 2. Optional and default parameters
/**
 * Thêm dấu ? sau tham số => chỉ định tham số đó có thể truyền hoặc không cần truyền
 * 
 */

// 2.1. Optional parameters
// ts: function getLength(numberList?: number[] | undefined): number
function getLength(numberList?: number[]) {
    return Array.isArray(numberList) ? numberList.length : 0;
}

// 2.2. Default parameters
// function getLength2(numberList: number[] = []):number
function getLength2(numberList: number[] = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
}

// Lưu ý: Không thể kết hợp cả optional và default parameters
// ts error
// function getLengthError(numberList?: number[] = []) {
//     return Array.isArray(numberList) ? numberList.length : 0;
// }

// 2.3. Function Overload : Nạp chồng hàm
// Là 1 hàm, nhưng khai báo có tham số/số lượng tham số khác nhau
// Lưu ý: Các tham số ở cùng 1 vị trí cần khai báo kiểu dữ liệu giống nhau
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d)
    } else {
        return new Date(mOrTimestamp)
    }
}

// 2.4. Void
function checkout() {
    return;
}

function checkout2() { }
// 2.5. Never
type Newtype = number & string; // never
function fail(msg: string): never {
    throw new Error(msg);
}

function checkKey(x: string | number) {
    if (typeof x === 'string') {
        // TODO
    } else if (typeof x === 'number') {
        // TODO else
    } else {
        x; // has type 'never
    }
}

// 2.6. Destructuring parameters
// Những hàm có nhiều tham số nên gộp thành 1 object và tạo type cho nó
// Rõ ràng code hơn

// TH1: Chưa dùng destructuring parameters
function createEmployee(id: number, name: string, age: number, sallary: number) {
    console.log(id, name, age, sallary);
}

createEmployee(1, 'T1', 22, 22222);

// TH2: Dùng destructuring parameters
function createEmployee2(employee: { id: number, name: string, age: number, sallary: number }) {
    const { id, name, age, sallary } = employee
    console.log(id, name, age, sallary);
}

createEmployee2({
    id: 2, name: 'T2', age: 23, sallary: 30000
});

// TH3: Dùng destructuring ngay khi khai báo
function createEmployee3({ id, name, age, sallary }: { id: number, name: string, age: number, sallary: number }) {
    console.log(id, name, age, sallary);
}

createEmployee3({
    id: 3, name: 'T3', age: 33, sallary: 30000
});

// TH4: Định nghĩa trước kiểu dữ liệu -> desctructuring
interface Employees {
    readonly id: number | string;
    name: string;
    age: number;
    sallary: number;
}

function createEmployee4({ id, name, age, sallary }: Employees) {
    console.log(id, name, age, sallary);
}

createEmployee4({
    id: 3, name: 'T3', age: 33, sallary: 30000
});