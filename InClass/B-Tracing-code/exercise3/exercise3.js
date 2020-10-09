fetch("https://httpstat.us/500")
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((jsonResponse) => {
    console.log(jsonResponse)
  })
  .catch((error) => {
    // Handle the error
    console.log(error);
  });
