const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let dreamTeam = "";
  members = members.filter((val) => (typeof val === "string"));
  members = members.map((val)=>val.trim());
  members.sort((a,b)=>a[0].toUpperCase()>b[0].toUpperCase()?1:-1);
  members.forEach((val)=> dreamTeam += val[0].toUpperCase());
  return dreamTeam;
};