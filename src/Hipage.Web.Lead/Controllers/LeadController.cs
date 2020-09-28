using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Hipage.Application.Lead.Queries;
using Hipage.Domain.Lead.Enum;
using Hipage.Web.Lead.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Hipage.Web.Lead.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class LeadController : ControllerBase
    {
        private readonly ILogger<LeadController> _logger;
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;


        public LeadController(ILogger<LeadController> logger, IMapper mapper, IMediator mediator)
        {
            _logger = logger;
            _mapper = mapper;
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult> Get([FromQuery] LeadStatus status)
        {
            var reuqest = new GetLeadsQuery.Reuqest()
            {
                Status = status
            };
            var response = await _mediator.Send(reuqest);
            switch (status)
            {
                case LeadStatus.Created:
                {
                    var result =
                        _mapper.Map<IEnumerable<Domain.Lead.Entities.Lead>, List<InvitedLeadViewModel>>(
                            response.leads);
                    return Ok(result);
                }
                case LeadStatus.Accepted:
                {
                    var result =
                        _mapper.Map<IEnumerable<Domain.Lead.Entities.Lead>, List<AcceptedLeadViewModel>>(
                            response.leads);
                    return Ok(result);
                }
                default:
                    throw new Exception($"Cannot get leads with status {status}");
            }
        }
    }
}