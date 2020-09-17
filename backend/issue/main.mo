import Option "mo:base/Option";
import Utils "./utils";
import Database "./database";
import Types "./types";

actor GetImpactNow {
  type Issue = Types.Issue;

  var db: Database.IssueDB = Database.IssueDB();

  public query func getIssue(id: Nat): async ?Utils.ImmutableIssue {
    db.findOne(id);
  };

  public query func getIssues(): async [Utils.ImmutableIssue] {
    db.findMany();
  };

  public func addIssue(title: Text, description : Text, state : Text, zone: Text): async () {
    db.createOne(db.nextIssueId, title, description, state, zone);
  };

  // FIXME: optional types are killing me
  // public func addDebate(issueId: Nat, thesis: Text): async () {
  //   db.createDebate(issueId, thesis);
  // }
};
