// #### Деструкторы объектов: обертка для файловых дескрипторов

// Создайте обертку для работы с файловыми дескрипторами. 
// При освобождении обертки должен освобождаться и дескриптор.


import * as fs from "node:file"

class File {
    constructor(public fd: number) {}
}

{
    using file = new File(fs.openSync("./example.txt", "w"));
    using file2 = new File(fs.openSync("./example2.txt", "r"));
    
    fs.writeSync(file, "test");
    fs.writeSync(file2, "test"); // Исключение, но все файловые дескрипторы должны закрыться
}
