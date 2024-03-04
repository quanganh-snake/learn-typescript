// Enum => Tập hợp các giá trị vào cùng 1 nhóm. Dễ quản lý, truy xuất
// EX:
// 1. number enum
// 2. string enum

// 3. Khi nào dùng enum? => Sử dụng cho data 1 chiều, định nghĩa enum --> dùng

// EX:
// 1. number enum
// Mặc định bắt đầu gán là 0
enum Status0 {
    PENDING,     // 0
    IN_PROGRESS, // 1
    DONE,        // 2
    CANCELLED,   // 3
}

const newSTT: Status0 = Status0.PENDING; // = 0
const newSTT2: Status0 = 1;
const newSTT3: Status0 = 3;

// number enum --> support reverse mapping
console.log(Status0[0]); // 'PENDING'
console.log(Status0['DONE']); // 2

// Có thể set giá trị mặc định bắt đầu
enum Status2 {
    PENDING = 3, // 3
    IN_PROGRESS, // 4
    DONE,        // 5
    CANCELLED,   // 6
}

// Có thể set giá trị cụ thể
enum Status3 {
    PENDING = 10,
    IN_PROGRESS = 20,
    DONE = 200,
    CANCELLED = 400,
}

// ----------------------------------------------------------------------------------------- //
// 2. string enum
// Chỉ đi 1 chiều, không có reverse.
enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml"
}

fetch("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
        Accept: MediaTypes.JSON
    }
}).then(response => {

})

// ----------------------------------------------------------------------------------------- //
// 3. Khi nào dùng enum
/**
 * 1. Không dùng định nghĩa cho phía server trả về data -> nên dùng **union types**
 * 
 */