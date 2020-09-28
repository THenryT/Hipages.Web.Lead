using AutoMapper;

namespace Hipage.Web.Lead.Mappings.Converters
{
    public class CurrencyConverter:  IValueConverter<decimal, string>
    {
        public string Convert(decimal sourceMember, ResolutionContext context) => $"$ {sourceMember}";
    }
}