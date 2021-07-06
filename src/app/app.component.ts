import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { Chat } from './shared/model/chat.model';
import { Gejala } from './shared/model/gejala.model';
import { Penyakit } from './shared/model/penyakit.model';
import { Pertanyaan } from './shared/model/pertanyaan.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('main') private main!: ElementRef;
  scrollTop: number | null = null;
  chats: Chat[] = [];
  gejalas: Gejala[] = [];
  penyakits: Penyakit[] = [];
  pertanyaans: Pertanyaan[] = [];
  generatedId: number = 1;
  end: boolean = false;
  gejalaIdAnswer: number[] = [];

  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.load();
  }

  private async load() {
    this.gejalas = await this.http.get<Gejala[]>('assets/jsons/gejala.json').toPromise();
    this.penyakits = await this.http.get<Penyakit[]>('assets/jsons/penyakit.json').toPromise();
    this.pertanyaans = await this.http.get<Pertanyaan[]>('assets/jsons/pertanyaan.json').toPromise();

    let i = 0;
    const subscription: Subscription = interval(500).subscribe(res => {
      if (this.end === true) {
        const pert = this.pertanyaans[this.pertanyaans.length - 1].pertanyaan.split('|');
        if (this.gejalaIdAnswer.length === 0) {
          this.chats.push(new Chat(this.generatedId++, 'receiver', pert[1]));
        } else {
          let red: string = pert[0];

          const compared: string = this.compareAnswerWithPenyakit().join('|');
          console.log(compared);

          switch (compared) {
            case '1|1':
              red = red.replace('{penyakit}', 'influenza atau tipes');
              break;

              case '1|0':
                red = red.replace('{penyakit}', 'influenza');
                break;

                case '0|1':
              red = red.replace('{penyakit}', 'tipes');
              break;
          }

          
          
          this.chats.push(new Chat(this.generatedId++, 'receiver', red));
        }
        subscription.unsubscribe();
        this.scrollTop = this.main.nativeElement.scrollHeight;
        return;
      }
      
      if (this.chats.length === 0 || this.chats[this.chats.length - 1].from === 'sender') {
        this.chats.push(new Chat(this.generatedId++, 'receiver', this.pertanyaans[i].pertanyaan));
        if (!this.pertanyaans[i].repeatable) {
          i++;
        }
        this.scrollTop = this.main.nativeElement.scrollHeight;
      }
    });
  }

  private compareAnswerWithPenyakit(): number[] {
    let sameWithInfluenza: number = 0;
    let sameWithTipes: number = 0;

    const ans: number[] = [0,0];

    for (const gejala of this.penyakits[0].gejalas) {
      for (const savedAnswer of this.gejalaIdAnswer) {
        if (savedAnswer === gejala) {
          sameWithInfluenza++;
        }
      }
    }

    for (const gejala of this.penyakits[1].gejalas) {
      for (const savedAnswer of this.gejalaIdAnswer) {
        if (savedAnswer === gejala) {
          sameWithTipes++;
        }
      }
    }

    if (sameWithInfluenza < sameWithTipes) {
      ans[0] = 0;
      ans[1] = 1;
    } else if (sameWithInfluenza > sameWithTipes) {
      ans[0] = 1;
      ans[1] = 0;
    } else if (sameWithInfluenza === sameWithTipes) {
      ans[0] = 1;
      ans[1] = 1;
    }

    if (sameWithInfluenza === this.penyakits[0].gejalas.length) {
      ans[0] = 1;
    }

    if (sameWithTipes === this.penyakits[1].gejalas.length) {
      ans[1] = 1;
    }

    return ans;
  }

  storeAnswer(gejala: Gejala | string) {
    if (typeof gejala === 'object') {
      this.chats.push(new Chat(this.generatedId++, 'sender', gejala.name));
      this.scrollTop = this.main.nativeElement.scrollHeight;
      this.gejalas.splice(this.gejalas.indexOf(this.gejalas.find(gejala2 => gejala2.id === gejala.id)!), 1);
      this.gejalaIdAnswer.push(gejala.id);
    } else {
      if (gejala === 'tidak_ada') {
        this.chats.push(new Chat(this.generatedId++, 'sender', 'Tidak Ada'));
        this.end = true;
      } else if (gejala === 'tanya_ulang') {
        window.location.reload();
      }
    }
  }
}