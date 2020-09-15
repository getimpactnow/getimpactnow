declare module "ic:canisters/user" {}

declare module "ic:canisters/issue" {
  export const addIssue: (description: string) => Promise<any>;
  export const getIssue: (id: number) => Promise<any>;
}
