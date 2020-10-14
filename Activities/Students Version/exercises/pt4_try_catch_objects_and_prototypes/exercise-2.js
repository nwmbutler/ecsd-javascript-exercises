// What's so special about finally?

try {
    console.log("This is try")
    return "Hello"
} catch (error) {
    console.log(error)
} finally {
    console.log("This always logs")
}
console.log("This is outside");