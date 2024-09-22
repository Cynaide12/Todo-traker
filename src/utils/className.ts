export const joinClasses = (classArr: string[]) => {
    let str = classArr.filter(Boolean).join(" ")
    return str
}