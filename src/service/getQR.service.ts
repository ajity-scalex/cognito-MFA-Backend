import { AWS_ACCESS_KEY, AWS_SECRET_KEY, REGION } from "../config/config";

import AWS from "aws-sdk";
import QR from "qrcode";


AWS.config.update({
  region: "us-east-1",
  apiVersion: "latest",
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});
const cognito = new AWS.CognitoIdentityServiceProvider({ region: REGION })

const getQRCode = async (AccessToken: string) =>
  await new Promise((resolve, reject) => {
    cognito.associateSoftwareToken({ AccessToken }, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        const name = "cognito mfa";
        const uri = `otpauth://totp/${decodeURI(name)}?secret=${
          result.SecretCode
        }`;
        console.log(uri);

        QR.toDataURL(uri, (err:Error, result:string) => {
          if (err) reject(err);
          else resolve({"data":result});
        });
      }
    });
  });

export default getQRCode;