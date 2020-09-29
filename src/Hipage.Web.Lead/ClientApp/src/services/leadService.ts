import axios from "axios";

export default class LeadService {
  static async GetLeads(status: string) {
    const result = await axios.get("/api/v1/lead", {
      params: {
        status: status,
      },
    });
    console.log(result);
    return result.data;
  }

  static async AcceptLead(id: string) {
    await axios.put(`api/v1/lead/${id}/accept`);
  }

  static async DeclineLead(id: string) {
    await axios.put(`api/v1/lead/${id}/decline`);
  }
}
