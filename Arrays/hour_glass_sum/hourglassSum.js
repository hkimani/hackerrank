
// Solution using sliding window
function hourglassSum(arr) {
    let window = {
        // Top left, row, column
        tl: { r: 0, c: 0 },
        tr: { r: 0, c: 2 },

        // Bottom left, row, column
        bl: { r: 2, c: 0 },
        br: { r: 2, c: 2 }
    }
    let windowInitial = {}
    function moveRight() {
        window.tl.c += 1
        window.tr.c += 1
        window.bl.c += 1
        window.br.c += 1
    }

    function moveDown() {
        window.tl.r += 1
        window.tr.r += 1
        window.bl.r += 1
        window.br.r += 1
    }

    function sum() {
        var r1 = arr[window.tl.r][window.tl.c] + arr[window.tl.r][window.tl.c + 1] + arr[window.tr.r][window.tr.c];
        var r2 = arr[window.tl.r + 1][window.tl.c + 1]
        var r3 = arr[window.bl.r][window.bl.c] + arr[window.bl.r][window.bl.c + 1] + arr[window.br.r][window.br.c];
        return r1 + r2 + r3;
    }

    function resetWindow() {
        window = JSON.parse(JSON.stringify(windowInitial))
    }

    function updateResetState() {
        windowInitial = JSON.parse(JSON.stringify(window))
    }

    function scan() {
        let endRows = false;
        windowInitial = JSON.parse(JSON.stringify(window))

        var highest = sum()

        while (!endRows) {
            var windowSum = sum()
            if (windowSum > highest) {
                highest = windowSum;
            }
            if (arr[window.tr.r][window.tr.c + 1] !== undefined) {
                moveRight()
            } else {
                if (arr[window.br.r + 1] && arr[window.br.c] !== undefined) {
                    resetWindow()
                    moveDown()
                    updateResetState()
                } else {
                    endRows = true;
                    return highest
                }
            }
        }
    }

    return scan()
}

// var result = hourglassSum([[1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 9, 2, -4, -4, 0],
// [0, 0, 0, -2, 0, 0],
// [0, 0, -1, -2, -4, 0]])

// var result = hourglassSum([
//     [-1, -1, 0, -9, -2, -2],
//     [-2, -1, -6, -8, -2, -5],
//     [-1, -1, -1, -2, -3, -4],
//     [-1, -9, -2, -4, -4, -5],
//     [-7, -3, -3, -2, -9, -9],
//     [-1, -3, -1, -2, -4, -5],
// ])

var result = hourglassSum([
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8,-6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7],
])

console.log(result)
