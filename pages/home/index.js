import { AptosClient } from 'aptos';
import React, { useState } from 'react'
// Create an AptosClient to interact with devnet.
const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
const Home = () => {
  // ...

  // Use the AptosClient to retrieve details about the account.
  const [account, setAccount] = useState(null);
  const [address, setAddress] = useState('')
  React.useEffect(() => {
    // client.getAccount('0x7974c28245900946511b49e553f41a1b7cf0df748c86e5790938ccfe1f25bf93').then(setAccount);
    // window.aptos.account().then((data) => console.log('aaa', data));
  }, []);

  console.log('aa',  window.aptos)

  return (
    <div className="App">
      <p><code>{ address }</code></p>
      {/* <p><code>{ account?.sequence_number }</code></p> */}
    </div>
  );
}

export default Home