export default {
  mount: {
    title: "Mount Management",
    accessibleMounts: "Accessible Mount Points",
    createMount: "Create Mount Point",
    editMount: "Edit Mount Point",
    refresh: "Refresh",
    refreshing: "Refreshing...",
    search: "Search mount points...",
    status: {
      active: "Active",
      inactive: "Inactive",
      enabled: "Enabled",
      disabled: "Disabled",
      proxy: "Proxy",
      signature: "Signature",
    },
    info: {
      name: "Mount Name",
      path: "Mount Path",
      storageType: "Storage Type",
      storageConfig: "Storage Config",
      remark: "Remark",
      sortOrder: "Sort Order",
      cacheTtl: "Cache TTL",
      createdBy: "Created By",
      createdAt: "Created At",
      updatedAt: "Updated At",
      lastRefresh: "Last Refresh",
    },
    form: {
      name: "Mount Point Name",
      namePlaceholder: "Enter mount point name",
      nameHint: "Name to identify the mount point",
      storageType: "Storage Type",
      storageTypeHint: "Select storage backend type",
      storageConfig: "Storage Configuration",
      storageConfigPlaceholder: "Select storage configuration",
      storageConfigHint: "Choose the S3 storage configuration to use",
      mountPath: "Mount Path",
      mountPathPlaceholder: "e.g.: /documents or /images",
      mountPathHint: "Path in storage, must start with / followed by specific path, e.g.: /documents, /images, etc.",
      remark: "Remark",
      remarkPlaceholder: "Enter remark information",
      remarkHint: "Optional description",
      sortOrder: "Sort Order",
      sortOrderHint: "Lower numbers appear first",
      cacheTtl: "Cache TTL (seconds)",
      cacheTtlHint: "File list cache time, 0 means no cache",
      isActive: "Active Status",
      isActiveHint: "Whether to enable this mount point",
      webProxy: "Enable Web Proxy",
      webProxyHint: "When enabled, file preview and download will be proxied through server",
      proxySign: {
        title: "Proxy Signature Configuration",
        enableSign: "Enable Proxy Signature",
        enableSignHint: "When enabled, accessing files from this storage via proxy requires valid signature",
        signExpires: "Signature Expiration Time (seconds)",
        signExpiresPlaceholder: "Leave empty to use global settings",
        signExpiresHint: "0 means never expire, leave empty to use global default settings",
      },
      webdavPolicy: "WebDAV Policy",
      webdavPolicyHint: "Select WebDAV access policy",
      s3Config: "S3 Storage Configuration",
      selectS3Config: "Please select S3 storage configuration",
      noS3Config: "No S3 storage configurations available",
      storageTypes: {
        s3: "S3 Storage",
      },
      webdavPolicyOptions: {
        "302_redirect": "302 Redirect",
        native_proxy: "Native Proxy",
      },
      webdavPolicyDescription: "Download/Preview for WebDAV",
      cacheTtlPlaceholder: "Default 300 seconds",
      sortOrderPlaceholder: "0",
      save: "Save",
      saving: "Saving...",
      cancel: "Cancel",
      create: "Create",
      creating: "Creating...",
      update: "Update",
      updating: "Updating...",
    },
    actions: {
      edit: "Edit",
      delete: "Delete",
      enable: "Enable",
      disable: "Disable",
      view: "View",
      browse: "Browse",
    },
    confirmDelete: {
      title: "Confirm Delete",
      message: 'Are you sure you want to delete mount point "{name}"? This action cannot be undone.',
      confirm: "Delete",
      cancel: "Cancel",
    },
    success: {
      created: "Mount point created successfully",
      updated: "Mount point updated successfully",
      deleted: "Mount point deleted successfully",
      enabled: "Mount point enabled successfully",
      disabled: "Mount point disabled successfully",
      refreshed: "Data refreshed successfully",
    },
    error: {
      loadFailed: "Failed to load mount point list",
      createFailed: "Failed to create mount point",
      updateFailed: "Failed to update mount point",
      deleteFailed: "Failed to delete mount point",
      enableFailed: "Failed to enable mount point",
      disableFailed: "Failed to disable mount point",
      loadS3ConfigsFailed: "Failed to load S3 configurations",
      loadApiKeysFailed: "Failed to load API key list",
      noPermission: "No permission to perform this action",
      apiKeyNoPermission: "API key users have no permission to modify mount point status",
      apiKeyCannotDelete: "API key users have no permission to delete mount points",
      apiKeyCannotCreate: "API key users have no permission to create mount points",
      apiKeyCannotManage: "API key users have no permission to manage mount points",
      saveFailed: "Save failed",
    },
    validation: {
      nameRequired: "Mount point name is required",
      nameLength: "Mount point name must be between 1-50 characters",
      storageTypeRequired: "Please select a storage type",
      s3ConfigRequired: "Please select an S3 configuration",
      mountPathRequired: "Mount path is required",
      mountPathFormat: "Mount path must start with /",
      mountPathInvalid: "Mount path format is invalid, must be in /xxx format, only letters, numbers, underscores, hyphens, Chinese characters and slashes are allowed",
      mountPathSystemReserved: "Cannot use system reserved paths",
      cacheTTLInteger: "Cache TTL must be an integer",
      cacheTTLNonNegative: "Cache TTL cannot be negative",
      cacheTTLTooLarge: "Cache TTL cannot exceed 86400 seconds (24 hours)",
      sortOrderInteger: "Sort order must be an integer",
    },
    empty: {
      title: "No Mount Points",
      description: "No mount points have been created yet",
      createFirst: "Create the first mount point",
    },
    searchResults: {
      noResults: "No matching mount points found",
      found: "Found {count} mount points",
      clearSearch: "Clear Search",
      tryDifferentTerms: "Try using different search terms",
    },
    creators: {
      system: "System",
      admin: "Admin",
      apiKey: "API Key",
    },
    currentApiKey: "Current Key",
    unknownCreator: "Unknown Creator",
    noRemark: "No remark",
    unlimited: "Unlimited",
    seconds: "seconds",
  },
};
