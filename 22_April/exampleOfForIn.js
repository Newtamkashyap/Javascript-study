function student() {
    const s = { studentName: "john", rollNo: 1, course: "B.tech" };
    for (let key in s) {
        console.log(`${key}:${s[key]}`)
    }
}
student()