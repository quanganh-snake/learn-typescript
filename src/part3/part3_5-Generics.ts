// 1. Generics
// => Generics là Kiểu dữ liệu:  nhận tham số và trả về kiểu dữ liệu tương ứng

interface EmployeeGenerics {
    id: number
    name: string
}

const numberList: Array<number> = [1, 2, 3] // 1 dạng của kiểu Generics: **Array** nhận kiểu dữ liệu là number
const eList: Array<EmployeeGenerics> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Worrd' },
]

// Định nghĩa 1 Generics
interface List<T> {
    length: number;
    [index: number]: T
}

const numberList2: List<number> = [1, 2, 3, 4]
numberList2.length

const empList: List<EmployeeGenerics> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Worrd' },
]

// 2. keyof: lấy danh sách key của 1 kiểu dữ liệu
// Cách dùng: tạo ra 1 Union Type chứa danh sách key
type eKeys = keyof EmployeeGenerics
const keys: eKeys = 'id'

// 3. Mapped types -> dùng theo kiểu Union và kế thừa thêm các key từ các interface khác
// Link: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type Student = {
    [Key in keyof EmployeeGenerics]: boolean
}

// EX Mapped types
// tạo mapped types nhận vào 1 Type => OptionsFlagssẽ lấy tất cả các thuộc tính từ loại Type và thay đổi giá trị của chúng thành giá trị boolean.
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>; // lúc này type FeatureOptions sẽ chứa các thuộc tính từ Features và chuyển về kiểu boolean
