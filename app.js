// Compiled by Langlang.coly
let stack = [];
(() => {
    // push (ELSE)
    stack.push(
        1
    );
    // push (ELSE)
    stack.push(
        1
    );
    a = stack.pop(); b = stack.pop(); stack.push(b == a);
    if (stack.pop()) {
        stack.push(
            "One is equal to one!"
        );
        console.log(stack.pop());
    } else {
        stack.push(
            "One is not equal to one!"
        );
        console.log(stack.pop());
    }
    // push (ELSE)
    stack.push(
        10
    );
    while (true) {
        stack.push(stack[stack.length - 1]);
        console.log(stack.pop());
        stack.push(stack[stack.length - 1]);
        // push (ELSE)
        stack.push(
            0
        );
        a = stack.pop(); b = stack.pop(); stack.push(b == a);
        if (stack.pop()) {
            break;
        }
        // push (ELSE)
        stack.push(
            1
        );
        a = stack.pop(); b = stack.pop(); stack.push(b - a);
    }

})();