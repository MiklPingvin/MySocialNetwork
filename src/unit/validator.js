export const required = (len) => (value)=>{
    if (value === '') return "Required!"
    else if (value.length > len) return `Must be ${len} characters or less`
}

