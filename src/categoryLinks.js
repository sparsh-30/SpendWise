import education from './../assets/categories/education.png';
import entertainment from './../assets/categories/entertainment.png';
import groceries from './../assets/categories/groceries.png';
import healthcare from './../assets/categories/healthcare.png';
import house_rent from './../assets/categories/house_rent.png';
import insurance from './../assets/categories/insurance.png';
import loan from './../assets/categories/loan.png';
import maintenance from './../assets/categories/maintenance.png';
import others from './../assets/categories/others.png';
import savings from './../assets/categories/savings.png';
import transportation from './../assets/categories/transportation.png';

const links = new Map();

links.set('education', education);
links.set('entertainment', entertainment);
links.set('groceries', groceries);
links.set('healthcare', healthcare);
links.set('house_rent', house_rent);
links.set('insurance', insurance);
links.set('loan', loan);
links.set('maintenance', maintenance);
links.set('others', others);
links.set('savings', savings);
links.set('transportation', transportation);

const getLinkFromCategoryName = categoryName => {
  return links.get(categoryName);
};

export default getLinkFromCategoryName;
