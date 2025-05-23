import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

   //Injecting services
  constructor(private _title: Title, private meta: Meta) { 
  }

  //Update Title 
  updateTitle(title: string) {
    this._title.setTitle(`Mabunda Group - ${title}`);
    this.meta.updateTag({ name: 'title', content: title})
  }

  //Update all MetaTags as per route changes
  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m=> this.meta.updateTag(m));
  }

}
