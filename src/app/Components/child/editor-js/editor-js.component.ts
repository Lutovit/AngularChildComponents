import { Component, OnInit} from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list'; 
import Table from '@editorjs/table';
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";


@Component({
  selector: 'app-editor-js',
  templateUrl: './editor-js.component.html',
  styleUrl: './editor-js.component.css'
})


export class EditorJsComponent implements OnInit
{
  public editor : any = null;


  constructor(){}


  ngOnInit(): void
  {
    this.initEditor();      
  }


  initEditor():void
  {
    this.editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: 'editorjs',
      tools:
      {
        header: {
          class: Header as any,
          inlineToolbar: ['link']
        },

        list: {
          class: List as any,
          inlineToolbar: ['link', 'bold']
        }, 

        table: {
          class: Table as any,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3
          }
        },

        image: {
          class: SimpleImage,
          inlineToolbar: true
        }


      },



      /**
      * onReady callback
      */
      onReady: () => 
      {
        console.log('Editor.js is ready to work!');
      },


      /**
      * onChange callback
      */
      onChange: (api, event) =>
      {
        //onsole.log('Now I know that Editor\'s content changed!', event);
        this.saveData();
      },


      minHeight : 150,
      



    });
  }




  saveData():void
  {
    this.editor.save().then((outputData : any) =>
    {
      console.log('Article data: ', outputData)
    }).catch((error : any) =>
    {
      console.log('Saving failed: ', error)
    });

  }
}
