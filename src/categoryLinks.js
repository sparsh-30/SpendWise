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
  color: '#1f77b4',
  expense: false,
});
incomeCategoryList.set('Interest', {
  categoryTitle: 'Interest',
  categoryLink: interest,
  color: '#ff7f0e',
  expense: false,
});
incomeCategoryList.set('Investment', {
  categoryTitle: 'Investment',
  categoryLink: investment,
  color: '#2ca02c',
  expense: false,
});
incomeCategoryList.set('Lend', {
  categoryTitle: 'Lend',
  categoryLink: lend,
  color: '#d62728',
  expense: false,
});
incomeCategoryList.set('Pension', {
  categoryTitle: 'Pension',
  categoryLink: pension,
  color: '#9467bd',
  expense: false,
});
incomeCategoryList.set('Profit', {
  categoryTitle: 'Profit',
  categoryLink: profit,
  color: '#8c564b',
  expense: false,
});
incomeCategoryList.set('Real Estate', {
  categoryTitle: 'Real Estate',
  categoryLink: real_estate,
  color: '#e377c2',
  expense: false,
});
incomeCategoryList.set('Salary', {
  categoryTitle: 'Salary',
  color: '#7f7f7f',
  categoryLink: salary,
  expense: false,
});
incomeCategoryList.set('Trade', {
  categoryTitle: 'Trade',
  categoryLink: trade,
  color: '#bcbd22',
  expense: false,
});

// Expense Categories Hash Map
const expenseCategoryList = new Map();

expenseCategoryList.set('Education', {
  categoryTitle: 'Education',
  categoryLink: education,
  color: '#17becf',
  expense: true,
});
expenseCategoryList.set('Entertainment', {
  categoryTitle: 'Entertainment',
  categoryLink: entertainment,
  color: '#aec7e8',
  expense: true,
});
expenseCategoryList.set('Groceries', {
  categoryTitle: 'Groceries',
  categoryLink: groceries,
  color: '#ffbb78',
  expense: true,
});
expenseCategoryList.set('Healthcare', {
  categoryTitle: 'Healthcare',
  categoryLink: healthcare,
  color: '#98df8a',
  expense: true,
});
expenseCategoryList.set('House Rent', {
  categoryTitle: 'House Rent',
  categoryLink: house_rent,
  color: '#ff9896',
  expense: true,
});
expenseCategoryList.set('Insurance', {
  categoryTitle: 'Insurance',
  categoryLink: insurance,
  color: '#c5b0d5',
  expense: true,
});
expenseCategoryList.set('Loan', {
  categoryTitle: 'Loan',
  categoryLink: loan,
  color: '#c49c94',
  expense: true,
});
expenseCategoryList.set('Maintenance', {
  categoryTitle: 'Maintenance',
  categoryLink: maintenance,
  color: '#f7b6d2',
  expense: true,
});
expenseCategoryList.set('Others', {
  categoryTitle: 'Others',
  categoryLink: others,
  color: '#c7c7c7',
  expense: true,
});
expenseCategoryList.set('Savings', {
  categoryTitle: 'Savings',
  categoryLink: savings,
  color: '#dbdb8d',
  expense: true,
});
expenseCategoryList.set('Transportation', {
  categoryTitle: 'Transportation',
  categoryLink: transportation,
  color: '#9edae5',
  expense: true,
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
  res.sort((a, b) => {
    let c1 = a.categoryTitle;
    let c2 = b.categoryTitle;
    if (c1 > c2) return 1;
    else if (c1 < c2) return -1;
    return 0;
  });
  return res;
};

// Function to get the category object from the category title
const getObjectFromCategoryName = categoryName => {
  // console.log()
  return allCategoryList.get(categoryName);
};

export {
  getIncomeCategoryArray,
  getExpenseCategoryArray,
  getAllCategoryArray,
  getObjectFromCategoryName,
};
