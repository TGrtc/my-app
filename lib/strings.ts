export const strings = {
  savingsGoal: "What\u2019s your savings goal?",
  congratulations: "Congratulations! You\u2019ve reached your savings goal! 🎉",
  keepGoing: (amount: number) => `Keep going! You need $${amount} more to reach your goal.`
} as const; 