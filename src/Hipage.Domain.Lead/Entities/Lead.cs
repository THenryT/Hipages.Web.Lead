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
    }
}