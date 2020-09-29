using System;
using System.Threading;
using System.Threading.Tasks;
using Hipage.Domain.Lead.Enum;
using Hipage.Infrastrcuture.Lead.Services;
using MediatR;

namespace Hipage.Application.Lead.Commands
{
    public class AcceptLead
    {
        public class Reuqest: IRequest
        {
            public string Id{ get; set; }   
        }

        public class Handler: IRequestHandler<Reuqest, Unit>
        {
            private readonly ILeadService _leadService;

            public Handler(ILeadService leadService)
            {
                _leadService = leadService;
            }
            public async Task<Unit> Handle(Reuqest request, CancellationToken cancellationToken)
            {
                var lead = await _leadService.GetAsync(request.Id);
                if (lead == null)
                {
                    throw new Exception($"Lead ({request.Id}) is not found");
                }

                lead = lead.SwitchStatus(LeadStatus.Accepted);
                await _leadService.UpdateAsync(lead);
                
                return new Unit();
            }
        }
    }
}