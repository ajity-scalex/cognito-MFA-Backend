import AWS from "aws-sdk";
import { REGION } from "../config/config";

const cognito = new AWS.CognitoIdentityServiceProvider({ region: REGION })

const validateMFA = async(UserCode: string, AccessToken: string) => 
    await new Promise((resolve, reject) => {
        const params = {
            AccessToken,
            UserCode
        }

        cognito.verifySoftwareToken(params, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });

export default validateMFA;