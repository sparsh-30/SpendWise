// Links of income categories
import dividend from './../assets/categories/income/dividend.png';
import interest from './../assets/categories/income/interest.png';
import investment from './../assets/categories/income/investment.png';
import lend from './../assets/categories/income/lend.png';
import pension from './../assets/categories/income/pension.png';
import profit from './../assets/categories/income/profit.png';
import real_estate from './../assets/categories/income/real_estate.png';
import salary from './../assets/categories/income/salary.png';
import trade from './../assets/categories/income/trade.png';

// Links of expense categories
import education from './../assets/categories/expense/education.png';
import entertainment from './../assets/categories/expense/entertainment.png';
import groceries from './../assets/categories/expense/groceries.png';
import healthcare from './../assets/categories/expense/healthcare.png';
import house_rent from './../assets/categories/expense/house_rent.png';
import insurance from './../assets/categories/expense/insurance.png';
import loan from './../assets/categories/expense/loan.png';
import maintenance from './../assets/categories/expense/maintenance.png';
import others from './../assets/categories/expense/others.png';
import savings from './../assets/categories/expense/savings.png';
import transportation from './../assets/categories/expense/transportation.png';

// Income Categories Hash Map
const incomeCategoryList = new Map();

incomeCategoryList.set('Dividend', {
  categoryTitle: 'Dividend',
  categoryLink: dividend,
});
incomeCategoryList.set('Interest', {
  categoryTitle: 'Interest',
  categoryLink: interest,
});
incomeCategoryList.set('Investment', {
  categoryTitle: 'Investment',
  categoryLink: investment,
});
incomeCategoryList.set('Lend', {
  categoryTitle: 'Lend',
  categoryLink: lend,
});
incomeCategoryList.set('Pension', {
  categoryTitle: 'Pension',
  categoryLink: pension,
});
incomeCategoryList.set('Profit', {
  categoryTitle: 'Profit',
  categoryLink: profit,
});
incomeCategoryList.set('Real Estate', {
  categoryTitle: 'Real Estate',
  categoryLink: real_estate,
});
incomeCategoryList.set('Salary', {
  categoryTitle: 'Salary',
  categoryLink: salary,
});
incomeCategoryList.set('Trade', {
  categoryTitle: 'Trade',
  categoryLink: trade,
});

// Expense Categories Hash Map
const expenseCategoryList = new Map();

expenseCategoryList.set('Education', {
  categoryTitle: 'Education',
  categoryLink: education,
});
expenseCategoryList.set('Entertainment', {
  categoryTitle: 'Entertainment',
  categoryLink: entertainment,
});
expenseCategoryList.set('Groceries', {
  categoryTitle: 'Groceries',
  categoryLink: groceries,
});
expenseCategoryList.set('Healthcare', {
  categoryTitle: 'Healthcare',
  categoryLink: healthcare,
});
expenseCategoryList.set('House Rent', {
  categoryTitle: 'House Rent',
  categoryLink: house_rent,
});
expenseCategoryList.set('Insurance', {
  categoryTitle: 'Insurance',
  categoryLink: insurance,
});
expenseCategoryList.set('Loan', {
  categoryTitle: 'Loan',
  categoryLink: loan,
});
expenseCategoryList.set('Maintenance', {
  categoryTitle: 'Maintenance',
  categoryLink: maintenance,
});
expenseCategoryList.set('Others', {
  categoryTitle: 'Others',
  categoryLink: others,
});
expenseCategoryList.set('Savings', {
  categoryTitle: 'Savings',
  categoryLink: savings,
});
expenseCategoryList.set('Transportation', {
  categoryTitle: 'Transportation',
  categoryLink: transportation,
});

// All Categories Hash Map
const allCategoryList = new Map([
  ...incomeCategoryList,
  ...expenseCategoryList,
]);

// Functions Related to Category Queries

// Function to get all income category objects in form of an array
const getIncomeCategoryArray = () => {
  const res = [...incomeCategoryList.values()];
  return res;
};

// Function to get all expense category objects in form of an array
const getExpenseCategoryArray = () => {
  const res = [...expenseCategoryList.values()];
  return res;
};

// Function to get all category objects in form of an array
const getAllCategoryArray = () => {
  const res = [...allCategoryList.values()];
  return res;
};

// Function to get the category object from the category title
const getObjectFromCategoryName = categoryName => {
  return allCategoryList.get(categoryName);
};

export {
  getIncomeCategoryArray,
  getExpenseCategoryArray,
  getAllCategoryArray,
  getObjectFromCategoryName,
};
