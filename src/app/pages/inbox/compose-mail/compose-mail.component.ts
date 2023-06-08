import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  public editor='';
  public editorContent='';
  public editorConfig = {
    placeholder: 'Enter Mail Text'
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = this.editorContent;
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);
  }

  onEditorBlured(quill:any) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill:any) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill:any) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  // onContentChanged({ quill, html, text }) {
  //   console.log('quill content is changed!', quill, html, text);
  // }

}
