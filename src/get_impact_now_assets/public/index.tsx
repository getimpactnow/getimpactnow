// @ts-ignore
import get_impact_now from "ic:canisters/get_impact_now";
import * as React from "react";
import { render } from "react-dom";

const GetImpactNow: React.FC = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const doGreet = React.useCallback(async () => {
    const greeting = await get_impact_now.greet(name);
    setMessage(greeting);
  }, [name]);

  return (
    <div style={{ fontSize: "30px" }}>
      <div style={{ backgroundColor: "yellow" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={() => doGreet()}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "<span style={{ color: "blue" }}>{message}</span>"
      </div>
    </div>
  );
};

render(<GetImpactNow />, document.getElementById("app"));
