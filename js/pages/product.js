import {
  productSelectionLogic,
  renderProductDetail,
  tabProductLogic,
} from "./../utils/helpers.js";

productSelectionLogic();

renderProductDetail();

setTimeout(() => {
  tabProductLogic();
}, 300);