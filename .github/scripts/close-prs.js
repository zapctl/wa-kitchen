module.exports = async ({ github, context }) => {
  const { owner, repo } = context.repo;

  const pullRequests = await github.paginate(github.rest.pulls.list, {
    owner,
    repo,
    state: "open",
  });

  for (const pr of pullRequests) {
    const branchName = pr.head.ref;
    const hasAutomatedLabel = pr.labels.some((label) => label.name === "automated");
    if (!hasAutomatedLabel) continue;

    if (process.env.CLOSE_REASON) {
      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: pr.number,
        body: process.env.CLOSE_REASON,
      });

      console.log(`Commented on PR #${pr.number}`);
    }

    await github.rest.pulls.update({
      owner,
      repo,
      pull_number: pr.number,
      state: "closed",
    });

    console.log(`Closed automated PR #${pr.number}: ${pr.title}`);

    try {
      await github.rest.git.deleteRef({
        owner,
        repo,
        ref: `heads/${branchName}`,
      });

      console.log(`Deleted branch: ${branchName}`);
    } catch (error) {
      console.log(`Failed to delete branch ${branchName}: ${error.message}`);
    }
  }
};