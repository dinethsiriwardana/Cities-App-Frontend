const BASE_URL =
  "http://srilankalocationdetails.centralindia.azurecontainer.io:3000/api";
const filterType = document.getElementById("filterType");
const filterInputContainer = document.getElementById("filterInputContainer");
const filterInput = document.getElementById("filterInput");
const nearbyContainer = document.getElementById("nearbyContainer");
const latitudeInput = document.getElementById("latitudeInput");
const longitudeInput = document.getElementById("longitudeInput");
const fetchBtn = document.getElementById("fetchBtn");
const dataBody = document.getElementById("dataBody");

// Dynamic filter input visibility
filterType.addEventListener("change", function () {
  filterInputContainer.style.display = [
    "district",
    "province",
    "postcode",
    "search",
  ].includes(this.value)
    ? "block"
    : "none";

  nearbyContainer.style.display = this.value === "nearby" ? "block" : "none";
});

// Fetch data based on selected filter
fetchBtn.addEventListener("click", async function () {
  let endpoint = "";
  let params = "";

  switch (filterType.value) {
    case "district":
      endpoint = `/cities/district/${filterInput.value}`;
      break;
    case "province":
      endpoint = `/cities/province/${filterInput.value}`;
      break;
    case "postcode":
      endpoint = `/cities/postcode/${filterInput.value}`;
      break;
    case "search":
      endpoint = `/cities/search?q=${filterInput.value}&lang=en`;
      break;
    case "nearby":
      endpoint = `/cities/nearby?lat=${latitudeInput.value}&lon=${longitudeInput.value}&radius=${radiusInput.value}`;
      break;
    default:
      endpoint = "/cities";
  }

  try {
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
    console.log("Data fetched:", data);
    renderTable(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data. Check console for details.");
  }
});

// Render data to table
function renderTable(data) {
  dataBody.innerHTML = "";

  // Ensure data is an array
  const dataArray = Array.isArray(data) ? data : [data];

  dataArray.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.city_name_en || "N/A"}</td>
            <td>${item.district_name_en || "N/A"}</td>
            <td>${item.province_name_en || "N/A"}</td>
            <td>${item.postcode || "N/A"}</td>
        `;
    dataBody.appendChild(row);
  });
}

// Sorting function
function sortTable(columnIndex) {
  const rows = Array.from(dataBody.querySelectorAll("tr"));
  const sortedRows = rows.sort((a, b) => {
    const aText = a
      .getElementsByTagName("td")
      [columnIndex].textContent.toLowerCase();
    const bText = b
      .getElementsByTagName("td")
      [columnIndex].textContent.toLowerCase();
    return aText.localeCompare(bText);
  });

  // Clear current rows
  dataBody.innerHTML = "";

  // Append sorted rows
  sortedRows.forEach((row) => dataBody.appendChild(row));
}
