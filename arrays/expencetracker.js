const account = {
  name: "Andrew Mead",
  expenses: [],
  income: [],
  addExpense: (description, amount) => {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: (description, amount) => {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: () => {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
