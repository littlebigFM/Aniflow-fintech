// transactionUtilities.js

// Filter transactions
export const filterTransactions = (transactions = [], filters = {}) => {
  const {
    status = "All",
    type = "All",
    startDate = "",
    endDate = "",
  } = filters;

  return transactions.filter((tx) => {
    const statusMatch = status === "All" || tx.status === status;
    const typeMatch = type === "All" || tx.type === type;

    const dateMatch =
      !startDate ||
      !endDate ||
      (new Date(tx.date) >= new Date(startDate) &&
        new Date(tx.date) <= new Date(endDate));

    return statusMatch && typeMatch && dateMatch;
  });
};

// Sort transactions
export const sortTransactions = (transactions = [], sortBy = "All") => {
  const sorted = [...transactions];

  switch (sortBy) {
    case "Today":
      return sorted.filter(
        (tx) => new Date(tx.date).toDateString() === new Date().toDateString()
      );
    case "Yesterday":
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return sorted.filter(
        (tx) => new Date(tx.date).toDateString() === yesterday.toDateString()
      );
    case "This Week":
      const now = new Date();
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return sorted.filter(
        (tx) =>
          new Date(tx.date) >= startOfWeek && new Date(tx.date) <= endOfWeek
      );
    case "This Month":
      const thisMonth = new Date().getMonth();
      return sorted.filter((tx) => new Date(tx.date).getMonth() === thisMonth);
    default:
      return sorted;
  }
};
