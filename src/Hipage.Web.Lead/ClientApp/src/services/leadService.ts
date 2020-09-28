import axios from "axios";

export default class LeadService {
  static async GetLeads(status: string) {
    var result = await axios.get("/api/v1/lead", {
      params: {
        status: status,
      },
    });
    console.log(result);
    return result.data;
  }
}
