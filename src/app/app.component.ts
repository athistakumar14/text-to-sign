import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Text to Sign';
  signTextValue: string = '';
  textValue: string = '';
  inputTextValue: string = '';
  textArea: string = '';

  getValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  
  sendMessage() {
    let newText: string = '';
    const text: string = this.inputTextValue;
    this.inputTextValue = '';
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        this.signTextValue = text[i];
        this.textValue = text[i];
        const letter = text.charAt(i);
        const isLastLetter = i === text.length - 1;
        if (isLastLetter) newText += letter;
        else newText += letter;
        this.textArea = newText;
      }, i * 1000);
    }
  }
}
