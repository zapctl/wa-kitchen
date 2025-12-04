module.exports = async ({ github, context, core }) => {
  const { owner, repo } = context.repo;
  const newestVersion = process.env.NEWEST_VERSION;

  const automatedPRs = await github.rest.pulls.list({
    owner,
    repo,
    base: "main",
    state: "open",
  }).then(({ data }) => data.filter((pr) => {
    return pr.labels.some((label) => label.name === "automated");
  }));

  for (const pr of automatedPRs) {
    const prVersion = pr.head.ref.match(/preview\/v(.+)/)?.[1];
    if (!prVersion) continue;

    if (prVersion === newestVersion) {
      core.info(`PR already exists for the same version: #${pr.number}`);
      core.info(`URL: ${pr.html_url}`);
      core.exportVariable("package_update_needed", "false");

    } else if (prVersion > newestVersion) {
      core.info(`PR with newer version already exists: #${pr.number}`);
      core.info(`URL: ${pr.html_url}`);
      core.exportVariable("package_update_needed", "false");
    }
  }
};
