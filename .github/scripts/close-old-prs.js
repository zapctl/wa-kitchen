module.exports = async ({ github, context }) => {
  const { owner, repo } = context.repo;

  const pullRequests = await github.paginate(github.rest.pulls.list, {
    owner,
    repo,
    state: "open",
  });

  for (const pr of pullRequests) {
    const hasAutomatedLabel = pr.labels.some((label) => label.name === "automated");
    if (!hasAutomatedLabel) continue;

    await github.rest.pulls.update({
      owner,
      repo,
      pull_number: pr.number,
      state: "closed",
    });

    console.log(`Closed automated PR #${pr.number}: ${pr.title}`);
  }
};