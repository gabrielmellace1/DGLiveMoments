const axios = require('axios');

//https://api.studio.thegraph.com/query/28179/moments/"v0.0.2"
async function run() {
  const url = 'https://api.studio.thegraph.com/query/28179/moments/version/latest';
  const query = `
  {
    mintedNFTs(where: { creator: "0xEA5Fed1D0141F14DE11249577921b08783d6A360" }) {
      id
      creator
      tokenId
      uri
      timestamp
    }
  }`;

  const response = await axios.post(url, {
    query,
  });
  console.log(response.data);

  const mintedNFTs = response.data.data.mintedNFTs;
  for (let nft of mintedNFTs) {
    console.log('NFT ID:', nft.id);
    console.log('Creator:', nft.creator);
    console.log('Token ID:', nft.tokenId);
    console.log('URI:', nft.uri);
    console.log('Timestamp:', nft.timestamp);
    console.log('---------');
  }
}

run().catch(console.error);
