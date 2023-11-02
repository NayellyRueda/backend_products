class HttpClient {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    const status = response.status;

    return { data, status };
  }
}

module.exports = HttpClient;
