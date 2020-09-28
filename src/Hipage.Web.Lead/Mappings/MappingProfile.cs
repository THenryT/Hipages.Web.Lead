using System;
using System.Linq;
using AutoMapper;
using Hipage.Web.Lead.Mappings.Converters;
using Hipage.Web.Lead.Models;

namespace Hipage.Web.Lead.Mappings
{
    public class OrderMappingProfile : Profile
    {
        public OrderMappingProfile()
        {
            CreateMap<Domain.Lead.Entities.Lead, AcceptedLeadViewModel>()    
                .ForMember(x => x.Price, opt =>
                    opt.ConvertUsing<CurrencyConverter, decimal>())
                .ForMember(x => x.CreatedDate, opt =>
                    opt.ConvertUsing<DateToStringConverter, DateTime>());

            CreateMap<Domain.Lead.Entities.Lead, InvitedLeadViewModel>()
                .ForMember(x => x.FirstName,
                    opt => opt.MapFrom(x => x.FullName.Split().FirstOrDefault()))
                .ForMember(x => x.Price, opt =>
                    opt.ConvertUsing<CurrencyConverter, decimal>())
                .ForMember(x => x.CreatedDate, opt =>
                    opt.ConvertUsing<DateToStringConverter, DateTime>());
        }
    }
}