document.addEventListener('DOMContentLoaded', function () {
    const cont = document.querySelector(".container");
    let productsData = [];

    fetch("https://dummyjson.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(responseData => {
            console.log(responseData);
            productsData = responseData.products;
            showData(productsData);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    function showData(products) {
        const table = document.querySelector("#dataTable");
        table.innerHTML = "";
        const tableHead = document.createElement("tr");


        tableHead.innerHTML = `<th><input type="checkbox" class="checkbox" id="idCheckbox" checked>ID</th>
                               <th><input type="checkbox" class="checkbox" id="titleCheckbox" checked>Title</th>
                               <th><input type="checkbox" class="checkbox" id="descriptionCheckbox" checked>Description</th>`;

        table.appendChild(tableHead);


        products.forEach(product => {
            const trow = document.createElement("tr");
            trow.innerHTML = `<td>${product.id}</td>
                             <td>${product.title}</td> 
                             <td>${product.description}</td>`;
            table.appendChild(trow);
        });


        document.querySelectorAll(".checkbox").forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                updateTable();
            });
        });
    }

    // Update table based on checkbox state
    /* function updateTable() {
         const checkboxes = document.querySelectorAll(".checkbox");
         const table = document.querySelector("#dataTable");
         const rows = table.querySelectorAll("tr");

         rows.forEach(row => {
             const cells = row.querySelectorAll("td");
             checkboxes.forEach((checkbox, index) => {
                 cells[index].style.display = checkbox.checked ? "" : "none";
             });
         });
     }*/
    function updateTable() {
        const checkboxes = document.querySelectorAll(".checkbox");
        const table = document.querySelector("#dataTable");
        const rows = table.querySelectorAll("tr");

        rows.forEach((row, rowIndex) => {
            if (rowIndex === 0) return;
            const cells = row.querySelectorAll("td");
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.id === "idCheckbox") {
                    cells[0].style.display = checkbox.checked ? "" : "none";
                } else if (checkbox.id === "titleCheckbox") {
                    cells[1].style.display = checkbox.checked ? "" : "none";
                } else if (checkbox.id === "descriptionCheckbox") {
                    cells[2].style.display = checkbox.checked ? "" : "none";
                }
            });
        });
    }




    document.querySelector("#searchBtn").addEventListener("click", function () {
        const searchTerm = document.querySelector("#ip").value.trim().toLowerCase();
        console.log("Search Term:", searchTerm);
        const filteredProducts = productsData.filter(product => product.title.toLowerCase().includes(searchTerm));
        showData(filteredProducts);
    });
});









// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             showData(responseData.products);
//         })
//         .catch(error =>
//             console.error("Error fetching data:", error);
//         });

//     function showData(products) {
//         const table = document.querySelector("table");
//         table.innerHTML = "<tr><th>ID</th><th>Title</th><th>Description</th></tr>";
//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td>
//                              <td>${product.description}</td>`;
//             table.appendChild(trow);
//         });
//     }

//     function filterProductsByTitle(products, substring) {
//         return products.filter(product => product.title.toLowerCase().includes(substring.toLowerCase()));
//     }

//     function updateTableWithFilteredData(products) {
//         const table = document.querySelector("table");
//         table.innerHTML = "<tr><th>ID</th><th>Title</th><th>Description</th></tr>";
//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td>
//                              <td>${product.description}</td>`;
//             table.appendChild(trow);
//         });
//     }

//     document.querySelector("#searchBtn").addEventListener("click", function () {
//         const searchTerm = document.querySelector("#ip").value.trim();
//         console.log("Search Term:", searchTerm);
//         fetch("https://dummyjson.com/products")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(responseData => {
//                 const filteredProducts = filterProductsByTitle(responseData.products, searchTerm);
//                 updateTableWithFilteredData(filteredProducts);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     });
// });


