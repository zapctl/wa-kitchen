const fs = require("fs");

module.exports = async ({ github, context }) => {
  const { sha, repo: { owner, repo } } = context;
  const branch = process.env.BRANCH;
  const packageTag = process.env.PACKAGE_TAG;
  const packageName = process.env.PACKAGE_NAME;
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
      const nodePublishOutPath = `${process.env.DIST_DIR}/nodejs/publish.json`;
      const nodePublishOut = JSON.parse(fs.readFileSync(nodePublishOutPath, "utf8"));
      console.log(nodePublishOut);

      const nodeUrl = nodePublishOut.packages[0].url;

      return `## 📦 Preview packages published\n` +
        `#### **[Node.js](${nodeUrl})**\n` +
        `\n🧩 Generated from commit: [${sha.substring(0, 7)}](${commitUrl})`;
    } else {
      const nodeUrl = `https://github.com/${owner}/${repo}/pkgs/npm/${packageName}`;

      return `## 📦 Packages published\n` +
        `#### **[Node.js](${nodeUrl})**\n`;
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
