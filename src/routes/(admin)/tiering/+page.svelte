
<div class="container-fluid">
<div class="row">
    <div class="col-xl-12 col-xxl-12">
      <div class="container">
        <h1 class="text-center mb-4">Tiering Calculator</h1>

        <!-- Form Start -->
        <form id="tierForm">
            <div class="mb-3">
                <label for="staffQty" class="form-label">Staff Qty</label>
                <select id="staffQty" class="form-control">
                    <option value="0">Choose</option>
                    <option value="10">Below 100</option>
                    <option value="20">Above 100</option>
                    <option value="25">250 Plus</option>
                    <option value="30">500 Plus</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="assets" class="form-label">Assets available</label>
                <select id="assets" class="form-control">
                    <option value="0">Choose</option>
                    <option value="10">25 to 50</option>
                    <option value="20">50 to 75</option>
                    <option value="25">75 to 100</option>
                    <option value="30">100 plus</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="income" class="form-label">Income</label>
                <select id="income" class="form-control">
                    <option value="0">Choose</option>
                    <option value="5">Monthly &lt; $100</option>
                    <option value="10">Monthly &lt; $1000</option>
                    <option value="15">Monthly &lt; $5000</option>
                    <option value="20">Monthly &lt; $10000</option>
                    <option value="25">Monthly &gt; $25000</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="weight" class="form-label">Weight of Product</label>
                <select id="weight" class="form-control">
                  <option value="0">Choose</option>
                    <option value="5">Monthly &lt; 1 Ton</option>
                    <option value="10">Monthly &lt; 2.5 Ton</option>
                    <option value="15">Monthly &lt; 5 Ton</option>
                    <option value="20">Monthly &lt; 10 Ton</option>
                    <option value="25">Monthly &gt; 10 Ton</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="reputation" class="form-label">Reputation</label>
                <select id="reputation" class="form-control">
                  <option value="0">Choose</option>
                    <option value="2">Local SME</option>
                    <option value="4">Charity</option>
                    <option value="6">Govt</option>
                    <option value="8">Multi-national</option>
                    <option value="10">Global</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="network" class="form-label">Network</label>
                <select id="network" class="form-control">
                    <option value="0">Choose</option>
                    <option value="10">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>

            <button type="button" class="btn w-100 text-white" style="background-color: #224335;" on:click={calculateTier}>Calculate Tier</button>
        </form>

        <!-- Result Section -->
        <div class="result mt-4" id="result" style="display:none;">
            <p>Total Points: <span id="totalPoints"></span></p>
            <p class="tier" id="tier"></p>
        </div>
    </div>
    </div>
  </div>
</div>

<style>
    
    .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .result {
        margin-top: 20px;
        padding: 15px;
        background-color: #e7f7e7;
        border: 1px solid #d1f2d1;
        border-radius: 4px;
    }
    .tier {
        font-size: 20px;
        font-weight: bold;
    }
</style>

<script>
      
    function calculateTier() {
          // Get selected values
          let staffPoints = parseInt(document.getElementById('staffQty').value);
          let assetPoints = parseInt(document.getElementById('assets').value);
          let incomePoints = parseInt(document.getElementById('income').value);
          let weightPoints = parseInt(document.getElementById('weight').value);
          let reputationPoints = parseInt(document.getElementById('reputation').value);
          let networkPoints = parseInt(document.getElementById('network').value);

          // Calculate total points
          let totalPoints = staffPoints + assetPoints + incomePoints + weightPoints + reputationPoints + networkPoints;

          // Determine tier based on total points
          let tier = '';
          if (totalPoints > 70) {
              tier = 'Tier 1';
          } else if (totalPoints >= 50) {
              tier = 'Tier 2';
          } else if (totalPoints >= 30) {
              tier = 'Tier 3';
          } else {
              tier = 'Tier 4';
          }

          // Display results
          document.getElementById('totalPoints').textContent = totalPoints;
          document.getElementById('tier').textContent = tier;
          document.getElementById('result').style.display = 'block';
      }
  </script>
