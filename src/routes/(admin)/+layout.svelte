<script>
    import { currentUser } from '$lib/pocketbase';
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
    import { onMount } from 'svelte';
    import Toast from '$lib/components/Toast.svelte';

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

    // Create a derived store for the page title based on route
    const pageTitle = derived(page, $page => {
    const path = $page.url.pathname;
    // Remove leading slash and split into segments
    const segments = path.slice(1).split('/');
    // Get the first non-empty segment after (admin)
    const baseRoute = segments.filter(Boolean)[0] || 'dashboard';
    
    // Handle special cases
    if (baseRoute === 'clients' && segments.includes('archive')) {
        return 'Client Archive';
    }
    if (baseRoute === 'contracts' && segments.includes('archive')) {
        return 'Contract Archive';
    }
    if (baseRoute === 'company-info') {
        return 'Company Info';
    }
    
    // Convert to title case and replace hyphens with spaces
    return baseRoute
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

async function handleLogout(event) {
        event.preventDefault();
        try {
            // Clear any client-side auth state
            $currentUser = null;
            // Navigate to logout endpoint
            await goto('/logout');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    function toggleMenu() {
        const body = document.querySelector('body');
        body.classList.toggle('nav-toggle');
        body.classList.toggle('menu-toggle');
    }

    
    onMount(() => {     
        // Initialize MetisMenu
        if (typeof window !== 'undefined' && window.jQuery) {
            window.jQuery('.metismenu').metisMenu();
        }
    });


</script>
<svelte:head>
</svelte:head>


<style>
</style>

<!--**********************************
          Main wrapper start
      ***********************************-->
<Toast />
<div id="main-wrapper">
    <!--**********************************
              Nav header start
          ***********************************-->
    <div class="nav-header">
        <a href="/dashboard" class="brand-logo">
            <img class="logo-abbr" src="/images/Echo_Symbol.png" alt="" />
            <!-- <img class="logo-compact" src="/images/Echo_Logomark.png" alt=""> -->
            <img class="brand-title" src="/images/Echo_Logotitle.png" alt="" />
        </a>

        <div class="nav-control">
            <div class="hamburger">
                <span class="line"></span><span class="line"></span><span class="line"></span>
            </div>
        </div>
    </div>
    <!--**********************************
              Nav header end
          ***********************************-->

    <!--**********************************
              Header start
          ***********************************-->

    <div class="header">
        <div class="header-content">
            <nav class="navbar navbar-expand">
                <div class="collapse navbar-collapse justify-content-between">
                    <div class="header-left">
                        <div class="dashboard_bar">
                            {$pageTitle}
                        </div>
                    </div>
                    <ul class="navbar-nav header-right">
                        <li class="nav-item dropdown header-profile">
                            <a 
                            class="nav-link"
                            href="javascript:void(0)"
                            role="button"
                            data-toggle="dropdown"
                            >
                                <img src="/images/users/user.png" width="20" alt="" />
                                <div class="header-info">
                                    <span class="text-black">{currentUser?.name || 'Guest'}</span>
                                    <p class="fs-12 mb-0">{currentUser?.admin ? 'Admin' : 'Commercial Team'}</p>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a href="/" class="dropdown-item ai-icon">
                                    <svg
                                        id="icon-user1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="text-primary"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <span class="ml-2">Profile </span>
                                </a>
                                
                                <a href="/logout" class="dropdown-item ai-icon">
                                    <svg
                                        id="icon-logout"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="text-danger"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    <span class="ml-2">Logout </span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <!--**********************************
              Header end ti-comment-alt
          ***********************************-->

    <!--**********************************
              Sidebar start
          ***********************************-->
    <div class="dlabnav">
        <div class="dlabnav-scroll">
            <ul class="metismenu" id="menu">
                <li>
                  <a href="/dashboard" class="ai-icon" aria-expanded="false">
                    <i class="flaticon-381-networking"></i>
                    <span class="nav-text">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/clients" class="ai-icon" aria-expanded="false">
                    <i class="fa fa-users"></i>
                    <span class="nav-text">Clients</span>
                  </a>
                </li>
                <li>
                  <a href="/contracts" class="ai-icon" aria-expanded="false">
                    <i class="flaticon-381-notepad"></i>
                    <span class="nav-text">Contracts</span>
                  </a>
                </li>
                <li>
                    <a
                      class="has-arrow ai-icon"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                    <i class="fa fa-archive"></i>
                    <span class="nav-text">Archives</span>
                    </a>
                    <ul>
                      <!-- <li><a href="/clients">Active Clients</a></li> -->
                      <li><a href="/clients/archive">Clients</a></li>
                      <li><a href="/contracts/archive">Contracts</a></li>
                    </ul>
                </li>
                {#if currentUser?.admin === true}
                <li>
                    <a
                      class="has-arrow ai-icon"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                    <i class="flaticon-381-controls-3"></i>
                    <span class="nav-text">Settings</span>
                    </a>
                    <ul>
                      <li><a href="/company-info">Company Info</a></li>
                      <li><a href="/category">Category</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/policies">Policies</a></li>
                      <li><a href="/users">Users</a></li>
                      <li><a href="/units">Units</a></li>
                      <!-- <li><a href="/subcategory">Sub-Category</a></li> -->
                    </ul>
                  </li>
                {/if}
              </ul>
            <!-- <a class="add-menu-sidebar d-block" href="/contracts/new">+ New Contract</a> -->
            
				<a class="add-menu-sidebar d-block" href="javascript:void(0)"  data-toggle="modal" data-target="#addOrderModalside" ><i class="fa fa-calculator"></i> Tiering Calculator</a>
            <!-- <div class="copyright">
                <p><strong>Echo</strong> 2025 All Rights Reserved</p>
            </div> -->
        </div>
    </div>
    <!--**********************************
              Sidebar end
          ***********************************-->

    <!--**********************************
              Content body start
          ***********************************-->
    <div class="content-body">
        <!-- Add Order -->
        <div class="modal fade" id="addOrderModalside">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tiering Calculator</h5>
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                        </button>
                    </div>
                    <div class="result mt-4" id="result" style="display:none;">
                        <p class="tier" style="color: #224335;" id="tier"></p>
                        <p>Total Points: <span id="totalPoints"></span></p>
                    </div>
                    <div class="modal-body">
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
                
                            <button type="button" class="btn w-100 text-white" style="background-color: #224335;" on:click={calculateTier}>Calculate</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <slot />
    </div>
    <!--**********************************
              Content body end
          ***********************************-->

    <!--**********************************
              Footer start
          ***********************************-->
    <div class="footer">
        <div class="copyright">
            <p>
                Copyright 
                <a href="http://echotech.co.nz/" target="_blank">Echo</a> 2025
            </p>
        </div>
    </div>
    <!--**********************************
              Footer end
          ***********************************-->
  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">^<i class="bi bi-arrow-up-short"></i></a>
</div>
<!--**********************************
          Main wrapper end
      ***********************************-->