export const jsonToBuffer = (data: any) => {
    const buffer = Buffer.from(JSON.stringify(data))
    return buffer
}
