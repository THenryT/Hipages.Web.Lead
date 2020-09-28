using System.Linq;
using AutoMapper;

namespace Hipage.Web.Lead.Mappings.Converters
{
    public class FirstNameConverter : IValueConverter<string, string>
    {
        public string Convert(string sourceMember, ResolutionContext context)
        {
            var firstName = sourceMember.Split(" ").First();
            return firstName;
        }
    }
}