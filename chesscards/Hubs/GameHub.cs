using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace chesscards.Hubs
{
    internal class GameHub : Hub
    {
        public async Task PlayMove(string move)
        {
            Console.WriteLine($"PlayMove({move})");
            await Clients.All.SendAsync(
                "UpdateGameState",
                "{" +
                    "\"boardState\": {" +
                        "\"pieces\": \"BBBB....................................................\"" +
                    "}" +
                "}");
        }
    }
}
