import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-html-to-pdf-1',
  templateUrl: './html-to-pdf-1.component.html',
  styleUrl: './html-to-pdf-1.component.css'
})


export class HtmlToPdf1Component
{
  @ViewChild("content", {static: false})
  _content: ElementRef|undefined;
  id : string = "233626c8-e028-4f4f-8a4a-90d4c0fb1689";

  apiUrl : string = "https://localhost:7263/api/"



  constructor(private http: HttpClient) { }

  getHtml(id : string)
  {
    return this.http.get(this.apiUrl + "ExplanatoryNote/GetPdfFile_V2" + "/" + id);
  }

  downloadPDF() 
  {
    this.getHtml(this.id).subscribe(
      {
        next: (data: any) => 
          {
            const doc = new jsPDF();

            if(this._content != null)
            {
              console.log(data);
              
              const content : any = data.data;     
              
              doc.text(content, 10, 10);
              doc.save('html-to-pdf.pdf');
              
            
            }

          },
        error: (error) => 
          {
            console.log(error);
          }
      });





 
  }
}