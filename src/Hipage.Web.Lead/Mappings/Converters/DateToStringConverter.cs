using System;
using AutoMapper;

namespace Hipage.Web.Lead.Mappings.Converters
{
    public class DateToStringConverter:  IValueConverter<DateTime, string>
    {
        public string Convert(DateTime sourceMember, ResolutionContext context) => sourceMember.ToString("D");
    }
}