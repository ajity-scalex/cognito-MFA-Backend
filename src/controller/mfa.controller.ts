
import getQRCode from '../service/getQR.service';
import validateMFA from '../service/validateMFA.service';

const mfaController = {
    getQR: async (req: any, res: any) => {
        try{
            const AccessToken = req.query.accessToken;
            console.log(AccessToken);
            // const AccessToken = "eyJraWQiOiJnUklaS2Urb09tMlZFQmk5UEI4TnRNUmZtaU5vR0xlSTVGbXczbDJYbXVJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNmU1MjBmZC02NmM3LTQ0MTgtYjMxZS03NDg1ZGVjYWM1MjMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3hRNUtRajNLNSIsImNsaWVudF9pZCI6IjNhaHBxaXBpNGtiZmVucXYyN2g4amRzbWJmIiwib3JpZ2luX2p0aSI6IjVhOThlZDgwLTBiMmItNDgyZS1hODU5LTY3ZTc3NzAwNTU0NCIsImV2ZW50X2lkIjoiN2E0YzBmNzctMzBhMC00YTU5LTkwZWYtMWY1MmUzYmMwNjU5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1ODgwNzc4OCwiZXhwIjoxNjU4ODExMzg4LCJpYXQiOjE2NTg4MDc3ODgsImp0aSI6IjFmZDgwYmFjLTRkOGItNGNkZi04OTEyLTQ5MzMxMjljZWExNSIsInVzZXJuYW1lIjoiZDZlNTIwZmQtNjZjNy00NDE4LWIzMWUtNzQ4NWRlY2FjNTIzIn0.h-MvhBnAVfRqUv6PnPLOSucj9DLlduNB45SEtUmWIh_p44lpaKVqK6Akmlw8EhpzKfZexOU0ze5CNacUXpGr7F_1DGa-jZhT3Wi_a2qYAlapyl8vtkXcgpDN4hz5EwHiX0GQS_QWuxY7ahKOyFMjyFmKBzgacL6n2l06GFy8bbDMAGJ5s8TOxzc4QSiVCBV1o7h0NO6dUH-J__JioK8XRP3F8wwNnSoKrM1QrXIUgwWKswhEhiHLe-badMzV_gEgKxrh8E28FhUfjukaYGB7QSDsBLrWTG1FaNRi0wkx89bQQ-7qZMRJZUlkRMVup_r-3qeXHbUFUcHMgw63ENXPMA"
            // res.status(200).json(AccessToken);     
            const payLoad = await getQRCode(AccessToken);
            console.log(payLoad);
            res.send(payLoad);
        }catch(err) {
            console.log(err);
        }
    },

    validateMFA: async(req: any, res: any) => {
        try{
            const AccessToken = req.query.accessToken;
            const UserCode = req.query.userCode;
            console.log(AccessToken);
            // const AccessToken = "eyJraWQiOiJnUklaS2Urb09tMlZFQmk5UEI4TnRNUmZtaU5vR0xlSTVGbXczbDJYbXVJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkNmU1MjBmZC02NmM3LTQ0MTgtYjMxZS03NDg1ZGVjYWM1MjMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3hRNUtRajNLNSIsImNsaWVudF9pZCI6IjNhaHBxaXBpNGtiZmVucXYyN2g4amRzbWJmIiwib3JpZ2luX2p0aSI6IjVhOThlZDgwLTBiMmItNDgyZS1hODU5LTY3ZTc3NzAwNTU0NCIsImV2ZW50X2lkIjoiN2E0YzBmNzctMzBhMC00YTU5LTkwZWYtMWY1MmUzYmMwNjU5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1ODgwNzc4OCwiZXhwIjoxNjU4ODExMzg4LCJpYXQiOjE2NTg4MDc3ODgsImp0aSI6IjFmZDgwYmFjLTRkOGItNGNkZi04OTEyLTQ5MzMxMjljZWExNSIsInVzZXJuYW1lIjoiZDZlNTIwZmQtNjZjNy00NDE4LWIzMWUtNzQ4NWRlY2FjNTIzIn0.h-MvhBnAVfRqUv6PnPLOSucj9DLlduNB45SEtUmWIh_p44lpaKVqK6Akmlw8EhpzKfZexOU0ze5CNacUXpGr7F_1DGa-jZhT3Wi_a2qYAlapyl8vtkXcgpDN4hz5EwHiX0GQS_QWuxY7ahKOyFMjyFmKBzgacL6n2l06GFy8bbDMAGJ5s8TOxzc4QSiVCBV1o7h0NO6dUH-J__JioK8XRP3F8wwNnSoKrM1QrXIUgwWKswhEhiHLe-badMzV_gEgKxrh8E28FhUfjukaYGB7QSDsBLrWTG1FaNRi0wkx89bQQ-7qZMRJZUlkRMVup_r-3qeXHbUFUcHMgw63ENXPMA"
            // res.status(200).json(AccessToken);     
            const payLoad = await validateMFA(UserCode, AccessToken);
            console.log(payLoad);
            res.send(payLoad);
        }catch(err) {
            console.log(err);
            res.send(err);
        } 
    }
}

export default mfaController;