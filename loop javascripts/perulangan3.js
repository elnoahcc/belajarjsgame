const platform = { situs: "SMKN6SOLO", ekstensi: ".sch", id: ".id" };
let output = "";
for (let key in platform) {
 output += platform[key];
}
console.log(output);