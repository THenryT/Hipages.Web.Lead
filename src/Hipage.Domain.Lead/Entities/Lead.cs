using System;
using Hipage.Domain.Lead.Enum;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Hipage.Domain.Lead.Entities
{
    public class Lead
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        [BsonRepresentation(BsonType.String)]  
        public LeadStatus Status { get; set; }
        public string Suburb { get; set; }
        public decimal Price { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        [BsonElement("Full_name")]
        public string FullName { get; set; }
        [BsonElement("Phone_num")]
        public string PhoneNum { get; set; }
        public string Email { get; set; }

        public Lead(string suburb, decimal price, string category, string fullName, string phoneNum, string email = "", string description = "")
        {
            Suburb = suburb;
            Price = price;
            Category = category;
            FullName = fullName;
            PhoneNum = phoneNum;
            Email = email;
            Description = description;
            CreatedDate = new DateTime();
            Status = LeadStatus.Created;
        }
        
        //todo: need to look up a state machine to control the status 
        public Lead SwitchStatus(LeadStatus status)
        {
            if (Status == LeadStatus.Created && (status == LeadStatus.Accepted || status == LeadStatus.Declined))
            {
                Status = status;
                return this;
            }

            throw new Exception($"Cannot switch state from {Status} to {status}");
        }
    }
}