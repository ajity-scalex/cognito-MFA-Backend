import Router from 'express';
import mfaController from '../controller/mfa.controller';
const router = Router();

router.get('/qrcode', mfaController.getQR);

router.post('/validatemfa', mfaController.validateMFA)

export default router;