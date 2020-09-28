using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Hipage.Domain.Lead.Enum;
using Hipage.Infrastrcuture.Lead.Services;
using MediatR;

namespace Hipage.Application.Lead.Queries
{
    public class GetLeadsQuery
    {
        public class Reuqest: IRequest<Response>
        {
            public LeadStatus Status { get; set; }
        }

        public class Response
        {
            public IEnumerable<Domain.Lead.Entities.Lead> leads { get; set; }
        }

        public class Handler: IRequestHandler<Reuqest, Response>
        {
            private readonly ILeadService _leadService;

            public Handler(ILeadService leadService)
            {
                _leadService = leadService;
            }
            public async Task<Response> Handle(Reuqest request, CancellationToken cancellationToken)
            {
                var leads = await _leadService.GetAsync(request.Status);
                return new Response()
                {
                    leads = leads
                };
            }
        }
    }
}