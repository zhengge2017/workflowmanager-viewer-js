define({
    root: ({
        loading: {
            loading: "loading...",
            username: "Username",
            password: "Password",
            login: "Login",
            loginAttempt: "Trying to login..."
        },

        header: {
            title: "ArcGIS Workflow Manager",
            subHeader: "Web Edition",
            logout: "Logout",
            welcome: "Welcome",
            onHold: "Job is currently on hold, some functionality unavailable.",
            closed: "Job is currently closed, some functionality unavailable.",
            offline: "Job is currently offline, some functionality unavailable.",
            navInfo: "{0} of {1}"
        },
        
        common: {
            loading: "Loading...",
            ok: "OK",
            cancel: "Cancel",
            error: "Error",
            update: "Update",
            selectOption: "Select an option"
        },

        filter: {
            initialQueryTitle: "Select Query",
            initialReportTitle: "Select Report",
            createNewJob: "Create New Job",
            createJob: "Create Job",
            findJob: "Find job",
            queries: "Queries",
            orFindJob: "or find job",
            loadingJobQueries: "Loading job queries...",
            noJobsForThisQuery: "No jobs for this query",
            queryFieldDescriptions: "ID,Name,Job Type,Assigned To,Due Date,Description",
            queryTypePublic: "Public Queries",
            queryTypeUser: "User Queries",
            reports: "Reports",
            reportWindow: "Open in New Window",
            results: "Search Results"
        },
        
        statistics: {
            title: "Statistics",
            assignedTo: "Assigned to",
            categorizedBy: "Categorized by",
            groupedBy: "Grouped by",
            jobType: "Job type",
            none: "None",
            barChart: "Bar",
            pieChart: "Pie",
            reset: "Reset",
            select: "Select",
            selectACategory: "Select a category"
        },
        
        grid: {
            promptDelete: "Are you sure you want to delete the selected job(s)?",
            promptClose: "Are you sure you want to close the selected job(s)?",
            promptReopen: "Are you sure you want to reopen the selected job(s)?",
            yes: "Yes",
            no: "No",
            closeBtn: "Close",
            closeTitle: "Close Jobs",
            deleteBtn: "Delete",
            deleteTitle: "Delete Jobs",
            reopenBtn: "Reopen",
            reopenTitle: "Reopen Closed Jobs",
            numberJobs: "{0} job(s)",
            newJob: "New Job Created"
        },

        properties: {
            title: "Properties",
            aoiDefined: "AOI defined",
            aoiUndefined: "AOI not defined",
            loiDefined: "LOI defined",
            loiUndefined: "LOI not defined",
            poiDefined: "POI defined",
            poiUndefined: "POI not defined",
            invalidAssignmentType: "Invalid assignment type",
            jobId: "Job ID",
            jobName: "Job Name",
            jobType: "Job Type",
            jobStatus: "Job Status",
            jobPercentComplete: "% Complete",
            jobAOI: "AOI",
            jobLOI: "LOI",
            jobPOI: "POI",
            jobDataWorkspace: "Data Workspace",
            jobVersion: "Version",
            jobParentVersion: "Parent Version",
            jobAssignment: "Assignment",
            jobAssignmentUser: "User",
            jobAssignmentGroup: "Group",
            jobAssignmentUnassigned: "Unassigned",
            jobAssignmentUnknownUser: "Unknown User",
            jobOwner: "Job Owner",
            jobPriority: "Priority",
            jobStartDate: "Start Date",
            jobDueDate: "Due Date",
            jobDescription: "Job Description",
            jobOffline: "Job Offline",
            notApplicable: "n/a",
            noDataWorkspace: "No Data Workspace",
            noVersion: "No Version",
            numberOfJobs: "Number of jobs",
            resize: "Resize",
            updateSuccessful: "Properties updated successfully."
        },
        
        extendedProperties: {
            title: "Extended Properties",
            noProperties: "No extended properties for this job",
            invalid: "The value entered is not valid",
            required: "Required Field"
        },
        
        notes: {
            title: "Notes",
            jobNote: "Job Note",
            saveNote: "Save Note"
        },
        
        workflow: {
            title: "Workflow",
            currentSteps: "Current Step(s)",
            executeStep: "Execute Step",
            markStepComplete: "Mark Step Complete",
            recreateWorkflow: "Recreate Workflow",
            promptRecreateWorkflow: "Are you sure you want to recreate the job workflow?",
            
            questionNotes: "Notes (Optional)",
            questionResponse: "Question Response: {0}",
            questionResponseWithNotes: "Question Response: {0} with Note: {1}",
            
            selectPrompt: "[Select]",
            selectCurrentStep: "Select Current Step",
            selectNextStep: "Select Next Step",
                        
            executionComplete: "Execution Complete",
            executionError: "Execution Error",
            executionWarning: "Execution Warning",
            
            executionResponses: {
                1: "The step executed successfully.",
                2: "Dependent on a step in another job.",
                3: "Dependent on a stage in another job.",
                4: "Dependent on a status in another job.",
                5: "Blocked by an active job hold.",
                6: "Dependent on a previous step in this job's workflow.",
                7: "The step was checked as complete.",
                8: "The step is assigned to another user.",
                9: "The step is assigned to another group."
            },
            
            stepHasJobDependency: "{0} step has a dependency on another job, some functionality unavailable."
        },
        
        attachments: {
            title: "Attachments",
            action: "Action",
            add: "Add",
            addAttachment: "Add Attachment",
            addEmbedAttachTooltip: "Upload an embedded file attachment",
            addLinkAttachTooltip: "Add a linked file attachment",
            addURLAttachTooltip: "Add a linked URL attachment",
            browser: "Choose a File",
            embed: "Embedded File Attachment",
            embedLabel: "Select a File",
            filename: "Filename",
            link: "Linked File Attachment",
            linkPrompt: "Enter a File Path and Name",
            noAttachments: "No attachments for this job",
            removeAll: "Remove All",
            type: "Type",
            upload: "Upload",
            url: "URL Attachment",
            urlPrompt: "Enter a URL",
        },

        attachmentItem: {
            noAttachmentType: "Unknown Attachment Type",
            noFilename: "No Filename",
            url: "URL",
            embedded: "Embedded",
            file: "Linked",
            open: "Open",
            prompt: "Linked attachments cannot be directly opened from this application. Please copy the file path below",
            dialogTitle: "Linked Attachment"
        },
        
        history: {
            title: "History",
            activityType: "Activity Type",
            date: "Date",
            message: "Message",
            noActivityForThisJob: "No activity for this job",
            enterComment: "Enter Comment",
            saveComment: "Save Comment",
            user: "User"
        },

        holds: {
            add: "Add",
            title: "Holds",
            comment: "Comment",
            holdDate: "Hold Date",
            holdType: "Hold Type",
            id: "ID",
            noHoldsForThisJob: "No holds for this job",
            release: "Release",
            releaseComments: "Release Comments",
            releasedBy: "Released By",
            releaseHold: "Release Hold",
            saveHold: "Add Hold",
            type: "Type"
        },

        error: {
            title: "Error",
            errorAddingComment: "Error adding comment",
            errorAddingHold: "Error adding hold",
            errorCreatingJob: "Unable to create job",
            errorCreatingJobAOI: "Error creating job AOI",
            errorCreatingJobLOI: "Error creating job LOI",
            errorCreatingJobPOI: "Error creating job POI",
            errorClosingJob: "Unable to close all jobs",
            errorDeletingJob: "Unable to delete jobs",
            errorDeletingJobAOI: "Error deleting job AOI",
            errorDeletingJobLOI: "Error deleting job LOI",
            errorDeletingJobPOI: "Error deleting job POI",
            errorExecuteStep: "Unable to execute the workflow step.",
            errorFindingJobsById: "Unable to find job(s) {0}",
            errorGeneratingReport: "Error generating report",
            errorGettingFieldValues: "Error getting field values",
            errorGettingMultiFieldValues: "Error getting multi-list field values",
            errorGettingReports: "Error getting Reports",
            errorInvalidAuthenticationMode: "Invalid authentication mode: {0}",
            errorInvalidFields: "One or more fields invalid.",
            errorInvalidUsername: "Invalid username {0}",
            errorLoadingDataWorkspaceDetails: "Unable to load data workspace details",
            errorLoadingGroups: "Unable to load groups",
            errorLoadingJobHistory: "Unable to load job history",
            errorLoadingJobHolds: "Unable to load job holds",
            errorLoadingJobIdField: "Unable to load job Id field from job AOI map service",
            errorLoadingJobIdFieldLOI: "Unable to load job Id field from job LOI map service",
            errorLoadingJobIdFieldPOI: "Unable to load job Id field from job POI map service",
            errorLoadingJobTypeDetails: "Unable to load job type details",
            errorLoadingServiceInfo: "Unable to load service info",
            errorLoadingUsers: "Unable to load users",
            errorLoadingWorkflowConfiguration: "Unable to load Workflow Manager configuration: AOI layer task or configuration task is null",
            errorLoadingWorkflowInfo: "Unable to load workflow info",
            errorMarkAsDone: "Unable to mark the workflow step as complete.",
            errorMissingFields: "One or more required fields missing.",
            errorMissingHoldType: "Please select a type of hold.",
            errorMoveNextStep: "Unable to advance to the next workflow step.",
            errorNotDomainUser: "Domain authentication enabled.  Enter your domain along with your username.",
            errorOverlappingJobAOI: "Job AOI overlaps another job AOI.",
            errorOverlappingJobLOI: "Job LOI overlaps another job LOI.",
            errorOverlappingJobPOI: "Job POI overlaps another job POI.",
            errorParsingTokens: "Error parsing token(s): {0}",
            errorRecreateWorkflow: "Unable to recreate the job workflow.",
            errorReleasingHold: "Error releasing hold",
            errorReopeningClosedJobs: "Unable to reopen all closed jobs",
            errorResolveConflict: "Unable to resolve the workflow conflict.",
            errorRetrievingAttachments: "Error retrieving attachements",
            errorRetrievingExtendedProperties: "Error retrieving extended properties",
            errorRetrievingJobWithJobId: "Error retrieving jobs with job ID {0}",
            errorRetrievingUser: "Error retrieving user {0}",
            errorRetrievingWindowsUser: "Error retrieving windows user.",
            errorRunningQuery: "Error running query {0}",
            errorStepNotWebEnabled: "The step is not configured to run on the web. You can execute the step on the desktop or contact your application administrator.",
            errorUnsupportedBrowser: "Unsupported Browser",
            errorUnsupportedBrowserMsg: "The browser you are using is not supported by ArcGIS Workflow Manager. Please download the latest version of Internet Explorer.",
            errorUpdatingExtendedProperties: "Error updating extended properties",
            errorUpdatingJobAOI: "Error updating job AOI",
            errorUpdatingJobLOI: "Error updating job LOI",
            errorUpdatingJobPOI: "Error updating job POI",
            errorUpdatingJobNotes: "Error updating job notes",
            errorUpdatingJobProperties: "Error updating job properties"
            }
    }),
    
    es: true,
    it: true,
    ru: true,
    tr: true,
    "zh-CN": true
}); 
