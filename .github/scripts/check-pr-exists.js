module.exports = async ({ github, context, core }) => {
  const { owner, repo } = context.repo;

  const branchName = process.env.PREVIEW_BRANCH;

  const { data: existingPRs } = await github.rest.pulls.list({
    owner,
    repo,
    head: `${owner}:${branchName}`,
    base: "main",
    state: "open",
  });

  if (existingPRs.length > 0) {
    const existingPR = existingPRs[0];
    core.info(`PR já existe: #${existingPR.number} - ${existingPR.title}`);
    core.info(`URL: ${existingPR.html_url}`);
    core.exportVariable("package_update_needed", "false");
  }
};
