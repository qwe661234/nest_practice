import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HummusRecipe = require('hummus-recipe');

@Injectable()
export class CertificateService {
  async createPDF(): Promise<void> {
    const pdfDoc = new HummusRecipe('new', 'template.pdf');
    pdfDoc.createPage('A4').endPage().endPDF();
  }

  async editPDF(): Promise<void> {
    const pdfDoc = new HummusRecipe('template.pdf', 'template.pdf');
    pdfDoc
      .editPage(1)
      .text('Add some texts to an existing pdf file', 100, 100)
      .endPage()
      .endPDF();
  }
}
