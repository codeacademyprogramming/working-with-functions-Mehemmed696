// function fibonocci(d) {
//     let a = 0;
//     let b = 1;
//     result = b;
//     for (let i = 1; i < d; i++) {
//         console.log(result + "\n");
//         result = a + b;
//         a = b;
//         b = result;
//     }

// }
// fibonocci(6);

// function fib(n) {
//     if (n < 3) return 1;

//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4));


let balance = 400;

const getBalance = () => {
    alert("Balansiniz:" + balance)
    atm();
}

let withdraw;
let check = true;
atm();
function withdrawel() {

    do {

        withdraw = parseInt(prompt("meblegi daxil edin( 500$dan cox ola bilez!!!)"));
        if (!(withdraw < 0 || withdraw > 500)) {
            if (withdraw < balance) {
                if (withdraw > 300) {
                    withdraw += (withdraw - 300) * 0.04;
                    balance -= withdraw;
                    getBalance();
                }
                else {
                    balance -= withdraw;
                    getBalance();
                }
            }
            else if (balance <= 0) {
                alert("Balansinizda  mebleg yoxdur,hec bir emeliyyat yerine yetire bilmersiz!!!:")
                getBalance();
            }
            else {

                let key = parseInt(prompt("Balansinizda kifayet qeder mebleq yoxdur \n 25$ geri almaq isteyirsiniz? \n 1->yes \n 2->no"));


                if (key === 1) {
                    balance += 25;
                    getBalance();
                }
                else if (key === 2) {
                    getBalance();
                }
            }
            check = true;
        }
        else {
            alert("500den cox ola bilmez!!!")
            check = false;
        }
    } while (!check);
}

withdrawel(withdraw);










function exit() {
    let confirm_leave = confirm('You have selected exit.');
    if (confirm_leave) {

        confirm_leave.close();
    } else {
        atm();
    }
}





function error() {
    alert('Error: accepted numbers are 1 through 4.');
    atm();
}




function atm() {

    let choice = parseInt(prompt('Select a choice: \n 1.) Balance \n 2.) Withdraw \n 3.) Exit')); //prompt user for choice.

    if (choice === 1) {
        getBalance();
    } else if (choice === 2) {
        withdrawel();
    }
    else if (choice === 3) {
        exit();
    } else {
        error();
    }
}
atm();




// const deposit = () => {

// }


// if (withdraw > 300) {
//     withdraw += (withdraw - 300) * 0.04;
//     balance -= withdraw;
//     getBalance();
// }
// else {
//     balance -= withdraw;
//     getBalance();
// }

