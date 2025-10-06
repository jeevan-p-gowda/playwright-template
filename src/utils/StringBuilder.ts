export default class StringBuilder {
  constructor() {}

  async getRandomCreds(): Promise<{ email: string; password: string }> {
    const email: string = Math.random().toString(36).substring(2, 15) + '@gmail.com';
    const password: string = '1234567890';
    return { email, password };
  }

  async apiBuilder(apiURL: string, endpoint: string, option?: { id: number }): Promise<string> {
    let api: string;
    const placeholderMatch = endpoint.match(/{([^}]+)}/);
    if (placeholderMatch) {
      if (!option?.id) {
        throw new Error(`missing ${placeholderMatch[0]} in ${endpoint}`);
      }
      api = endpoint.replace(/{[^}]+}/g, option.id.toString());
    } else {
      api = endpoint;
    }
    return apiURL + api;
  }
}
