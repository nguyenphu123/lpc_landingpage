import AES from "crypto-js/aes";
import { enc } from "crypto-js";
export default function encryptId(str) {
  const ciphertext = AES.encrypt(str, "UTF-8");
  return encodeURIComponent(ciphertext.toString());
}
