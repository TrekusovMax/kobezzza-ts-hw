//#### Асинхронные Деструкторы объектов: обертка для файловых дескрипторов


import * as fs from "node:fs/promises"

class File {
    constructor(public handle: fs.FileHandle) { }
    async [Symbol.asyncDispose]() {
        try {
            await this.handle.close()
            console.log(`FD ${this.handle.fd} closed`)
            
        } catch (error) {
            console.error(`Failed to close FD ${this.handle.fd}:`, error)
        }
        
    }
}

(async () => {
    await using file = new File(await fs.open("./example.txt", "w"));
    await using file2 = new File(await fs.open("./example2.txt", "r"));

    await file.handle.write("test");
    await file2.handle.write("test"); // Исключение, но все файловые дескрипторы должны закрыться
})()
