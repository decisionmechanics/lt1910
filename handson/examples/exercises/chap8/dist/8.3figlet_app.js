import figlet from "figlet";
figlet("Hello LTree!", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data);
});
//# sourceMappingURL=8.3figlet_app.js.map