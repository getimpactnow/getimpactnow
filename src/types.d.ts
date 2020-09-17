declare module "ic:canisters/user" {}

declare module "ic:canisters/issue" {
  export const addIssue: (
    title: string,
    description: string,
    state: string,
    zone: string
  ) => Promise<any>;
  export const getIssue: (id: number) => Promise<any>;
  export const getIssues: () => Promise<any>;
}
