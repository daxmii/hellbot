const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const kinResponses = ["your government assigned kin is...komaeda nagito!", "your government assigned kin is...shrek!", "your government assigned kin is...barry b. benson!", "your government assigned kin is...sans undertale!", "your government assigned kin is...lord farquaad!", "your government assigned kin is...vriska serket!", "your government assigned kin is...gamzee makara!", "your government assigned kin is...david hasselhoff!", "your government assigned kin is...miku hatsune!", "your government assigned kin is...shadow the hedgehog!", "your government assigned kin is...sonic the hedgehog!", "your government assigned kin is...surprised pikachu!", "your government assigned kin is...big chungus!", "your government assigned kin is...eridan ampora!", "your government assigned kin is...catra!",  "your government assigned kin is...adora!", "your government assigned kin is...castiel!"]

client.on("ready", () => {
  console.log("hail satan.");
});
client.on("message", (message) => {

    if(message.author.bot) return;

    msg = message.content.toLowerCase();

    if(msg.startsWith("hellbot send hoya")) {
        message.channel.send("<:hoya:557734335046877228>");
}else
    if(msg.includes("daddy")) {
        message.channel.send("i'm kinkshaming");
}else
    if(msg.startsWith("hellbot don't kinkshame me")) {
        message.channel.send("kinkshaming is my kink.");
}else
    if(msg.startsWith("hellbot dont kinkshame me")) {
        message.channel.send("kinkshaming is my kink.");
}else
    if(msg.includes("clown"))  {
        message.channel.send("<:clowned:558770198493265923>");
}else
    if(msg.startsWith("hellbot are you gay")) {
        message.channel.send("<:gayknife:558769187666001927>");
}else
    if(msg.startsWith("hellbot where are you from")) {
        message.channel.send("country roads");
        message.channel.send("take me home");
        message.channel.send("to the place");
        message.channel.send("**I BELOOOOOOOONG**");
        message.channel.send("west virginiaaaaa");
        message.channel.send("mountain mamaaaaa");
        message.channel.send("take me home,");
        message.channel.send("country roadssss,,,");
}else
    if(msg.startsWith("hellbot what's my government assigned kin")) {
        var response = kinResponses [Math.floor(Math.random()*kinResponses .length)];
        message.channel.send(response).then().catch(console.error);
}else
    if(msg.startsWith("hellbot whats my government assigned kin")) {
        var response = kinResponses [Math.floor(Math.random()*kinResponses .length)];
        message.channel.send(response).then().catch(console.error);
}
});

client.login(process.env.BOT_TOKEN);
