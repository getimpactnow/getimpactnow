import utils "utils";
import types "types";

type Issue = types.Issue;

actor IssueAssistant {

  var issues : [Issue] = [];
  var nextId : Nat = 1;

  public query func getIssues () : async [Issue] {
   issues 
  };

  public func addIssue (description : Text) : async () {
    issues := utils.add(issues, description, nextId);
    nextId += 1;
  };

};
