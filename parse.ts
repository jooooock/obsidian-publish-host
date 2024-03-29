import {parseMarkdown} from "./src/backend/parser/index.ts";

const cache: Record<string, any> = {}

function iterateDir(dir: string, cache: Record<string, any>) {
    const items = Deno.readDirSync(dir)
    for (const item of items) {
        const name = `${dir}/${item.name}`
        if (item.isFile) {
            const key = name.replace(/^vault\//, '')
            if (name.endsWith('.md')) {
                cache[key] = parseMarkdown(Deno.readTextFileSync(name))
            } else {
                cache[key] = null
            }
        } else if (item.isDirectory) {
            iterateDir(name, cache)
        }
    }
}

iterateDir('vault', cache)

const banner = '// This file is automatically generated, do not modify it manually.\n\n'
const cacheFileContent = `${banner}export default ${JSON.stringify(cache)}`
Deno.writeTextFileSync('src/backend/cache.ts', cacheFileContent)

const msg = `
✅  cache 数据已生成，现在可以提交发布啦！🎉🎉🎉 

可运行以下命令在本地预览：
    $ deno task dev
或
    $ npm run dev
`
console.log(msg)
