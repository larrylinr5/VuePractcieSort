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
    computeData: function () {
      const vm = this;

      /** 由大到小排序 */
      const sortdown = (field) =>
        vm.products.sort((a, b) =>
          field === "price" ? a.price - b.price : a.expiryDate - b.expiryDate
        );

      /** 由小到大排序 */
      const sortup = (field) =>
        vm.products.sort((a, b) =>
          field === "price"
            ? -(a.price - b.price)
            : -(a.expiryDate - b.expiryDate)
        );

      switch (vm.field) {
        //價格排序
        case "price":
          return vm.isReverse === true ? sortup("price") : sortdown("price");
        //到期日排序
        case "expiryDate":
          return vm.isReverse === true
            ? sortup("expiryDate")
            : sortdown("expiryDate");
        //預設
        default:
          return vm.products;
      }
    },
  },
});

app.mount("#app");
