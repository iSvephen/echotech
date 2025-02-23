<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    import { invalidateAll } from '$app/navigation';
    
    export let data;
    const { users } = data;

    let error = '';
    
    onMount(() => {
        globalThis.$('#dataTable').DataTable();
    });

    // For archive confirmation
    let archivingUser = null;
    let unarchivingUser = null;
    let editingUser = null;
    let deletingUser = null;

    function openArchiveModal(user) {
        archivingUser = user;
        error = '';
        globalThis.$('#archiveUserModal').modal('show');
    }

    function openUnarchiveModal(user) {
        unarchivingUser = user;
        error = '';
        globalThis.$('#unarchiveUserModal').modal('show');
    }

    function openEditModal(user) {
        editingUser = user;
        error = '';
        globalThis.$('#editUserModal').modal('show');
    }

    function openDeleteModal(user) {
        deletingUser = user;
        error = '';
        globalThis.$('#deleteUserModal').modal('show');
    }

    function handleSubmit() {
        error = '';
        return async ({ result }) => {
            if (result.type === 'failure') {
                error = result.data?.message || 'An error occurred';
                return;
            }
            
            // Close modal first
            globalThis.$('.modal').modal('hide');
            
            // Invalidate all data and update the page
            await invalidateAll();
            
            if (result.type === 'redirect') {
                window.location.href = result.location;
            }
        };
    }
</script>

<style>
    .badge {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .badge i {
        font-size: 0.75rem;
    }

    .w-space-no {
        white-space: nowrap;
    }

    .table-secondary {
        background-color: rgba(0, 0, 0, 0.05);
    }

    :global(.btn-xs.sharp) {
        width: 30px;
        height: 30px;
        min-width: 30px;
        min-height: 30px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :global(.btn-xs.sharp i) {
        font-size: 0.875rem;
    }

    td {
        vertical-align: middle !important;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                    <h4 class="card-title mb-2 mb-md-0">Users</h4>
                    <button class="btn btn-echo" data-toggle="modal" data-target="#createUserModal">+ New User</button>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table id="dataTable" class="display min-w850">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <!-- <th>Created</th> -->
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each users as user}
                                    <tr class={user.archived ? 'table-secondary' : ''}>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="w-space-no">{user.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <i class="fa fa-envelope text-muted mr-1"></i>
                                                <span>{user.email}</span>
                                            </div>
                                        </td>
                                        <!-- <td>{new Date(user.created).toLocaleDateString()}</td> -->
                                        <td>
                                            <div class="d-flex flex-column">
                                                {#if user.archived}
                                                    <span class="badge badge-warning mb-1">
                                                        <i class="fa fa-archive mr-1"></i>
                                                        Archived
                                                    </span>
                                                {/if}
                                                {#if user.admin}
                                                    <span class="badge badge-completed">
                                                        <i class="fa fa-star mr-1"></i>
                                                        Admin
                                                    </span>
                                                {:else}
                                                    <span class="badge badge-primary">
                                                        <i class="fa fa-user mr-1"></i>
                                                        Commercial
                                                    </span>
                                                {/if}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                {#if !user.archived}
                                                    <button 
                                                        class="btn btn-primary shadow btn-xs sharp mr-1" 
                                                        on:click={() => openEditModal(user)} 
                                                        title="Edit user"
                                                        aria-label="Edit">
                                                        <i class="fa fa-pencil"></i>
                                                    </button>
                                                    <button 
                                                        class="btn btn-echo shadow btn-xs sharp" 
                                                        on:click={() => openArchiveModal(user)} 
                                                        title="Archive user"
                                                        aria-label="Archive">
                                                        <i class="fa fa-archive"></i>
                                                    </button>
                                                {:else}
                                                    <button 
                                                        class="btn btn-echo shadow btn-xs sharp" 
                                                        on:click={() => openUnarchiveModal(user)} 
                                                        title="Unarchive user"
                                                        aria-label="Unarchive">
                                                        <i class="fa fa-undo"></i>
                                                    </button>
                                                {/if}
                                            </div>
                                        </td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Create User Modal -->
    <div class="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form method="post" action="?/create">
                    <div class="modal-body">
                        {#if error}
                            <div class="alert alert-danger">
                                {error}
                            </div>
                        {/if}
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="name" 
                                name="name" 
                                required
                                placeholder="Enter full name"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="email" 
                                name="email" 
                                required
                                placeholder="Enter email address"
                            >
                            <small class="form-text text-muted">This email must be unique in the system</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                        </div>
                        <div class="form-group">
                            <label for="passwordConfirm">Confirm Password</label>
                            <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Edit User Modal -->
    <div class="modal fade" id="editUserModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form method="post" action="?/update" >
                    <!-- use:enhance={handleSubmit} -->
                    <div class="modal-body">
                        {#if error}
                            <div class="alert alert-danger">{error}</div>
                        {/if}
                        {#if editingUser}
                            <input type="hidden" name="id" value={editingUser.id}>
                            <div class="form-group">
                                <label for="edit-name">Name</label>
                                <input type="text" class="form-control" id="edit-name" name="name" value={editingUser.name} required>
                            </div>
                            <div class="form-group">
                                <label for="edit-email">Email</label>
                                <input type="email" class="form-control" id="edit-email" name="email" value={editingUser.email} required>
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-switch">
                                    <input 
                                        type="checkbox" 
                                        class="custom-control-input" 
                                        id="adminSwitch" 
                                        name="admin"
                                        value="true"
                                        checked={editingUser.admin}
                                    >
                                    <label class="custom-control-label" for="adminSwitch">
                                        Administrator
                                        <small class="d-block text-muted">
                                            {#if editingUser.admin}
                                                User has full administrative privileges
                                            {:else}
                                                User has standard access privileges
                                            {/if}
                                        </small>
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="edit-oldPassword">Current Password (required for password change)</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="edit-oldPassword" 
                                    name="oldPassword"
                                    placeholder="Enter current password"
                                >
                            </div>
                            <div class="form-group">
                                <label for="edit-password">New Password (leave blank to keep current)</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="edit-password" 
                                    name="password"
                                    placeholder="Enter new password"
                                >
                            </div>
                            <div class="form-group">
                                <label for="edit-passwordConfirm">Confirm New Password</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="edit-passwordConfirm" 
                                    name="passwordConfirm"
                                    placeholder="Confirm new password"
                                >
                            </div>
                        {/if}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Archive User Modal -->
    <div class="modal fade" id="archiveUserModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Archive User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {#if archivingUser}
                        <p>What would you like to do with user <strong>{archivingUser.name}</strong>?</p>
                        <div class="alert alert-warning">
                            <i class="fa fa-info-circle"></i> Archive will hide the user but keep their data. Delete will permanently remove the user.
                        </div>
                    {/if}
                </div>
                <div class="modal-footer justify-content-between">
                    <div>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    <div class="d-flex">
                        <form method="post" action="?/archive" class="mr-2">
                            {#if archivingUser}
                                <input type="hidden" name="id" value={archivingUser.id}>
                            {/if}
                            <button type="submit" class="btn btn-warning">
                                <i class="fa fa-archive mr-1"></i> Archive
                            </button>
                        </form>
                        <button 
                            type="button" 
                            class="btn btn-danger"
                            on:click={() => {
                                globalThis.$('#archiveUserModal').modal('hide');
                                openDeleteModal(archivingUser);
                            }}
                        >
                            <i class="fa fa-trash mr-1"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Unarchive User Modal -->
    <div class="modal fade" id="unarchiveUserModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Unarchive User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {#if unarchivingUser}
                        <p>Are you sure you want to unarchive user <strong>{unarchivingUser.name}</strong>?</p>
                    {/if}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <form method="post" action="?/unarchive">
                        {#if unarchivingUser}
                            <input type="hidden" name="id" value={unarchivingUser.id}>
                        {/if}
                        <button type="submit" class="btn btn-echo">Unarchive</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete User Modal -->
    <div class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Delete User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {#if deletingUser}
                        <div class="alert alert-danger">
                            <i class="fa fa-exclamation-triangle mr-1"></i>
                            This action cannot be undone!
                        </div>
                        <p>Are you sure you want to permanently delete user <strong>{deletingUser.name}</strong>?</p>
                    {/if}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <form method="post" action="?/delete">
                        {#if deletingUser}
                            <input type="hidden" name="id" value={deletingUser.id}>
                        {/if}
                        <button type="submit" class="btn btn-danger">
                            <i class="fa fa-trash mr-1"></i> Delete Permanently
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> 