import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";

type Debate = {
     id: Nat;
     thesis: Text;
};

type Issue = {
     id: Nat;
     title: Text;
     description: Text;
     state: Text;
     zone: Text;
     nextDebateId: Nat;
     // debates: HashMap.HashMap<Nat, Debate>;
};
