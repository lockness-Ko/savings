var socket = io();

socket.on("getBalance", (balance) => {
    $("#balOut").text("$"+balance+" AUDT");
});

let getBalance = () => {
    socket.emit("getBalance", $("#bal").val());
}