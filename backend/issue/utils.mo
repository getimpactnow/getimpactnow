import Array "mo:base/Array";

import Type "types";
import Types "./types";

module {
  public type ImmutableDebate = {
    id: Nat;
    thesis: Text;
  };

  public type ImmutableIssue = {
    id: Nat;
    title: Text;
    description: Text;
    state: Text;
    zone: Text;
    nextDebateId: Nat;
    // debates: [ImmutableDebate] // FIXME: find out why this doesn't work
  };

  public func toImmutableDebate(debate: Type.Debate): ImmutableDebate {
    {
      id = debate.id;
      thesis = debate.thesis;
    };
  };

  public func toImmutableIssue(issue: Type.Issue): ImmutableIssue {

    // FIXME: find out why this doesn't work
    // func getDebates(issue: Types.Issue): [ImmutableDebate] {
    //   var debates: [ImmutableDebate] = [];
    //   for ((id, debate) in issue.debates.entries()) {
    //     debates := Array.append(debates, [toImmutableDebate(debate)]);
    //   };
    //   debates
    // };

    var immutableIssue = {
      id = issue.id;
      title = issue.title;
      description = issue.description;
      state = issue.state;
      zone = issue.zone;
      nextDebateId = issue.nextDebateId;
      // debates = getDebates(issue); // FIXME: find out why this doesn't work
    };
    
    immutableIssue;
  };
};