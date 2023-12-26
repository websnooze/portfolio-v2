import { Octokit } from "@octokit/rest";

import { GITHUB_TOKEN } from "../utils/consts";

export const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});
