export const DOC_CONTENT = `
Issues
Add assignees to an issue
Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

octokit.rest.issues.addAssignees({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

assignees	no	
Usernames of people to assign this issue to. NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise.

See also: GitHub Developer Guide documentation.

Add labels to an issue
octokit.rest.issues.addLabels({
        owner,
repo,
issue_number,
labels[].name
      })
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

labels	no	
labels[].name	yes	
See also: GitHub Developer Guide documentation.

Check if a user can be assigned
Checks if a user has permission to be assigned to an issue in this repository.

If the assignee can be assigned to issues in the repository, a 204 header with no content is returned.

Otherwise a 404 status code is returned.

octokit.rest.issues.checkUserCanBeAssigned({
  owner,
  repo,
  assignee,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

assignee	yes	
See also: GitHub Developer Guide documentation.

Create an issue
Any user with pull access to a repository can create an issue. If issues are disabled in the repository, the API returns a 410 Gone status.

This endpoint triggers notifications. Creating content too quickly using this endpoint may result in secondary rate limiting. See "Secondary rate limits" and "Dealing with secondary rate limits" for details.

octokit.rest.issues.create({
  owner,
  repo,
  title,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

title	yes	
The title of the issue.

body	no	
The contents of the issue.

assignee	no	
Login for the user that this issue should be assigned to. NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. This field is deprecated.

milestone	no	
labels	no	
Labels to associate with this issue. NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise.

assignees	no	
Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.

See also: GitHub Developer Guide documentation.

Create an issue comment
This endpoint triggers notifications. Creating content too quickly using this endpoint may result in secondary rate limiting. See "Secondary rate limits" and "Dealing with secondary rate limits" for details.

octokit.rest.issues.createComment({
  owner,
  repo,
  issue_number,
  body,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

body	yes	
The contents of the comment.

See also: GitHub Developer Guide documentation.

Create a label
octokit.rest.issues.createLabel({
  owner,
  repo,
  name,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

name	yes	
The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing :strawberry: will render the emoji :strawberry:. For a full list of available emoji and codes, see "Emoji cheat sheet."

color	no	
The hexadecimal color code for the label, without the leading #.

description	no	
A short description of the label. Must be 100 characters or fewer.

See also: GitHub Developer Guide documentation.

Create a milestone
octokit.rest.issues.createMilestone({
  owner,
  repo,
  title,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

title	yes	
The title of the milestone.

state	no	
The state of the milestone. Either open or closed.

description	no	
A description of the milestone.

due_on	no	
The milestone due date. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

See also: GitHub Developer Guide documentation.

Delete an issue comment
octokit.rest.issues.deleteComment({
  owner,
  repo,
  comment_id,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

comment_id	yes	
The unique identifier of the comment.

See also: GitHub Developer Guide documentation.

Delete a label
octokit.rest.issues.deleteLabel({
  owner,
  repo,
  name,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

name	yes	
See also: GitHub Developer Guide documentation.

Delete a milestone
octokit.rest.issues.deleteMilestone({
  owner,
  repo,
  milestone_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

milestone_number	yes	
The number that identifies the milestone.

See also: GitHub Developer Guide documentation.

Get an issue
The API returns a 301 Moved Permanently status if the issue was transferred to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a 404 Not Found status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a 410 Gone status. To receive webhook events for transferred and deleted issues, subscribe to the issues webhook.

Note: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the pull_request key. Be aware that the id of a pull request returned from "Issues" endpoints will be an issue id. To find out the pull request id, use the "List pull requests" endpoint.

octokit.rest.issues.get({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

See also: GitHub Developer Guide documentation.

Get an issue comment
octokit.rest.issues.getComment({
  owner,
  repo,
  comment_id,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

comment_id	yes	
The unique identifier of the comment.

See also: GitHub Developer Guide documentation.

Get an issue event
octokit.rest.issues.getEvent({
  owner,
  repo,
  event_id,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

event_id	yes	
See also: GitHub Developer Guide documentation.

Get a label
octokit.rest.issues.getLabel({
  owner,
  repo,
  name,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

name	yes	
See also: GitHub Developer Guide documentation.

Get a milestone
octokit.rest.issues.getMilestone({
  owner,
  repo,
  milestone_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

milestone_number	yes	
The number that identifies the milestone.

See also: GitHub Developer Guide documentation.

List issues assigned to the authenticated user
List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the filter query parameter to fetch issues that are not necessarily assigned to you.

Note: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the pull_request key. Be aware that the id of a pull request returned from "Issues" endpoints will be an issue id. To find out the pull request id, use the "List pull requests" endpoint.

octokit.rest.issues.list();
Parameters
name	required	description
filter	no	
Indicates which sorts of issues to return. assigned means issues assigned to you. created means issues created by you. mentioned means issues mentioning you. subscribed means issues you're subscribed to updates for. all or repos means all issues you can see, regardless of participation or creation.

state	no	
Indicates the state of the issues to return. Can be either open, closed, or all.

labels	no	
A list of comma separated label names. Example: bug,ui,@high

sort	no	
What to sort results by. Can be either created, updated, comments.

direction	no	
The direction to sort the results by.

since	no	
Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

collab	no	
orgs	no	
owned	no	
pulls	no	
per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List assignees
Lists the available assignees for issues in a repository.

octokit.rest.issues.listAssignees({
  owner,
  repo,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List issue comments
Issue Comments are ordered by ascending ID.

octokit.rest.issues.listComments({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

since	no	
Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List issue comments for a repository
By default, Issue Comments are ordered by ascending ID.

octokit.rest.issues.listCommentsForRepo({
  owner,
  repo,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

sort	no	
The property to sort the results by. created means when the repository was starred. updated means when the repository was last pushed to.

direction	no	
Either asc or desc. Ignored without the sort parameter.

since	no	
Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List issue events
octokit.rest.issues.listEvents({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List issue events for a repository
octokit.rest.issues.listEventsForRepo({
  owner,
  repo,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List timeline events for an issue
octokit.rest.issues.listEventsForTimeline({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List user account issues assigned to the authenticated user
List issues across owned and member repositories assigned to the authenticated user.

Note: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the pull_request key. Be aware that the id of a pull request returned from "Issues" endpoints will be an issue id. To find out the pull request id, use the "List pull requests" endpoint.

octokit.rest.issues.listForAuthenticatedUser();
Parameters
name	required	description
filter	no	
Indicates which sorts of issues to return. assigned means issues assigned to you. created means issues created by you. mentioned means issues mentioning you. subscribed means issues you're subscribed to updates for. all or repos means all issues you can see, regardless of participation or creation.

state	no	
Indicates the state of the issues to return. Can be either open, closed, or all.

labels	no	
A list of comma separated label names. Example: bug,ui,@high

sort	no	
What to sort results by. Can be either created, updated, comments.

direction	no	
The direction to sort the results by.

since	no	
Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List organization issues assigned to the authenticated user
List issues in an organization assigned to the authenticated user.

Note: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the pull_request key. Be aware that the id of a pull request returned from "Issues" endpoints will be an issue id. To find out the pull request id, use the "List pull requests" endpoint.

octokit.rest.issues.listForOrg({
  org,
});
Parameters
name	required	description
org	yes	
The organization name. The name is not case sensitive.

filter	no	
Indicates which sorts of issues to return. assigned means issues assigned to you. created means issues created by you. mentioned means issues mentioning you. subscribed means issues you're subscribed to updates for. all or repos means all issues you can see, regardless of participation or creation.

state	no	
Indicates the state of the issues to return. Can be either open, closed, or all.

labels	no	
A list of comma separated label names. Example: bug,ui,@high

sort	no	
What to sort results by. Can be either created, updated, comments.

direction	no	
The direction to sort the results by.

since	no	
Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List repository issues
List issues in a repository.

Note: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the pull_request key. Be aware that the id of a pull request returned from "Issues" endpoints will be an issue id. To find out the pull request id, use the "List pull requests" endpoint.

octokit.rest.issues.listForRepo({
  owner,
  repo,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

milestone	no	
If an integer is passed, it should refer to a milestone by its number field. If the string * is passed, issues with any milestone are accepted. If the string none is passed, issues without milestones are returned.

state	no	
Indicates the state of the issues to return. Can be either open, closed, or all.

assignee	no	
Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user.

creator	no	
The user that created the issue.

mentioned	no	
A user that's mentioned in the issue.

labels	no	
A list of comma separated label names. Example: bug,ui,@high

sort	no	
What to sort results by. Can be either created, updated, comments.

direction	no	
The direction to sort the results by.

since	no	
Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List labels for issues in a milestone
octokit.rest.issues.listLabelsForMilestone({
  owner,
  repo,
  milestone_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

milestone_number	yes	
The number that identifies the milestone.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List labels for a repository
octokit.rest.issues.listLabelsForRepo({
  owner,
  repo,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List labels for an issue
octokit.rest.issues.listLabelsOnIssue({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

List milestones
octokit.rest.issues.listMilestones({
  owner,
  repo,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

state	no	
The state of the milestone. Either open, closed, or all.

sort	no	
What to sort results by. Either due_on or completeness.

direction	no	
The direction of the sort. Either asc or desc.

per_page	no	
The number of results per page (max 100).

page	no	
Page number of the results to fetch.

See also: GitHub Developer Guide documentation.

Lock an issue
Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set Content-Length to zero when calling out to this endpoint. For more information, see "HTTP verbs."

octokit.rest.issues.lock({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

lock_reason	no	
The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:
* off-topic
* too heated
* resolved
* spam

See also: GitHub Developer Guide documentation.

Remove all labels from an issue
octokit.rest.issues.removeAllLabels({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

See also: GitHub Developer Guide documentation.

Remove assignees from an issue
Removes one or more assignees from an issue.

octokit.rest.issues.removeAssignees({
  owner,
  repo,
  issue_number,
  assignees,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

assignees	yes	
Usernames of assignees to remove from an issue. NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise.

See also: GitHub Developer Guide documentation.

Remove a label from an issue
Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a 404 Not Found status if the label does not exist.

octokit.rest.issues.removeLabel({
  owner,
  repo,
  issue_number,
  name,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

name	yes	
See also: GitHub Developer Guide documentation.

Set labels for an issue
Removes any previous labels and sets the new labels for an issue.

octokit.rest.issues.setLabels({
        owner,
repo,
issue_number,
labels[].name
      })
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

labels	no	
labels[].name	yes	
See also: GitHub Developer Guide documentation.

Unlock an issue
Users with push access can unlock an issue's conversation.

octokit.rest.issues.unlock({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

See also: GitHub Developer Guide documentation.

Update an issue
Issue owners and users with push access can edit an issue.

octokit.rest.issues.update({
  owner,
  repo,
  issue_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

issue_number	yes	
The number that identifies the issue.

title	no	
The title of the issue.

body	no	
The contents of the issue.

assignee	no	
Login for the user that this issue should be assigned to. This field is deprecated.

state	no	
State of the issue. Either open or closed.

milestone	no	
labels	no	
Labels to associate with this issue. Pass one or more Labels to replace the set of Labels on this Issue. Send an empty array ([]) to clear all Labels from the Issue. NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise.

assignees	no	
Logins for Users to assign to this issue. Pass one or more user logins to replace the set of assignees on this Issue. Send an empty array ([]) to clear all assignees from the Issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.

See also: GitHub Developer Guide documentation.

Update an issue comment
octokit.rest.issues.updateComment({
  owner,
  repo,
  comment_id,
  body,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

comment_id	yes	
The unique identifier of the comment.

body	yes	
The contents of the comment.

See also: GitHub Developer Guide documentation.

Update a label
octokit.rest.issues.updateLabel({
  owner,
  repo,
  name,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

name	yes	
new_name	no	
The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing :strawberry: will render the emoji :strawberry:. For a full list of available emoji and codes, see "Emoji cheat sheet."

color	no	
The hexadecimal color code for the label, without the leading #.

description	no	
A short description of the label. Must be 100 characters or fewer.

See also: GitHub Developer Guide documentation.

Update a milestone
octokit.rest.issues.updateMilestone({
  owner,
  repo,
  milestone_number,
});
Parameters
name	required	description
owner	yes	
The account owner of the repository. The name is not case sensitive.

repo	yes	
The name of the repository. The name is not case sensitive.

milestone_number	yes	
The number that identifies the milestone.

title	no	
The title of the milestone.

state	no	
The state of the milestone. Either open or closed.

description	no	
A description of the milestone.

due_on	no	
The milestone due date. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.


`;