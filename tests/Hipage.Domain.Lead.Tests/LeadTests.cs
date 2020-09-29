using System;
using Hipage.Domain.Lead.Enum;
using Xunit;

namespace Hipage.Domain.Lead.Tests
{
    public class LeadTests
    {
        [Fact]
        public void Lead_Can_Switch_Status_From_Create_To_Decline()
        {
            // Arrange
            var lead = new Entities.Lead("test", 12, "test", "test","0123123");

            // Act
            lead = lead.SwitchStatus(LeadStatus.Declined);

            // Assert
            Assert.Equal(LeadStatus.Declined, lead.Status);
        }
        
        [Fact]
        public void Lead_Can_Switch_Status_From_Create_To_Accept()
        {
            // Arrange
            var lead = new Entities.Lead("test", 12, "test", "test","0123123");

            // Act
            lead = lead.SwitchStatus(LeadStatus.Accepted);

            // Assert
            Assert.Equal(LeadStatus.Accepted, lead.Status);
        }
        
        [Fact]
        public void Lead_Switch_To_Invalid_Status_Will_Throw_Exception()
        {
            // Arrange
            var lead = new Entities.Lead("test", 12, "test", "test","0123123");

            // Act
            lead = lead.SwitchStatus(LeadStatus.Accepted);

            // Assert
            Assert.Throws<Exception>(() => lead.SwitchStatus(LeadStatus.Created));
        }
    }
}