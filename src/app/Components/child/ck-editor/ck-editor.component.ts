import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { Clipboard } from 'ckeditor5';

import
{
  ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Base64UploadAdapter,
	BlockToolbar,
	Bold,
	Essentials,
	FindAndReplace,
	FontSize,
	Heading,
	ImageBlock,
	ImageInsert,
	ImageInsertViaUrl,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	Paragraph,
	PasteFromOffice,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Undo,
	type EditorConfig
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ru.js';



@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrl: './ck-editor.component.css',
  encapsulation: ViewEncapsulation.None
})

export class CkEditorComponent 
{
	constructor(private changeDetector: ChangeDetectorRef) {}

	public isLayoutReady = false;
	public Editor = ClassicEditor;
	public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
  


	public ngAfterViewInit(): void
  {
		this.config = {
			toolbar: {
				items: [
					'undo',
					'redo',
					'|',
					'findAndReplace',
					'|',
					'heading',
					'|',
					'fontSize',
					'|',
					'bold',
					'italic',
					'|',
					'specialCharacters',
					'link',
					'insertImage',
					'insertTable',
					'|',
					'alignment'
				],
				shouldNotGroupWhenFull: false
			},
			plugins: [
				AccessibilityHelp,
				Alignment,
				Autoformat,
				AutoImage,
				AutoLink,
				Autosave,
				BalloonToolbar,
				Base64UploadAdapter,
				BlockToolbar,
				Bold,
				Essentials,
				FindAndReplace,
				FontSize,
				Heading,
				ImageBlock,
				ImageInsert,
				ImageInsertViaUrl,
				ImageToolbar,
				ImageUpload,
				Italic,
				Link,
				Paragraph,
				PasteFromOffice,
				SelectAll,
				SpecialCharacters,
				SpecialCharactersArrows,
				SpecialCharactersCurrency,
				SpecialCharactersEssentials,
				SpecialCharactersLatin,
				SpecialCharactersMathematical,
				SpecialCharactersText,
				Table,
				TableCaption,
				TableCellProperties,
				TableColumnResize,
				TableProperties,
				TableToolbar,
				TextTransformation,
				Undo
			],
			balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage'],
			blockToolbar: ['fontSize', '|', 'bold', 'italic', '|', 'link', 'insertImage', 'insertTable'],
			fontSize: {
				options: [10, 12, 14, 'default', 18, 20, 22],
				supportAllValues: true
			},
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			image: {
				toolbar: ['imageTextAlternative']
			},
			initialData: "",				
			language: 'ru',
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			placeholder: 'Type or paste your content here!',
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			},
			translations: [translations]
		};

		this.isLayoutReady = true;
		this.changeDetector.detectChanges();





	}


  public onChange( { editor }: ChangeEvent )
  {
    const data = editor.getData();
    //console.log( editor );

    editor.plugins.get( 'ClipboardPipeline' ).on( 'inputTransformation', ( evt, data ) =>
    {
      console.log("_____________inputTransformation____________");
      console.log( data );

    });

    /*
    const domParser = new DOMParser();
    const htmlElement = domParser.parseFromString(data, 'text/html');


    let subTitles = htmlElement.getElementsByTagName("h1"); 
    let paragraphs = htmlElement.getElementsByTagName("p"); 
    let subTitlesAll = htmlElement.querySelectorAll("h1, h2, h3, h4, h5"); 
    let tables = htmlElement.getElementsByTagName("table"); 
    let images = htmlElement.images;
    */
    

    //console.log( data );

    /*
    console.log(htmlElement);
    console.log(paragraphs);
    console.log(subTitlesAll);
    console.log(tables);
    console.log(images);
    */
  }


  
}
