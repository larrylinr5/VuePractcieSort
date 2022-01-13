import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.prod.min.js";

const app = createApp({
  data() {
    return {
      products: [
        {
          name: "巧呼呼蘇打水",
          price: 30,
          expiryDate: 90,
        },
        {
          name: "心驚膽跳羊肉飯",
          price: 65,
          expiryDate: 2,
        },
        {
          name: "郭師傅武功麵包",
          price: 32,
          expiryDate: 1,
        },
        {
          name: "不太會過期的新鮮牛奶",
          price: 75,
          expiryDate: 600,
        },
        {
          name: "金殺 巧粒粒",
          price: 120,
          expiryDate: 200,
        },
      ],
      //isReverse排序預設false => 由小到大
      isReverse: false,
      //排序的欄位
      field: "",
    };
  },
  computed: {
    computeData() {
      const vm = this;

      /** 排序功能 */
      const sortList = (isReverse, field) =>
        vm.products.sort((a, b) =>
          isReverse ? -(a[field] - b[field]) : a[field] - b[field]
        );

      switch (vm.field) {
        //價格排序
        case "price":
          return sortList(vm.isReverse, "price");
        //到期日排序
        case "expiryDate":
          return sortList(vm.isReverse, "expiryDate");
        //預設
        default:
          return vm.products;
      }
    },
  },
});

app.mount("#app");
