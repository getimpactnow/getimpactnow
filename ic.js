import * as default_ic from '@dfinity/agent';

const { HttpAgent, Principal } = default_ic;

const keyPair = default_ic.generateKeyPair();
const agent = new HttpAgent({
  principal: Principal.selfAuthenticating(keyPair.publicKey),
});

agent.addTransform(default_ic.makeNonceTransform());
agent.setAuthTransform(default_ic.makeAuthTransform(keyPair));

const ic = { ...default_ic, agent };

window.ic = ic;

export { ic };
