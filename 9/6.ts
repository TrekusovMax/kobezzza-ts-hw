// #### Деструкторы объектов: обертка для файловых дескрипторов

// Создайте обертку для работы с файловыми дескрипторами. 
// При освобождении обертки должен освобождаться и дескриптор.


import * as fs from "node:fs"

class File {
    constructor(public fd: number) { }
    [Symbol.dispose]() {
        try {
            fs.closeSync(this.fd)
            console.log(`FD ${this.fd} closed`);
            
        } catch (error) {
            console.error(`Failed to close FD ${this.fd}:`, error);
        }
        
    }
}

{
    using file = new File(fs.openSync("./example.txt", "w"));
    using file2 = new File(fs.openSync("./example2.txt", "r"));
    
    fs.writeSync(file.fd, "test");
    fs.writeSync(file2.fd, "test"); // Исключение, но все файловые дескрипторы должны закрыться
}
