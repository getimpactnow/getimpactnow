import Option "mo:base/Option";
import Array "mo:base/Array";
import Hash "mo:base/Hash";
import Word32 "mo:base/Word32";
import HashMap "mo:base/HashMap";

import Utils "./utils";
import Types "./types";

module {
  type IssueId = Nat;
  type Debate = Types.Debate;

  let keyHash: (Nat)->Hash.Hash = func(x)   { Word32.fromNat x };

  public class IssueDB() {
    let hashMap = HashMap.HashMap<Nat, Types.Issue>(1, isEq, keyHash);
    public var nextIssueId = 1;

    public func createOne(id: IssueId, description: Text) {
      hashMap.put(id, makeIssue(id, description));
      nextIssueId += 1;
    };

    public func updateOne(id: IssueId, issue: Types.Issue) {
      hashMap.put(id, issue);
    };

    public func findOne(id: IssueId): ?Types.Issue {
      hashMap.get(id)
    };

    public func findMany(): [Utils.ImmutableIssue] {
      var issues: [Utils.ImmutableIssue] = [];
      for ((id, issue) in hashMap.entries()) {
        issues := Array.append<Utils.ImmutableIssue>(issues, [Utils.toImmutableIssue(issue)]);
      };
      issues
    };

    public func createDebate(issueId: Nat, thesis: Text) {
      let issue = findOne(issueId);
      Option.iterate(issue, func(actualIssue : Types.Issue) {
        actualIssue.debates.put(
          actualIssue.nextDebateId,
          makeDebate(actualIssue.nextDebateId, thesis)
        );
      });
    };

    func makeIssue(issueId: Nat, newDescription: Text): Types.Issue {
      {
        id = issueId: Nat;
        description = newDescription: Text;
        nextDebateId = 1;
        debates = HashMap.HashMap<Nat, Types.Debate>(1, isEq, keyHash);
      }
    };

    func makeDebate(debateId: Nat, newThesis: Text): Debate {
      {
        id = debateId;
        thesis = newThesis;
      }
    }
  };

  func isEq(x: IssueId, y: IssueId): Bool { x == y };
}