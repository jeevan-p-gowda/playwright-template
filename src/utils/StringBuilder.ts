export default class StringBuilder {
  constructor() {}

  async emailBuilder(): Promise<string> {
    const randomPart: string = Math.random().toString(36).substring(2, 15);
    return randomPart + '@gmail.com';
  }

  async APIBuilder(apiURL: string, endpoint: string, option?: { id: number }): Promise<string> {
    let api: string;
    if (option?.id) {
      api = endpoint.replace(/{(.*?)}/, option.id.toString());
    } else {
      api = endpoint;
    }
    return apiURL + api;
  }
}
