/**
 3.2. Type Alias vs Interface
 */

/* 3.2.1. Type Alias*/

// - Cách đặt tên mới cho 1 kiểu dữ liệu

/**
 * EX:
 */
type StudentName = string;
type StudentAge = number; // StudentAge -> tên mới thay cho kiểu **number**

/* 3.2.2. Type Interface*/
// - Cách đặt tên mới chỉ riêng cho 1 Object
// Trong Interface có thể **declaration merging** -> 1 Interface tạo nhiều lần, chứa các thuộc tính khác nhau thì sẽ tự gộp lại. Nhưng Type Alias không thể.
interface Declaration {
    id: number;
    name: string;
}
interface Declaration {
    age?: number;
}

const testDeclar: Declaration = {
    id: 1,
    name: 'test1'
}
// Object type
type Student1 = {
    readonly id: number; // bắt buộc có, **readonly** chỉ được phép đọc, không sửa - thêm mới vẫn được
    name: string; // bắt buộc có
    age?: number; // optional: Có thể có hoặc không
}

interface Student2 {
    readonly id: number; // bắt buộc có, **readonly** chỉ được phép đọc, không sửa - thêm mới vẫn được
    name: string; // bắt buộc có
    age?: number; // optional: Có thể có hoặc không
}

// Union Type
/**
 * Kiểu dữ liệu kết hợp 2 hoặc nhiều kiểu dữ liệu khác nhau -> tạo ra 1 kiểu mới
 */

// EX:
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface Student3 {
    id: number | string;
    name: string;
    gender: 'male' | 'female';
    grade: 'A' | 'B' | 'C';
}

let x: number | string = 1;
x = 'test';
x = 21;

// Intersection type
/**
 * Tính kế thừa
 * Gom các thuộc tính của các Interface -> tạo thành Type mới chứa các thuộc tính của các Interface đó
 * Cách dùng: type Includes12 = Interface1 & Interface2
 * Lưu ý: Trongg trường hợp các key trùng nhau thì cần có chung kiểu dữ liệu
 */

// EX: type way
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

// EX: interface way
interface IEmployee extends Identity, Contact { }
interface ICustomer extends BusinessPartner, Contact { }

let e: IEmployee = {
    id: 1,
    name: 'TBQA',
    email: 'tbqanh@gmail.com',
    phone: '0334350166'
}