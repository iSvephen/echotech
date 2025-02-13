<script>
    // Our table data: each row has a service and its prices.
    let tableData = [
      { service: "General E-Waste Recycling", unit: "KG", T1: 0.948, T2: 1.106, T3: 1.264, T4: 1.58, custom: "" },
      { service: "Smartphone Recycling", unit: "KG", T1: 0.541, T2: 0.623, T3: 0.712, T4: 0.803, custom: "" },
      { service: "Laptop Recycling", unit: "KG", T1: 0.832, T2: 1.045, T3: 1.246, T4: 1.523, custom: "" },
      { service: "Desktop Computers Recycling", unit: "KG", T1: 1.125, T2: 1.263, T3: 1.499, T4: 1.786, custom: "" },
      { service: "CRT Monitors Recycling", unit: "KG", T1: 2.003, T2: 2.352, T3: 2.598, T4: 3.009, custom: "" },
      { service: "LED/LCD TVs Recycling", unit: "KG", T1: 1.002, T2: 1.134, T3: 1.381, T4: 1.579, custom: "" },
    ];
  
    // When a column header is clicked, we store that as the active column selection.
    // When non-null, it means every row's cell in that column is selected.
    let columnSelection = null; // e.g., "T1", "T2", "T3", "T4", or "custom"
  
    // Individual selections: we store a mapping of row index → column name.
    // Only one selection per row is allowed.
    let individualSelections = {};
  
    // Called when the user clicks on a column header.
    // Clears any individual selections and selects the entire column.
    function selectColumn(column) {
      columnSelection = column;
      individualSelections = {};
    }
  
    // Called when a user clicks on an individual cell.
    // If a column selection is active, clear it.
    // Then, toggle the cell in that row.
    function toggleCell(rowIndex, column) {
      if (columnSelection !== null) {
        // If any column is active, clear it before doing an individual toggle.
        columnSelection = null;
      }
      // If the same cell is already selected, toggle it off.
      if (individualSelections[rowIndex] === column) {
        delete individualSelections[rowIndex];
      } else {
        // Replace any existing selection for that row.
        individualSelections[rowIndex] = column;
      }
      // Reassign to trigger reactivity.
      individualSelections = { ...individualSelections };
    }
  
    // Build the JSON output.
    // If a column selection is active, output every row with that column.
    // Otherwise, output only those rows with an individual selection.
    $: selectedJson = columnSelection 
      ? tableData.map((row, rowIndex) => ({
          service: row.service,
          unit: row.unit,
          column: columnSelection,
          price: row[columnSelection]
        }))
      : Object.entries(individualSelections).map(([rowIndex, col]) => {
          const row = tableData[rowIndex];
          return {
            service: row.service,
            unit: row.unit,
            column: col,
            price: row[col]
          };
        });
  </script>
  
  <style>
    /* Highlight selected cells */
    .selected {
      background-color: yellow;
    }
    th, td {
      cursor: pointer;
    }
    input {
      cursor: default;
    }
  </style>
  
  <div class="table-responsive">
    <table id="myTable" class="table table-bordered">
      <thead style="background-color: #224335; color: white;">
        <tr>
          <th>ITAD - IT Asset Purchasing &amp; Resale</th>
          <th>Unit</th>
          <!-- Clicking a header selects the entire column -->
          <th on:click={() => selectColumn("T1")}>T1</th>
          <th on:click={() => selectColumn("T2")}>T2</th>
          <th on:click={() => selectColumn("T3")}>T3</th>
          <th on:click={() => selectColumn("T4")}>T4</th>
          <th on:click={() => selectColumn("custom")}>Custom</th>
        </tr>
      </thead>
      <tbody>
        {#each tableData as row, i}
          <tr>
            <th>{row.service}</th>
            <td>{row.unit}</td>
            <!-- For non-custom columns -->
            <td 
              class:selected={ columnSelection ? (columnSelection === "T1") : (individualSelections[i] === "T1") }
              on:click={() => toggleCell(i, "T1")}>
              {row.T1}
            </td>
            <td 
              class:selected={ columnSelection ? (columnSelection === "T2") : (individualSelections[i] === "T2") }
              on:click={() => toggleCell(i, "T2")}>
              {row.T2}
            </td>
            <td 
              class:selected={ columnSelection ? (columnSelection === "T3") : (individualSelections[i] === "T3") }
              on:click={() => toggleCell(i, "T3")}>
              {row.T3}
            </td>
            <td 
              class:selected={ columnSelection ? (columnSelection === "T4") : (individualSelections[i] === "T4") }
              on:click={() => toggleCell(i, "T4")}>
              {row.T4}
            </td>
            <!-- For the "custom" column, which uses an input -->
            <td 
              class:selected={ columnSelection ? (columnSelection === "custom") : (individualSelections[i] === "custom") }>
              <input 
                type="number" 
                bind:value={row.custom} 
                on:click={(e) => { 
                  // Stop the click from bubbling up to avoid unwanted table-row clicks.
                  e.stopPropagation(); 
                  toggleCell(i, "custom");
                }}/>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  
  <!-- Display the selected items as JSON -->
  <div style="margin-top: 1rem;">
    <h3>Selected Prices JSON</h3>
    <pre>{JSON.stringify(selectedJson, null, 2)}</pre>
  </div>
  