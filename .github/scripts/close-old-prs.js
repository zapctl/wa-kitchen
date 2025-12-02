module.exports = async ({ github, context }) => {
  const { owner, repo } = context.repo;
  const pullRequests = await github.paginate(github.rest.pulls.list, {
    owner,
    repo,
    state: "open"
  });

  for (const pr of pullRequests) {
    await github.rest.pulls.update({
      owner,
      repo,
      pull_number: pr.number,
      state: "closed"
    });
    console.log(`Closed PR #${pr.number}: ${pr.title}`);
  }
}