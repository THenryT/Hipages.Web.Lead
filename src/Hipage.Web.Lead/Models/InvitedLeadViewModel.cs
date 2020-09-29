using Hipage.Domain.Lead.Enum;

namespace Hipage.Web.Lead.Models
{
    public class InvitedLeadViewModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public LeadStatus Status { get; set; }
        public string Suburb { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string CreatedDate { get; set; }
    }
}