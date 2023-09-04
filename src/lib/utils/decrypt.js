import AES from "crypto-js/aes";
import { enc } from "crypto-js";
export default function decryptId(str) {
  const decodedStr = decodeURIComponent(str);
  return AES.decrypt(decodedStr, "UTF-8").toString(enc.Utf8);
}
