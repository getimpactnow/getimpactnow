// Import standard libraries
import Array "mo:base/Array";
import Nat "mo:base/Nat";

// Import type properties for the Issue type definition
import types "./types";

type Issue = types.Issue;

// Add to-do item utility
func add(issues : [Issue], desc : Text, nextId : Nat) : [Issue] {
  let issue : Issue = {
    id = nextId;
	description = desc;
	completed = false;
  };
  Array.append<Issue>(issues, [issue])
};
