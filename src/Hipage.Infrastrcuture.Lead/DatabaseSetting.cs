namespace Hipage.Infrastrcuture.Lead
{
    public class DatabaseSetting: IDatabaseSetting
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    
    public interface IDatabaseSetting
    {
        string CollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}