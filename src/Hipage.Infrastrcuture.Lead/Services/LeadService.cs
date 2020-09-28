using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hipage.Domain.Lead.Enum;
using MongoDB.Driver;

namespace Hipage.Infrastrcuture.Lead.Services
{
    public interface ILeadService
    {
        Task<Domain.Lead.Entities.Lead> GetAsync(Guid id);
        Task<IEnumerable<Domain.Lead.Entities.Lead>> GetAsync(LeadStatus status);
        Task UpdateAsync(Domain.Lead.Entities.Lead lead);
    }
    
    public class LeadService: ILeadService
    {
        private readonly IMongoCollection<Domain.Lead.Entities.Lead> _lead;

        public LeadService(IDatabaseSetting settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _lead = database.GetCollection<Domain.Lead.Entities.Lead>(settings.CollectionName);
        }
        
        // Todo: Need to create a generic filter parameter later
        public async Task<IEnumerable<Domain.Lead.Entities.Lead>> GetAsync(LeadStatus status)
        {
            var cursor = await _lead.FindAsync(x => x.Status == status);
            return cursor.ToList();
        }
        
        public async Task<Domain.Lead.Entities.Lead> GetAsync(Guid id)
        {
            var cursor = await _lead.FindAsync(x => x.Id == id.ToString());
            var lead = cursor.ToList().FirstOrDefault();
            return lead;
        }

        public async Task UpdateAsync(Domain.Lead.Entities.Lead lead)
        {
            await _lead.ReplaceOneAsync(x => x.Id == lead.Id, lead);
        }
    }
}