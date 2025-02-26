<script>
    import { enhance } from '$app/forms';
    import { pb } from '$lib/pocketbase';
    import { toast } from '$lib/utils/toast';
    import { invalidateAll } from '$app/navigation';
    
    let user = pb.authStore.model;
    let avatarFile;
    let avatarPreview = user?.avatar ? pb.files.getUrl(user, user.avatar) : null;
    let showPassword = false;
    let loading = false;

    function handleAvatarChange(event) {
        const file = event.target.files[0];
        if (file) {
            avatarFile = file;
            avatarPreview = URL.createObjectURL(file);
        }
    }

    function handleProfileSubmit(event) {
        loading = true;
        return async ({ result }) => {
            loading = false;
            if (result.type === 'success') {
                toast.success('Profile updated successfully');
                // Refresh the data without full page reload
                await invalidateAll();
                // Update user in local state
                user = pb.authStore.model;
            } else if (result.type === 'failure') {
                toast.error(result.data?.error || 'Failed to update profile');
            }
        };
    }

    function handlePasswordSubmit(event) {
        loading = true;
        return async ({ result }) => {
            loading = false;
            if (result.type === 'success') {
                toast.success('Password updated successfully');
                event.target.reset();
            } else if (result.type === 'failure') {
                toast.error(result.data?.error || 'Failed to update password');
            }
        };
    }

    $: {
        if (user?.avatar) {
            avatarPreview = pb.files.getUrl(user, user.avatar);
        }
    }
</script>

<div class="container-fluid">
    <div class="row page-titles">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active"><a href="javascript:void(0)">Profile</a></li>
        </ol>
    </div>
    
    <div class="row">
        <div class="col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="profile-statistics text-center">
                        <div class="profile-photo position-relative d-inline-block">
                            {#if avatarPreview}
                                <img src={avatarPreview} alt="profile" 
                                    class="img-fluid rounded-circle" 
                                    style="width: 150px; height: 150px; object-fit: cover;">
                            {:else}
                                <div class="rounded-circle bg-light d-flex align-items-center justify-content-center"
                                     style="width: 150px; height: 150px; font-size: 48px; color: #666;">
                                    {user?.name?.[0]?.toUpperCase() || 'U'}
                                </div>
                            {/if}
                        </div>
                        <div class="mt-3">
                            <h4>{user?.name || 'User'}</h4>
                            <p class="mb-0">{user?.title || 'No title set'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card">
                <div class="card-body">
                    <div class="profile-tab">
                        <div class="tab-content">
                            <div class="pt-3">
                                <div class="settings-form">
                                    <h4 class="text-primary">Account Settings</h4>
                                    <form method="POST" action="?/updateProfile" use:enhance={handleProfileSubmit} enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Name</label>
                                                <input type="text" 
                                                       name="name" 
                                                       class="form-control" 
                                                       value={user?.name || ''}
                                                       required>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Title</label>
                                                <input type="text" 
                                                       name="title" 
                                                       class="form-control" 
                                                       value={user?.title || ''}>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Email</label>
                                                <input type="email" 
                                                       name="email" 
                                                       class="form-control" 
                                                       value={user?.email || ''}
                                                       required>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Phone</label>
                                                <input type="tel" 
                                                       name="phone" 
                                                       class="form-control" 
                                                       value={user?.phone || ''}>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Profile Photo</label>
                                            <input type="file" 
                                                   name="avatar" 
                                                   class="form-control" 
                                                   accept="image/*"
                                                   on:change={handleAvatarChange}>
                                        </div>
                                        <button class="btn btn-echo" type="submit" disabled={loading}>
                                            {#if loading}
                                                <span class="spinner-border spinner-border-sm me-2"></span>
                                                Updating...
                                            {:else}
                                                Update Profile
                                            {/if}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="profile-tab">
                        <div class="pt-3">
                            <div class="settings-form">
                                <h4 class="text-primary">Change Password</h4>
                                <form method="POST" action="?/updatePassword" use:enhance={handlePasswordSubmit}>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Current Password</label>
                                            <div class="input-group">
                                                <input type={showPassword ? 'text' : 'password'}
                                                       name="oldPassword" 
                                                       class="form-control" 
                                                       required>
                                                <button class="btn btn-outline-secondary" 
                                                        type="button"
                                                        on:click={() => showPassword = !showPassword}>
                                                    <i class="fa fa-{showPassword ? 'eye-slash' : 'eye'}"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">New Password</label>
                                            <input type="password" 
                                                   name="password" 
                                                   class="form-control"
                                                   required
                                                   minlength="8">
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label">Confirm New Password</label>
                                            <input type="password" 
                                                   name="passwordConfirm" 
                                                   class="form-control"
                                                   required
                                                   minlength="8">
                                        </div>
                                    </div>
                                    <button class="btn btn-echo" type="submit" disabled={loading}>
                                        {#if loading}
                                            <span class="spinner-border spinner-border-sm me-2"></span>
                                            Updating Password...
                                        {:else}
                                            Update Password
                                        {/if}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .profile-photo {
        margin-bottom: 20px;
    }
    
    .settings-form {
        padding: 1rem 0;
    }
    
    .settings-form h4 {
        margin-bottom: 1.5rem;
    }
</style>
