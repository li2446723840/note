import { getData as get, save, dbUrl } from "./modules/db";//使用as修改getData为get
get();
save();
console.log(dbUrl);