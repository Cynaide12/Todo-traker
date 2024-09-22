export const className = (classArr: string[]) => {
    let str = classArr.filter(Boolean).join(" ")
    return str
}