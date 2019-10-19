//alert("TRUMP is a TOTAL DOUCHE BAG");

const containers = document.querySelectorAll(
  ".values > [data-layout='columns_new']"
);

const colArr = Array.from(containers);
//console.log(colGroup.length);

colArr.forEach(layout => {
  const numSelect = layout.querySelector(".num_col .acf-input select");
  numSelect.onchange = function() {
    const count = numSelect.value;
    const width = 100 / count;
    const def = 12 / parseInt(count);
  };

  const columns = layout.querySelectorAll(
    ".acf-input .values > [data-layout='Column']"
  );
  console.log(columns.length);
  const colWrap = layout.querySelectorAll(".col-width");
  //console.log(colWrap.length);
  //   colWrap.forEach(wrap => {
  //     const colWidth = wrap.querySelectorAll(".col-width");
  //     console.log(colWidth.length);
  //   });
});

// const setDefaults = c => {
//   const def = 12 / parseInt(c);
//   switch (c) {
//     case "1":
//       $(desktop).val(def);
//       $(tablet).val(def);
//       $(phone).val(12);
//       break;
//     case "2":
//       $(desktop).val(def);
//       $(tablet).val(def);
//       $(phone).val(def);
//       break;
//     case "3":
//       $(desktop).val(def);
//       $(tablet).val(def);
//       $(phone).val(12);
//       break;
//     case "4":
//       $(desktop).val(def);
//       $(tablet).val(6);
//       $(phone).val(12);
//       break;
//   }
// };
