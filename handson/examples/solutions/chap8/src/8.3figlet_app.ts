import figlet from "figlet";
figlet("Hello LTree!", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data);
});