"use strict";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/game")
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.on("UpdateGameState", (gameStateData) => { updateGameState(gameStateData); });

async function startConnection() {
    try {
        await connection.start();
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

startConnection();

function sendPlayMoveCommand(move) {
    connection.invoke("PlayMove", move).catch(function (error) {
        return console.error(error.toString());
    })
}

function updateGameState(gameStateData) {
    applyGameState(JSON.parse(gameStateData));
}
