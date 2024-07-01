var budget = document.getElementById('budget-num');
var expense = document.getElementById('expense-num');
var amount = document.getElementById('amount');
var balance = document.getElementById('balance');
var expense_show = document.getElementById('expense');

var initialBudget = 0;
var totalExpenses = 0;

function budgetbtn() {
    initialBudget = parseFloat(budget.value);
    amount.innerText = `${initialBudget}`;
    balance.innerText = `${initialBudget}`;
    totalExpenses = 0; 
    expense_show.innerText = `${totalExpenses}`;
}

function expensebtn() {
    var expenseValue = parseFloat(expense.value);

    if (initialBudget - (totalExpenses + expenseValue) < 0) {
        Swal.fire({
            icon: "error",
            title: "Add new budget",
            text: "Insufficient budget! Please set a new budget",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          
        return; 
    }

    totalExpenses += expenseValue;
    var remainingBalance = initialBudget - totalExpenses;
    expense_show.innerText = `${totalExpenses}`;
    balance.innerText = `${remainingBalance}`;
}

let toggle = document.getElementById('toggle');
let isBlack = false;

toggle.addEventListener('click', () => {
    if (isBlack) {
        // Set body background to white and text color to black
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        
    } else {
        // Set body background to black and text color to white
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    // Toggle the state
    isBlack = !isBlack;
});

  