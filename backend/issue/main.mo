import Option "mo:base/Option";
import Utils "./utils";
import Database "./database";
import Types "./types";

actor GetImpactNow {
  var db: Database.IssueDB = Database.IssueDB();
  type Issue = Types.Issue;

  // public query func getIssue(id: Nat): async ?Utils.ImmutableIssue {
  //   let issue = db.findOne(id);
  //   switch (issue) {
  //     case (null) return null;
  //     case (?actualIssue) return Utils.toImmutableIssue(actualIssue);
  //   }
  // };

  public query func getIssues(): async [Utils.ImmutableIssue] {
    db.findMany();
  };

  public func addIssue(description : Text): async () {
    db.createOne(db.nextIssueId, description);
  };

  public func addDebate(issueId: Nat, thesis: Text): async () {
    db.createDebate(issueId, thesis);
  }
};
