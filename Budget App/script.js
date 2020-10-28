document
  .querySelector("#update_budget")
  .addEventListener("click", updateBudget);

document.querySelector("#add_expense").addEventListener("click", addExpense);

let monthlyBudget = document.querySelector("#monthly_budget");
let incomeInput = document.querySelector("#income_Input");
let remainingBalance = document.querySelector("#remaining_balance");
let amountInput = document.querySelector("#amount_Input");
let nameInput = document.querySelector("#name_Input");
let expenseList= document.querySelector("#expense_list");
let totalExpenses= document.querySelector("#total_expenses");

let monthlyIncome = 0; 
let expenses = []; 
let expenseTotal = 0; 
let balance = 0; 
 
function updateBudget(event) { 
    event.preventDefault(); 
    monthlyBudget =incomeInput.value; 
    monthlyBudget.innerText = "$" + monthlyIncome; 
    incomeInput.value = ''; 
    updateBudget(); 
   
}



function updateBalance () { 
    balance = monthlyIncome - expenseTotal; 
    remainingBalance.innerText = "$" + balance; 
    if (balance < 0 ) { 
        remainingBalance.classList.remove('green'); 
        remainingBalance.classList.remove
('red'); 
    } else{ 
remainingBalance.classList.remove('red'); 
remainingBalance.classList.remove('green'); 

    }

}

function addExpense(event) { 
    event.preventDefault(); 
    let expense = { 
        expenseName: nameInput.value, 
        expenseAmount: amountInput.value 
    }
    let newExpense = document.createElement('p'); 
    
    newExpense.innerText = expense.expenseName + ": $ " + 
    expense.expenseAmount; 
    
    expenseList.appendChild(newExpense); 
    expenseAmount = parseInt(amountInput.value); 

    expense.push(expenseAmount); 
    nameInput.value = ' '; 
    amountInput.value = '';
    updateExpenseTotal();  
}

function updateExpenseTotal() { 
    expenseTotal = 0; 
    // expense = [900 , 100, 300]
    //
    //expenseTotal = 900
    //expenseTotal = 1000
    //expenseTotal = 1300

    for (let i = 0; i < expenses.length; i++) { 
        expenseTotal = expenseTotal + expenses[i]; 
    }
    totalExpenses.innerText = "$" + expenseTotal; 
    updateBalance(); 
}