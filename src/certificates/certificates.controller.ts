import { Controller, Post, Put } from '@nestjs/common';
import { CertificateService } from './certificates.service';

interface PdfResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  async createPDF(): Promise<PdfResponse> {
    await this.certificateService.createPDF();
    return {
      code: 200,
      message: 'Success.',
    };
  }

  @Put()
  async editOne(): Promise<PdfResponse> {
    await this.certificateService.editPDF();
    return {
      code: 200,
      message: 'Success.',
    };
  }
}
