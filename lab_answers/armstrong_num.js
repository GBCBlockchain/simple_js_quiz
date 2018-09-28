function armstrong_num() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var num = i**3 + j**3 + k**5
                console.log(num)
            }
        }
    }
}