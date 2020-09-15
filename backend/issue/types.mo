import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";

type Debate = {
     id: Nat;
     thesis: Text;
};

type Issue = {
     id: Nat;
     description: Text;
     nextDebateId: Nat;
     debates: HashMap.HashMap<Nat, Debate>;
};
