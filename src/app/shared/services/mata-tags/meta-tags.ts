import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private _title: Title, private meta: Meta) { 
  }

  updateTitle(title: string) {
    this._title.setTitle(`Mabunda Group - ${title}`);
    this.meta.updateTag({ name: 'title', content: title})
  }

  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m=> this.meta.updateTag(m));
  }

}
