import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('main') private main!: ElementRef;
  scrollTop: number | null = null;
  chats: Chat[] = [];

  ngAfterViewInit() {
    this.load();
  }

  private async load() {
    let i = 0;
    while(true) {
      if (i <= raws.length - 1) {
        await this.delayedAdd(raws[i++]);
      } else {
        i = 0;
        // this.chats = [];
      }
      this.scrollTop = this.main.nativeElement.scrollHeight;
    }
  }

  private delayedAdd(chat: Chat): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.chats.push(chat);
        resolve('chat added');
      }, 1000);
    });
  }
}

type Chat = {
  from: 'receiver' | 'sender',
  message: string;
};


const raws: Chat[] = [
  {
    from: 'receiver',
    message: 'Gejala apa yg anda rasakan?'
  },
  {
    from: 'sender',
    message: 'Panas dingin'
  },
  {
    from: 'receiver',
    message: 'Kenapa bisa begitu?'
  },
  {
    from: 'receiver',
    message: 'Apa yang kamu makan sebelumnya?'
  },
  {
    from: 'sender',
    message: 'Wah aku juga kurang tau, masalahnya waktu itu aku naik kereta, 2 hari kemudian ada gejala ini'
  },
  {
    from: 'receiver',
    message: 'Gejala apa yg anda rasakan?'
  },
  {
    from: 'sender',
    message: 'Panas dingin'
  },
  {
    from: 'receiver',
    message: 'Kenapa bisa begitu?'
  },
  {
    from: 'receiver',
    message: 'Apa yang kamu makan sebelumnya?'
  },
  {
    from: 'sender',
    message: 'Wah aku juga kurang tau, masalahnya waktu itu aku naik kereta, 2 hari kemudian ada gejala ini'
  },
];