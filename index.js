function introduction(name) {
    return `Hello, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning ${language}.`;
}
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

describe('introduction(name)', function() {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Aki")).toEqual("Hi, my name is Aki.");
    expect(introduction("Samip")).toEqual("Hi, my name is Samip.");
  })
})