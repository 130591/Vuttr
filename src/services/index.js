import axios from "axios";

export class ToolsApi {
  static async index() {
    const data = await axios.get("http://localhost:3000/tools");
    console.log(data);
    return data;
  }

  static async create(data) {
    const resp = await axios.post("http://localhost:3000/tools", data);
    console.log(resp);
    return resp;
  }

  static async searchForTag(tag) {
    const resp = await axios.get(
      `http://localhost:3000/tools?tags_like=node${tag}`
    );

    return resp;
  }

  static async searchForTitle(title) {
    const resp = await axios.get(`http://localhost:3000/tools?q=${title}`);

    return resp;
  }

  static async delete(id) {
    const resp = await axios.delete(`http://localhost:3000/tools/${id}`);

    return resp;
  }
}
