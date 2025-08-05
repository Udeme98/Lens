import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as htmlPdf from 'html-pdf-node';

@Injectable()
export class PdfService {
  async generatePdfFromHtml(html: string, filename: string): Promise<string> {
    try {
      const options = {
        format: 'A4',
        margin: {
          top: '20mm',
          right: '20mm',
          bottom: '20mm',
          left: '20mm',
        },
        printBackground: true,
      };

      const file = { content: html };
      const pdfBuffer = await htmlPdf.generatePdf(file, options);

      const tempDir = path.join(__dirname, '..', '..', 'temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      const pdfPath = path.join(tempDir, `${filename}.pdf`);
      fs.writeFileSync(pdfPath, pdfBuffer);

      return pdfPath;
    } catch (error) {
      console.error('PDF generation error:', error);
      throw new Error(`Failed to generate PDF: ${error.message}`);
    }
  }

  async generateContractPdf(contractData: any): Promise<string> {
    const html = this.generateContractHtml(contractData);
    return this.generatePdfFromHtml(html, `contract-${contractData.contractId}`);
  }

  async generateInvoicePdf(invoiceData: any): Promise<string> {
    const html = this.generateInvoiceHtml(invoiceData);
    return this.generatePdfFromHtml(html, `invoice-${invoiceData.invoiceNumber}`);
  }

    private generateContractHtml(data: any): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Photography Contract - Lens by Damiano</title>
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              
              body {
                  font-family: 'Arial', sans-serif;
                  line-height: 1.6;
                  color: #333;
                  background-color: #f8f9fa;
              }
              
              .email-container {
                  max-width: 650px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              
              .header {
                  background-color: #262627;
                  padding: 30px;
                  text-align: right;
                  border-bottom: 4px solid #e0e0e0;
              }
              
              .logo {
                  height: 60px;
                  width: auto;
              }
              
              .content {
                  padding: 40px 30px;
              }
              
              .title {
                  color: #262627;
                  font-size: 28px;
                  font-weight: bold;
                  margin-bottom: 10px;
                  text-align: center;
              }
              
              .subtitle {
                  color: #666;
                  font-size: 16px;
                  text-align: center;
                  margin-bottom: 30px;
              }
              
              .contract-details {
                  background-color: #f8f9fa;
                  border: 1px solid #e0e0e0;
                  border-radius: 8px;
                  padding: 25px;
                  margin-bottom: 30px;
              }
              
              .section-title {
                  color: #262627;
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 15px;
                  border-bottom: 2px solid #262627;
                  padding-bottom: 5px;
              }
              
              .detail-row {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 12px;
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
              }
              
              .detail-row:last-child {
                  border-bottom: none;
              }
              
              .detail-label {
                  font-weight: 600;
                  color: #555;
                  min-width: 120px;
              }
              
              .detail-value {
                  color: #333;
                  text-align: right;
                  flex: 1;
              }
              
              .services-section {
                  margin-top: 25px;
              }
              
              .services-list {
                  list-style: none;
                  padding: 0;
              }
              
              .services-list li {
                  background-color: #ffffff;
                  padding: 10px 15px;
                  margin-bottom: 8px;
                  border-left: 4px solid #262627;
                  border-radius: 4px;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              }
              
              .pricing-section {
                  background-color: #f8f9fa;
                  border: 1px solid #e0e0e0;
                  border-radius: 8px;
                  padding: 25px;
                  margin: 25px 0;
              }
              
              .pricing-row {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 15px;
                  padding: 10px 0;
                  border-bottom: 1px solid #ddd;
              }
              
              .pricing-row:last-child {
                  border-bottom: none;
                  font-weight: bold;
                  font-size: 18px;
                  color: #262627;
                  border-top: 2px solid #262627;
                  padding-top: 15px;
              }
              
              .message-section {
                  background-color: #fff3cd;
                  border: 1px solid #ffeaa7;
                  border-radius: 8px;
                  padding: 20px;
                  margin: 25px 0;
              }
              
              .message-title {
                  color: #856404;
                  font-weight: bold;
                  margin-bottom: 10px;
              }
              
              .footer {
                  background-color: #262627;
                  color: #ffffff;
                  padding: 25px 30px;
                  text-align: center;
              }
              
              .footer h3 {
                  margin-bottom: 10px;
                  font-size: 18px;
              }
              
              .contact-info {
                  margin-top: 15px;
                  font-size: 14px;
                  line-height: 1.8;
              }
              
              .contact-info a {
                  color: #ffffff;
                  text-decoration: none;
              }
              
              .contact-info a:hover {
                  text-decoration: underline;
              }
              
              .page-break {
                  page-break-before: always;
              }
              
              @media (max-width: 600px) {
                  .content {
                      padding: 20px 15px;
                  }
                  
                  .header {
                      padding: 20px 15px;
                  }
                  
                  .detail-row {
                      flex-direction: column;
                      text-align: left;
                  }
                  
                  .detail-value {
                      text-align: left;
                      margin-top: 5px;
                  }
                  
                  .pricing-row {
                      flex-direction: column;
                  }
                  
                  .title {
                      font-size: 24px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <!-- Header with Logo -->
              <div class="header">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9IiMyNjI2MjciLz48dGV4dCB4PSIxMDAiIHk9IjM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TGVucyBieSBEYW1pYW5vPC90ZXh0Pjwvc3ZnPg==" alt="Lens by Damiano" class="logo">
              </div>
              
              <!-- Main Content -->
              <div class="content">
                  <h1 class="title">Photography Contract</h1>
                  <p class="subtitle">Contract #${data.contractId} - ${data.currentDate}</p>
                  
                  <!-- Client Information -->
                  <div class="contract-details">
                      <h2 class="section-title">Client Information</h2>
                      <div class="detail-row">
                          <span class="detail-label">Full Name:</span>
                          <span class="detail-value">${data.fullName}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Email:</span>
                          <span class="detail-value">${data.email}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Event Location:</span>
                          <span class="detail-value">${data.location}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Event Date:</span>
                          <span class="detail-value">${data.eventDate}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Duration:</span>
                          <span class="detail-value">${data.duration}</span>
                      </div>
                  </div>
                  
                  <!-- Services -->
                  <div class="services-section">
                      <h2 class="section-title">Event Type & Services</h2>
                      <div class="detail-row">
                          <span class="detail-label">Event Type:</span>
                          <span class="detail-value">${data.eventType}</span>
                      </div>
                      <div class="detail-row">
                          <span class="detail-label">Services Included:</span>
                          <span class="detail-value">${data.services}</span>
                      </div>
                  </div>
                  
                  <!-- Pricing -->
                  <div class="pricing-section">
                      <h2 class="section-title">Pricing Details</h2>
                      ${data.hourlyRate && data.hourlyRate !== 'N/A' ? `
                      <div class="pricing-row">
                          <span>Hourly Rate:</span>
                          <span>$${data.hourlyRate}/hour</span>
                      </div>
                      ` : ''}
                      ${data.retainerPrice && data.retainerPrice !== 'N/A' ? `
                      <div class="pricing-row">
                          <span>Retainer Fee:</span>
                          <span>$${data.retainerPrice}</span>
                      </div>
                      ` : ''}
                      ${data.duePrice && data.duePrice !== 'N/A' ? `
                      <div class="pricing-row">
                          <span>Remaining Balance:</span>
                          <span>$${data.duePrice}</span>
                      </div>
                      ` : ''}
                      ${data.totalFee && data.totalFee !== 'To be determined' ? `
                      <div class="pricing-row">
                          <span>Total Contract Value:</span>
                          <span>$${data.totalFee}</span>
                      </div>
                      ` : ''}
                  </div>
                  
                  <!-- Additional Message -->
                  ${data.message ? `
                  <div class="message-section">
                      <div class="message-title">Additional Notes:</div>
                      <p>${data.message}</p>
                  </div>
                  ` : ''}
                  
                  <!-- Terms and Conditions -->
                  <div style="background-color: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-top: 25px;">
                      <h3 style="color: #262627; margin-bottom: 10px;">Terms & Conditions</h3>
                      <ul style="color: #666; font-size: 14px; line-height: 1.6; padding-left: 20px;">
                          <li>This contract confirms your photography booking with Lens by Damiano</li>
                          <li>Please review all details carefully before proceeding</li>
                          <li>Payment terms and schedules are as specified in the pricing section</li>
                          <li>Cancellation policy: 48-hour notice required for rescheduling</li>
                          <li>Weather-related rescheduling will be accommodated at no additional cost</li>
                          <li>Final edited photos will be delivered within 2-3 weeks of the event</li>
                          <li>For any questions or modifications, please contact us immediately</li>
                          <li>All prices are in USD unless otherwise noted</li>
                      </ul>
                  </div>
              </div>
              
              <!-- Page Break for Signature Section -->
              <div class="page-break"></div>
              
              <!-- Signature Section -->
              <div style="margin-top: 40px; padding: 30px; border: 2px solid #262627; border-radius: 8px; background-color: #ffffff;">
                  <h3 style="color: #262627; margin-bottom: 20px; text-align: center;">Contract Agreement</h3>
                  
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px;">
                      <div style="flex: 1; margin-right: 20px;">
                          <p style="color: #666; font-size: 14px; margin-bottom: 8px;"><strong>Client Signature:</strong></p>
                          <div style="border-bottom: 2px solid #262627; height: 60px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;">
                              <span style="color: #999; font-style: italic;">Client signature here</span>
                          </div>
                          <p style="color: #666; font-size: 12px; margin-bottom: 5px;">Client Name: <strong>${data.fullName}</strong></p>
                          <p style="color: #666; font-size: 12px; margin-bottom: 5px;">Date: <strong>${data.currentDate}</strong></p>
                      </div>
                      
                      <div style="flex: 1; margin-left: 20px;">
                          <p style="color: #666; font-size: 14px; margin-bottom: 8px;"><strong>Photographer Signature:</strong></p>
                          <div style="border-bottom: 2px solid #262627; height: 60px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;">
                              <span style="color: #999; font-style: italic;">Photographer signature here</span>
                          </div>
                          <p style="color: #666; font-size: 12px; margin-bottom: 5px;">Photographer: <strong>Lens by Damiano</strong></p>
                          <p style="color: #666; font-size: 12px; margin-bottom: 5px;">Date: <strong>${data.currentDate}</strong></p>
                      </div>
                  </div>
                  
                  <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                      <p style="color: #666; font-size: 12px; margin: 0;">
                          <strong>Important:</strong> By signing this contract, both parties agree to the terms and conditions outlined above. 
                          This contract becomes legally binding upon signature by both parties.
                      </p>
                  </div>
              </div>
              
              <!-- Footer -->
              <div class="footer">
                  <h3>Lens by Damiano</h3>
                  <p>Professional Photography Services</p>
                  <div class="contact-info">
                      <p>📧 ${data.contactEmail}</p>
                      <p>📱 ${data.phone}</p>
                      <p>📍 ${data.location}</p>
                  </div>
                  <p style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
                      Thank you for choosing Lens by Damiano for your photography needs.
                  </p>
              </div>
          </div>
      </body>
      </html>
    `;
  }

  private generateInvoiceHtml(data: any): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Invoice #${data.invoiceNumber} - Lens by Damiano</title>
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              
              body {
                  font-family: 'Arial', sans-serif;
                  line-height: 1.6;
                  color: #333;
                  background-color: #f8f9fa;
              }
              
              .email-container {
                  max-width: 700px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              
              .header {
                  background-color: #262627;
                  padding: 30px;
                  text-align: right;
                  border-bottom: 4px solid #e0e0e0;
              }
              
              .logo {
                  height: 60px;
                  width: auto;
              }
              
              .content {
                  padding: 40px 30px;
              }
              
              .invoice-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 40px;
                  padding-bottom: 20px;
                  border-bottom: 2px solid #262627;
              }
              
              .invoice-info {
                  flex: 1;
              }
              
              .invoice-title {
                  color: #262627;
                  font-size: 32px;
                  font-weight: bold;
                  margin-bottom: 5px;
              }
              
              .invoice-number {
                  color: #666;
                  font-size: 18px;
                  margin-bottom: 10px;
              }
              
              .invoice-date {
                  color: #888;
                  font-size: 14px;
              }
              
              .client-info {
                  text-align: right;
                  flex: 1;
              }
              
              .client-name {
                  color: #262627;
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 8px;
              }
              
              .client-details {
                  color: #666;
                  font-size: 14px;
                  line-height: 1.6;
              }
              
              .project-details {
                  background-color: #f8f9fa;
                  border: 1px solid #e0e0e0;
                  border-radius: 8px;
                  padding: 25px;
                  margin-bottom: 30px;
              }
              
              .section-title {
                  color: #262627;
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 15px;
                  border-bottom: 2px solid #262627;
                  padding-bottom: 5px;
              }
              
              .detail-grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 20px;
                  margin-top: 15px;
              }
              
              .detail-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 8px 0;
                  border-bottom: 1px solid #eee;
              }
              
              .detail-item:last-child {
                  border-bottom: none;
              }
              
              .detail-label {
                  font-weight: 600;
                  color: #555;
              }
              
              .detail-value {
                  color: #333;
                  text-align: right;
              }
              
              .services-table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 25px 0;
                  background-color: #ffffff;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              
              .services-table th {
                  background-color: #262627;
                  color: #ffffff;
                  padding: 15px;
                  text-align: left;
                  font-weight: 600;
              }
              
              .services-table td {
                  padding: 15px;
                  border-bottom: 1px solid #eee;
              }
              
              .services-table tr:last-child td {
                  border-bottom: none;
              }
              
              .services-table tr:nth-child(even) {
                  background-color: #f8f9fa;
              }
              
              .amount {
                  font-weight: bold;
                  color: #262627;
              }
              
              .total-section {
                  background-color: #f8f9fa;
                  border: 1px solid #e0e0e0;
                  border-radius: 8px;
                  padding: 25px;
                  margin: 25px 0;
              }
              
              .total-row {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 15px;
                  padding: 10px 0;
                  border-bottom: 1px solid #ddd;
              }
              
              .total-row:last-child {
                  border-bottom: none;
                  font-weight: bold;
                  font-size: 20px;
                  color: #262627;
                  border-top: 2px solid #262627;
                  padding-top: 15px;
              }
              
              .payment-info {
                  background-color: #fff3cd;
                  border: 1px solid #ffeaa7;
                  border-radius: 8px;
                  padding: 20px;
                  margin: 25px 0;
              }
              
              .payment-title {
                  color: #856404;
                  font-weight: bold;
                  margin-bottom: 10px;
              }
              
              .footer {
                  background-color: #262627;
                  color: #ffffff;
                  padding: 25px 30px;
                  text-align: center;
              }
              
              .footer h3 {
                  margin-bottom: 10px;
                  font-size: 18px;
              }
              
              .contact-info {
                  margin-top: 15px;
                  font-size: 14px;
                  line-height: 1.8;
              }
              
              .contact-info a {
                  color: #ffffff;
                  text-decoration: none;
              }
              
              .contact-info a:hover {
                  text-decoration: underline;
              }
              
              @media (max-width: 600px) {
                  .content {
                      padding: 20px 15px;
                  }
                  
                  .header {
                      padding: 20px 15px;
                  }
                  
                  .invoice-header {
                      flex-direction: column;
                      gap: 20px;
                  }
                  
                  .client-info {
                      text-align: left;
                  }
                  
                  .detail-grid {
                      grid-template-columns: 1fr;
                  }
                  
                  .services-table {
                      font-size: 14px;
                  }
                  
                  .services-table th,
                  .services-table td {
                      padding: 10px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <!-- Header with Logo -->
              <div class="header">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiIGZpbGw9IiMyNjI2MjciLz48dGV4dCB4PSIxMDAiIHk9IjM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TGVucyBieSBEYW1pYW5vPC90ZXh0Pjwvc3ZnPg==" alt="Lens by Damiano" class="logo">
              </div>
              
              <!-- Main Content -->
              <div class="content">
                  <!-- Invoice Header -->
                  <div class="invoice-header">
                      <div class="invoice-info">
                          <h1 class="invoice-title">INVOICE</h1>
                          <p class="invoice-number">Invoice #${data.invoiceNumber}</p>
                          <p class="invoice-date">Date: ${data.eventDate || new Date().toLocaleDateString()}</p>
                          ${data.dueDate ? `<p class="invoice-date">Due Date: ${data.dueDate}</p>` : ''}
                      </div>
                      <div class="client-info">
                          <h2 class="client-name">${data.clientName}</h2>
                          <div class="client-details">
                              <p>${data.clientEmail}</p>
                              ${data.clientPhone ? `<p>${data.clientPhone}</p>` : ''}
                              ${data.clientAddress ? `<p>${data.clientAddress}</p>` : ''}
                          </div>
                      </div>
                  </div>
                  
                  <!-- Project Details -->
                  <div class="project-details">
                      <h2 class="section-title">Project Information</h2>
                      <div class="detail-grid">
                          <div class="detail-item">
                              <span class="detail-label">Project:</span>
                              <span class="detail-value">${data.projectName || 'Photography Services'}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Event Date:</span>
                              <span class="detail-value">${data.eventDate || 'To be determined'}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Location:</span>
                              <span class="detail-value">${data.location || 'To be determined'}</span>
                          </div>
                          ${data.additionalServices ? `
                          <div class="detail-item">
                              <span class="detail-label">Additional Services:</span>
                              <span class="detail-value">${data.additionalServices}</span>
                          </div>
                          ` : ''}
                      </div>
                  </div>
                  
                  <!-- Services Table -->
                  <table class="services-table">
                      <thead>
                          <tr>
                              <th>Description</th>
                              <th>Quantity</th>
                              <th>Rate</th>
                              <th>Amount</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>${data.description || 'Photography Services'}</td>
                              <td>${data.quantity || 1}</td>
                              <td>$${data.rate || data.totalAmount}</td>
                              <td class="amount">$${data.amount || data.totalAmount}</td>
                          </tr>
                      </tbody>
                  </table>
                  
                  <!-- Total Section -->
                  <div class="total-section">
                      ${data.subtotal ? `
                      <div class="total-row">
                          <span>Subtotal:</span>
                          <span>$${data.subtotal}</span>
                      </div>
                      ` : ''}
                      ${data.salesTax ? `
                      <div class="total-row">
                          <span>Sales Tax:</span>
                          <span>$${data.salesTax}</span>
                      </div>
                      ` : ''}
                      ${data.shippingHandling ? `
                      <div class="total-row">
                          <span>Shipping & Handling:</span>
                          <span>$${data.shippingHandling}</span>
                      </div>
                      ` : ''}
                      <div class="total-row">
                          <span>Total Amount:</span>
                          <span>$${data.totalAmount}</span>
                      </div>
                  </div>
                  
                  <!-- Payment Information -->
                  <div class="payment-info">
                      <div class="payment-title">Payment Information</div>
                      <p><strong>Payment Method:</strong> Bank Transfer / Cash</p>
                      <p><strong>Payment Terms:</strong> ${data.dueDate ? `Due by ${data.dueDate}` : 'Due upon receipt'}</p>
                      <p><strong>Contact for Payment:</strong> ${data.contactEmail}</p>
                      <p><strong>Phone:</strong> ${data.phone}</p>
                  </div>
              </div>
              
              <!-- Footer -->
              <div class="footer">
                  <h3>Lens by Damiano</h3>
                  <p>Professional Photography Services</p>
                  <div class="contact-info">
                      <p>📧 ${data.contactEmail}</p>
                      <p>📱 ${data.phone}</p>
                      <p>📍 ${data.location || 'Oman'}</p>
                  </div>
                  <p style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
                      Thank you for choosing Lens by Damiano for your photography needs.
                  </p>
              </div>
          </div>
      </body>
      </html>
    `;
  }

  async cleanup() {
    // Cleanup temp files if needed
    const tempDir = path.join(__dirname, '..', '..', 'temp');
    if (fs.existsSync(tempDir)) {
      const files = fs.readdirSync(tempDir);
      for (const file of files) {
        if (file.endsWith('.pdf')) {
          fs.unlinkSync(path.join(tempDir, file));
        }
      }
    }
  }
} 