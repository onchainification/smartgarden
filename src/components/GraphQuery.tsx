export async function getBalance(_address: string) {
  // define url and query
  var url =
    "https://api.studio.thegraph.com/query/50162/smartgarden/v0.0.2e";
  var query = `{
    gaugePosition(id: "${_address}") {
      balance
    }
  }`;

  // add request metadata
  var options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      query: query,
    }),
  };

  // fetch data
  var response = await fetch(url, options);

  // parse as json
  var queryResult = await response.json();

  // determine balance or default to 0
  try {
    var balance = queryResult["data"]["gaugePosition"]["balance"];
  }
  catch {
    var balance = 0;
  }

  // log result
  console.log(balance);
}
