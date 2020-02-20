const networkRequests = data =>
  new Promise((resolve, reject) => {
    const config = {
      method: "POST",
      body: data,
      mode: "cors"
    };

    fetch("https://33cpn.sse.codesandbox.io/submit", config)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("network request failed!!");
        }
      })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });

export default networkRequests;
