// Our object: Person Account
const personAccount = {
    firstName: 'Abdihakim Mahamed',
    lastName: 'Omar',
    income: [],
    expenses: [],

    // Calculate total income
    totalIncome: function() {
        let sum = 0;
        for(let i = 0; i < this.income.length; i++) {
            sum += this.income[i].amount;
        }
        return sum;
    },
    // Calculate total expenses
    totalExpense: function() {
        let sum = 0;
        for(let i = 0; i < this.expenses.length; i++) {
            sum += this.expenses[i].amount;
        }
        return sum;
    },
    // Add new income
    addIncome: function(amount, description) {
        this.income.push({amount, description})
    },

    //Add new expense
    addExpense: function(amount, description) {
        this.expenses.push({amount, description})
    },

      // Get account balance
      accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
      },

      // Info summary
      accounInfo: function() {
        return `${this.firstName}, ${this.lastName}, has total income: ${this.totalIncome()},
        total expense: ${this.totalExpense()}, and balance: ${this.accountBalance()}.`
      }
};
// ===== DOM Manipulation =====
const accounInfoEl = document.getElementById('accountInfo');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const balance = document.getElementById('balance');

// Update UI
function UpdateUI() {
    accounInfoEl.textContent = personAccount.accounInfo();
    totalIncomeEl.textContent = personAccount.totalIncome();
    totalExpenseEl.textContent = personAccount.totalExpense();
    balance.textContent = personAccount.accountBalance();
};

// Handle Add Income
document.getElementById('addIncomeBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    const desc = document.getElementById('incomeDesc').value;

    if(!isNaN(amount) && desc !== '') {
        personAccount.addIncome(amount, desc);
        UpdateUI()
    }
});


// Handle Add Expense
document.getElementById('addExpenseBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const desc = document.getElementById('incomeDesc').value;

    if(!isNaN(amount) && desc !== '') {
        personAccount.addExpense(amount, desc);
        UpdateUI();
    }
});

// UpdateUI();