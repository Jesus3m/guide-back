import fs from 'fs'

export const readJsonFile = (path: string) => {
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }))
}
