import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-upload-and-print',
  templateUrl: './upload-and-print.component.html',
  styleUrls: ['./upload-and-print.component.css'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormFieldsService]
})
export class UploadAndPrintComponent implements OnInit {
  public service: string = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
    // ngOnInit function
  }
}
