using System;
using Hipage.Domain.Lead.Enum;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Hipage.Domain.Lead.Entities
{
    public class Lead
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public LeadStatus Status { get; set; }
        public string Suburb { get; set; }
        public decimal Price { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        [BsonElement("full_name")]
        public string FullName { get; set; }
        [BsonElement("phone_number")]
        public string PhoneNum { get; set; }
        public string Email { get; set; }
    }
}