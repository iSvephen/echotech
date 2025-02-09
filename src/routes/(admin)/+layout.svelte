<script>
    import { currentUser } from '$lib/pocketbase';
  </script>


<svelte:head>
    <title>Echo Tech</title>
    <!-- Include necessary CSS files with correct paths -->
    <link href="/vendor/jqvmap/css/jqvmap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/vendor/chartist/css/chartist.min.css">
    <!-- Datatable -->
    <link href="/vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
    <!-- Vectormap -->
    <link href="/vendor/jqvmap/css/jqvmap.min.css" rel="stylesheet">
    <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/vendor/owl-carousel/owl.carousel.css" rel="stylesheet">
</svelte:head>

<!--*******************
        Preloader start
    ********************-->
<div id="preloader">
    <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div>
</div>
<!--*******************
          Preloader end
      ********************-->

<!--**********************************
          Main wrapper start
      ***********************************-->
<div id="main-wrapper">
    <!--**********************************
              Nav header start
          ***********************************-->
    <div class="nav-header">
        <a href="/" class="brand-logo">
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
                        <div class="dashboard_bar">Dashboard</div>
                    </div>
                    <ul class="navbar-nav header-right">
                        <li class="nav-item dropdown header-profile">
                            <a class="nav-link" href="javascript:void(0)" role="button" data-toggle="dropdown">
                                <img src="/images/users/user.png" width="20" alt="" />
                                <div class="header-info">
                                    <span class="text-black">{currentUser?.name || 'Guest'}</span>
                                    <p class="fs-12 mb-0">Super Admin</p>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a href="#" class="dropdown-item ai-icon">
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
                  <a href="/" class="ai-icon" aria-expanded="false">
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
                    href="javascript:void()"
                    aria-expanded="false"
                  >
                    <i class="flaticon-381-networking"></i>
                    <span class="nav-text">Services</span>
                  </a>
                  <ul aria-expanded="false">
                    <li><a href="/services">Services</a></li>
                    <li><a href="/category">Category</a></li>
                    <li><a href="units.html">Units</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/tiering" class="ai-icon" aria-expanded="false">
                    <i class="fa fa-calculator"></i>
                    <span class="nav-text">Tiering</span>
                  </a>
                </li>
                <li>
                  <a href="settings.html" class="ai-icon" aria-expanded="false">
                    <i class="flaticon-381-controls-3"></i>
                    <span class="nav-text">Settings</span>
                  </a>
                </li>
                <li>
                  <a href="policies.html" class="ai-icon" aria-expanded="false">
                    <i class="fa fa-file-text-o"></i>
                    <span class="nav-text">Policies</span>
                  </a>
                </li>
              </ul>
            <a class="add-menu-sidebar d-block" href="contracts-add.html">+ New Contract</a>
            <div class="copyright">
                <p><strong>Echo</strong> © 2025 All Rights Reserved</p>
            </div>
        </div>
    </div>
    <!--**********************************
              Sidebar end
          ***********************************-->

    <!--**********************************
              Content body start
          ***********************************-->
    <div class="content-body">
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
                Copyright ©
                <a href="http://echotech.co.nz/" target="_blank">Echo</a> 2025
            </p>
        </div>
    </div>
    <!--**********************************
              Footer end
          ***********************************-->

    <!--**********************************
             Support ticket button start
          ***********************************-->

    <!--**********************************
             Support ticket button end
          ***********************************-->
</div>
<!--**********************************
          Main wrapper end
      ***********************************-->
