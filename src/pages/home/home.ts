import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CKEditorModule } from 'ng2-ckeditor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  editContent: string;
  config: any;

  constructor(
    public navCtrl: NavController,
    public editor: CKEditorModule
  ) {
    this.editContent = '';
    this.config = {
      uiColor: '#F8F8F8',   // 编辑框背景色
      language: 'zh-cn',  // 显示语言
      toolbarCanCollapse: true,  // 是否可收缩功能栏
      toolbar: [
        ['Maximize'],
        ['Undo', 'Redo', '-', 'Cut', ' Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Link', 'Unlink', 'Anchor', '-', 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', '-', 'Source'],
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
        ['Styles', 'Format', 'Font', 'FontSize']
      ]  // 工具部分
    };
  }

  show() {
    try {
      alert(this.editContent);
    } catch (error) {
      alert(error);
    }
  }
}
