<template>
    <div class="topnav active">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">

            <div class="collapse navbar-collapse active" id="topnav-menu-content">
                <ul class="navbar-nav active">
                    <li class="nav-item active">
                        <router-link class="nav-link dropdown-toggle arrow-none active" :to="{ name: 'dashboard' }" id="topnav-dashboard"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-home-circle icon"></i>
                            <span data-key="t-dashboard">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link dropdown-toggle arrow-none active" :to="'dhgfh'" id="topnav-dashboard"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-cart icon"></i>
                            <span data-key="t-dashboard">POS</span>
                        </router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                            <i class="bx bx-customize icon"></i>
                            <span data-key="t-apps">Inventory</span>
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-pages">
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Category</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="'KKK'" class="dropdown-item" data-key="t-p-list">Category List</router-link>
                                    <router-link :to="'kkk'" class="dropdown-item" data-key="t-create-new">Create
                                        New</router-link>
                                </div>
                            </div>
                            <!-- <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Brand</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'brand.index' }" class="dropdown-item" data-key="t-p-list">Brand List</router-link>
                                    <router-link :to="{ name: 'brand.create'}" class="dropdown-item" data-key="t-create-new">Create
                                        New</router-link>
                                </div>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Supplier</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'supplier.index' }" class="dropdown-item" data-key="t-p-list">Supplier List</router-link>
                                    <router-link :to="{ name: 'supplier.create'}" class="dropdown-item" data-key="t-create-new">Create
                                        New</router-link>
                                </div>
                            </div> -->
                            <!-- <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Product</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'product.index' }" class="dropdown-item" data-key="t-p-list">Product List</router-link>
                                    <router-link :to="{ name: 'product.create'}" class="dropdown-item" data-key="t-create-new">Create
                                        New</router-link>
                                </div>
                            </div>

                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Expense Category</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'expensecategory.index' }" class="dropdown-item" data-key="t-p-list">Expense Category List</router-link>
                                    <router-link :to="{ name: 'expensecategory.create'}" class="dropdown-item" data-key="t-create-new">Create
                                        New</router-link>
                                </div>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Expense </span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'expense.index' }" class="dropdown-item" data-key="t-p-list">Expense  List</router-link>
                                    <router-link :to="{ name: 'expense.create'}" class="dropdown-item" data-key="t-create-new">Create
                                        New</router-link>
                                </div>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Order </span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'order.index' }" class="dropdown-item" data-key="t-p-list">Order List</router-link>
                                </div>
                            </div> -->
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button">
                            <i class="bx bx-layer icon"></i>
                            <span data-key="t-components">HRM</span>
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-components">
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                    role="button">
                                    <span data-key="t-maps">Employee</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-map">
                                    <a href="maps-google.html" class="dropdown-item" data-key="t-google">Employee List</a>
                                    <a href="maps-vector.html" class="dropdown-item" data-key="t-vector">Create New</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button">
                            <i class="bx bx-file icon"></i>
                            <span data-key="t-pages">CRM</span>
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-more">
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-pricing"
                                    role="button">
                                    <span data-key="t-pricing">Customer</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-pricing">
                                    <router-link :to="{ name: 'customer.index' }" class="dropdown-item" data-key="t-basic">Customer List</router-link>
                                    <router-link :to="{ name: 'customer.create' }" class="dropdown-item" data-key="t-table">Create New</router-link>
                                </div>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-pricing"
                                    role="button">
                                    <span data-key="t-pricing">Staff</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-pricing">
                                    <router-link :to="{ name: 'staff.index' }" class="dropdown-item" data-key="t-basic">Staff List</router-link>
                                    <router-link :to="{ name: 'staff.create' }" class="dropdown-item" data-key="t-table">Create New</router-link>
                                </div>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-pricing"
                                    role="button">
                                    <span data-key="t-pricing">Salary</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-pricing">
                                    <router-link :to="{ name: 'salary.index' }" class="dropdown-item" data-key="t-basic">Salary List</router-link>
                                    <router-link :to="{ name: 'salary.create' }" class="dropdown-item" data-key="t-table">Create New</router-link>
                                </div>
                            </div>
                        </div>
                    </li> -->

                </ul>
            </div>
        </nav>
    </div>
</template>