chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var data = request.data || {};
  switch (data.action) {
    case "OPEN_ALL_PRODUCTS": {
      openAllProducts();
      break;
    }
    case "OPEN_NOT_DEPLOY_PRODUCTS": {
      openNotDeployProducts();
      break;
    }
  }
});

const openAllProducts = () => {
  const $productLinks = document.querySelectorAll(".shopee-table__row .product-name-wrap");
  $productLinks.forEach((ele) => {
    window.open(ele.href, "_blank");
  });
};

const openNotDeployProducts = () => {
  const $products = document.querySelectorAll(".product-list-view.mtsku-list .shopee-table__row");

  $products.forEach((ele) => {
    const isDeployed = ele.querySelector(".region-item.not-unlist");
    if (!isDeployed) {
      const $product = ele.querySelector(".shopee-table__row .product-name-wrap");
      window.open($product.href, "_blank");
    }
  });
};
