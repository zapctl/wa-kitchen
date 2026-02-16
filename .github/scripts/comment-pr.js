module.exports = async ({ github, context }) => {
  const { sha, repo: { owner, repo } } = context;
  const branch = process.env.BRANCH;
  const packageTag = process.env.PACKAGE_TAG;
  const packageVersion = process.env.PACKAGE_VERSION;

  const shortSha = sha.slice(0, 7);
  const commitUrl = `https://github.com/${owner}/${repo}/commit/${sha}`;

  const pr = await github.rest.pulls.list({
    owner,
    repo,
    head: `${owner}:${branch}`,
    base: "main",
    state: "open",
  }).then(({ data }) => data.find((pr) => {
    return pr.labels.some((label) => label.name === "automated");
  }));

  if (!pr) throw new Error("No PR found for this branch");

  const message = (() => {
    if (packageTag === "preview") {
      const nodeUrl = `https://pkg.pr.new/${owner}/${repo}@${shortSha}`;

      return `## 📦 Preview packages published\n` +
        `#### **Node.js:** \`\`npm i ${nodeUrl}\`\`\n` +
        `\n🧩 Generated from commit [${shortSha}](${commitUrl})`;
    } else {
      const nodeUrl = `https://www.npmjs.com/package/${repo}/v/${packageVersion}`;

      return `## 📦 Packages published\n` +
        `#### **Node.js:** [${nodeUrl}](${nodeUrl})\n`;
    }
  })();

  await github.rest.issues.createComment({
    owner,
    repo,
    issue_number: pr.number,
    body: message,
  });

  console.log(`Posted preview package comment on PR #${pr.number}`);
};
