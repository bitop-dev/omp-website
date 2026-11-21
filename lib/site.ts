const repoUrl = "https://github.com/bitop-dev/open-mcp-portal";
// Links into the repository are pinned at the release tag, so they keep
// showing the files of the version this page describes.
const tree = `${repoUrl}/blob/v0.15.3`;
const docsUrl = "https://docs.omp.bitop.dev";

export const site = {
  name: "Open MCP Portal",
  // The short form, used only after the full name has been given.
  // scripts/postbuild.mjs fails the build if "OMP" appears before it.
  shortName: "OMP",
  url: "https://omp.bitop.dev",
  title: "Open MCP Portal: one governed place for your company's MCP servers",
  description:
    "Open MCP Portal (OMP) is a self-hosted, open-source portal where teams register the MCP servers they build, publish them to a company catalog, and give people and agents governed access through curated gateways, with sign-in, tool scopes, approval of sensitive calls, signed identity, delegated credentials and audit.",
  docsUrl,
  repoUrl,
  version: "v0.15.3",
  // The release day of `version` (the footer and the sitemap show it).
  releaseDate: "2026-11-21" as string | null,
  releaseNotesUrl: `${repoUrl}/releases/tag/v0.15.3`,
  // The release the "Since v0.3" section counts from (the one this page described before).
  sinceVersion: "v0.3.2",
  // The published, cosign-signed container image of `version`, by digest
  // (the tag is v0.15.3). Verify with cosign v3.0 or newer, certificate
  // identity `imageCertificateIdentity`, OIDC issuer `imageOidcIssuer`.
  image: "ghcr.io/bitop-dev/open-mcp-portal@sha256:bae00dfda49eec8ed3dc0625b8276f677259d763da9f2904fd1ab8fab3212afa",
  imageTag: "ghcr.io/bitop-dev/open-mcp-portal:v0.15.3",
  imageCertificateIdentity: `${repoUrl}/.github/workflows/image.yml@refs/tags/v0.15.3`,
  imageOidcIssuer: "https://token.actions.githubusercontent.com",
  releasesUrl: `${repoUrl}/releases`,
  licenseUrl: `${tree}/LICENSE`,
  securityUrl: `${repoUrl}/security`,
  // Where people ask questions and report how their MCP client works.
  discussionsUrl: `${repoUrl}/discussions`,
  clientCompatibilityUrl: `${docsUrl}/docs/use/client-compatibility`,
  statusUrl: `${tree}/docs/status.md`,
  deployUrl: `${tree}/docs/deploy.md`,
  // The roadmap changes between releases, so it is not pinned at the tag: the docs site's page, which links every item's issue.
  roadmapUrl: `${docsUrl}/docs/releases/roadmap`,
  threatModelUrl: `${tree}/docs/threat-model.md`,
  mcpProtocolUrl: `${tree}/docs/mcp-protocol.md`,
  adminOverviewUrl: `${tree}/docs/admin-overview.md`,
  notificationsUrl: `${tree}/docs/notifications.md`,
  automationTokensUrl: `${tree}/docs/automation-tokens.md`,
  connectUrl: `${tree}/docs/connect-clients.md`,
  identityUrl: `${tree}/docs/upstream-identity.md`,
  tracingUrl: `${tree}/docs/deploy.md#tracing`,
  databaseRolesUrl: `${tree}/docs/deploy.md#database-roles`,
  mailExampleUrl: `${tree}/examples/mail-mcp/README.md`,
  websiteRepoUrl: "https://github.com/bitop-dev/omp-website",
  // The example portal used in every snippet on the page: the host the screenshots show
  // (the Example Corp capture instance in omp-assets, and the docs' examples).
  exampleHost: "mcp.example.com",
  // HTTP header names the portal sends to MCP servers. They are protocol
  // names, unchanged by the product's rename (internal/identity/identity.go);
  // check them against docs/upstream-identity.md when the product changes.
  headers: {
    identity: "MCP-Gateway-Identity",
    provider: "MCP-Gateway-Provider",
    providerToken: "MCP-Gateway-Provider-Token",
  },
} as const;

/** A page on the docs site, e.g. docs("use/approvals") or docs("teams/publishing#the-catalog"). */
export function docs(path: string): string {
  return `${docsUrl}/docs/${path}`;
}
